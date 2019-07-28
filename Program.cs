using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using WebApiRestful.Persistence.Contexts;

namespace WebApiReact
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);
            using (var scope = host.Services.CreateScope())
            using (var context = scope.ServiceProvider.GetService<DamagedContext>())
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                // context.Database.Migrate();
            }
            var logger = host.Services.GetRequiredService<ILogger<Program>>();
            logger.LogInformation("Seeded the database.");
            logger.LogInformation("try to run app host.Run() ");
            host.Run();
            logger.LogInformation("App finished ");
        }
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            // .UseUrls("http://localhost:4000")
            .ConfigureLogging((hostingContext, logging) =>
            {
                //Log filtering
                //logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                //      logging.AddFilter("System", LogLevel.Debug)
                //    .AddFilter<DebugLoggerProvider>("Microsoft", LogLevel.Trace);
                // logging.SetMinimumLevel(LogLevel.Warning)
                // logging.AddFilter((provider, category, logLevel) =>
                // {
                //     if (provider == "Microsoft.Extensions.Logging.Console.ConsoleLoggerProvider" &&
                //         category == "TodoApiSample.Controllers.TodoController")
                //     {
                //         return false;
                //     }
                //     return true;
                // });

                // Requires `using Microsoft.Extensions.Logging;`
                logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                logging.SetMinimumLevel(LogLevel.Information);
                logging.AddConsole();
                logging.AddDebug();
                logging.AddEventSourceLogger();
            })
            .Build();

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>();
    }
}
