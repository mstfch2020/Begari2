using System;
using System.Text;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using WebApiReact.Domain.Repositories;
using WebApiReact.Extensions;
using WebApiReact.Helpers;
using WebApiReact.Persistence.Repositories;
using WebApiRestful.Domain.Repositories;
using WebApiRestful.Persistence.Repositories;

namespace WebApiReact
{
    public class Startup
    {
        private readonly ILogger _logger;
        public Startup(IConfiguration configuration, ILogger<Startup> logger)
        {
            Configuration = configuration;
            _logger = logger;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("tokenManagement");
            services.Configure<TokenManagement>(appSettingsSection);

            // configure jwt authentication
            var token = appSettingsSection.Get<TokenManagement>();
            var key = Encoding.ASCII.GetBytes(token.Secret);
            // services.AddAuthentication(o =>
            // {
            //     o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //     o.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            //     o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            // }).AddCookie(options =>
            // {
            //     options.AccessDeniedPath = new PathString("/Account/Login/");
            //     options.LoginPath = new PathString("/Account/Login/");
            // })
            services.AddAuthentication(x =>
                   {
                       x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                       x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                   })
           .AddJwtBearer(x =>
           {
               x.RequireHttpsMetadata = false;
               x.SaveToken = true;
               x.TokenValidationParameters = new TokenValidationParameters
               {
                   ValidateIssuerSigningKey = true,
                   IssuerSigningKey = new SymmetricSecurityKey(key),
                   ValidIssuer = token.Issuer,
                   ValidAudience = token.Audience,
                   ValidateIssuer = false,
                   ValidateAudience = false
               };
           });



            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromMinutes(30);//You can set Time   
            });
            services.AddCors(options =>
            {
                // this defines a CORS policy called "default"
                options.AddPolicy("default", policy =>
            {
                policy.WithOrigins("http://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
            });
            string connectionString = "Data Source=DESKTOP-HSMKM6C;Initial Catalog=DamagedPersons;Integrated Security=True;";
            services.AddDbContext<DamagedContext>(options =>
            {
                options.UseSqlServer(connectionString);
                options.UseLoggerFactory(GetLoggerFactory());
            });
            // services.AddDbContext<AppDbContext>(options =>
            // {
            //     options.UseNpgsql("Server=127.0.0.1;Port=5432;Database=Ghadir;Username=darsa_user;Password=1234");
            // });
            // services.AddDbContext<AppDbContext>(options =>
            // {
            //     options.UseInMemoryDatabase("GhadirMemory");
            //     // options.UseLoggerFactory(GetLoggerFactory());
            // });
            //services.AddDbContext<AppDbContext>(optionsBuilder =>
            //{
            //    optionsBuilder.UseSqlite("Filename=TestDatabase.db", options =>
            // {
            //     options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            // });
            //    // options.UseLoggerFactory(GetLoggerFactory());
            //});


            // services.AddScoped<ICategoryRepository, CategoryRepository>();
            // services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            services.AddScoped<IRepository<EntityBase>, Repository<EntityBase>>();
            services.AddScoped<IRepository<Education>, Repository<Education>>();
            services.AddScoped<IRepository<Province>, Repository<Province>>();
            services.AddScoped<IRepository<Category>, Repository<Category>>();
            services.AddScoped<IRepository<City>, Repository<City>>();
            services.AddScoped<IRepository<ArrestedReason>, Repository<ArrestedReason>>();
            services.AddScoped<IRepository<Gender>, Repository<Gender>>();
            services.AddScoped<IRepository<HealthStatus>, Repository<HealthStatus>>();
            services.AddScoped<IRepository<MaritalStatus>, Repository<MaritalStatus>>();
            services.AddScoped<IRepository<NationalityType>, Repository<NationalityType>>();
            services.AddScoped<IRepository<Religion>, Repository<Religion>>();
            services.AddScoped<IRepository<DrugType>, Repository<DrugType>>();
            services.AddScoped<IRepository<ConsciousnessType>, Repository<ConsciousnessType>>();
            services.AddScoped<IRepository<FileData>, Repository<FileData>>();
            // services.AddScoped<IRepository<Entity>, Repository<Entity>>();
            services.AddScoped<IRepository<GuiltyPoorPersonManagement.Models.GuiltyPerson>, Repository<GuiltyPoorPersonManagement.Models.GuiltyPerson>>();
            services.AddScoped<IRepository<GuiltyPoorPersonManagement.Models.Education>, Repository<GuiltyPoorPersonManagement.Models.Education>>();
            services.AddScoped<IUserRepository, UserRepository>();
            // services.AddScoped<IRepository, Repository>();
            _logger.LogInformation("Added Repository to services");
            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }
        private ILoggerFactory GetLoggerFactory()
        {
            IServiceCollection serviceCollection = new ServiceCollection();
            serviceCollection.AddLogging(builder =>
                   builder.AddConsole()
                          .AddFilter(DbLoggerCategory.Database.Command.Name,
                                     LogLevel.Information));
            return serviceCollection.BuildServiceProvider()
                    .GetService<ILoggerFactory>();
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.ConfigureExceptionHandler(_logger);
            // loggerFactory.AddLog4Net();
            // if (env.IsDevelopment())
            // {
            //     app.UseDeveloperExceptionPage();
            // }
            // else
            // {
            //     app.UseExceptionHandler("/Error");
            //     // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //     app.UseHsts();
            // }
            app.UseSession();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            // global cors policy
            // app.UseCors(x => x
            //     .AllowAnyOrigin()
            //     .AllowAnyMethod()
            //     .AllowAnyHeader());

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
