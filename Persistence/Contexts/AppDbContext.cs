using System;
using System.Collections.Generic;
using GuiltyPoorPersonManagement.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.InMemory.ValueGeneration.Internal;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using WebApiReact.Domain.Models;
using WebApiRestful.Domain.Models;

namespace WebApiRestful.Persistence.Contexts
{
    public class AppDbContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Entity> Entities { get; set; }
        public DbSet<Person> Persons { get; set; }
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Console.WriteLine($"ContextHashCode DBContext Constructor={this.GetHashCode()}");
        }        

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder); 

            builder.Entity<Category>().ToTable("Categories");
            builder.Entity<Category>().HasKey(p => p.Id);
            builder.Entity<Category>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd().HasValueGenerator<InMemoryIntegerValueGenerator<int>>();
            // builder.Entity<Category>().Property(p => p.Name).IsRequired().HasMaxLength(30);
            // builder.Entity<Category>().HasMany(p => p.Products).WithOne(p => p.Category).HasForeignKey(p => p.CategoryId);

            // builder.Entity<Category>().HasData
            // (
            //     new Category { Id = 100, Name = "Fruits and Vegetables" }, // Id set manually due to in-memory provider
            //     new Category { Id = 101, Name = "Dairy" }
            // );

            builder.Entity<Product>().ToTable("Products");
            builder.Entity<Product>().HasKey(p => p.Id);
            builder.Entity<Product>().Property(p => p.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Product>().Property(p => p.Name).IsRequired().HasMaxLength(50);
            builder.Entity<Product>().Property(p => p.QuantityInPackage).IsRequired();
            builder.Entity<Product>().Property(p => p.UnitOfMeasurement).IsRequired();

            builder.Entity<Product>().HasData
            (
                new Product
                {
                    Id = 100,
                    Name = "Apple",
                    QuantityInPackage = 1,
                    UnitOfMeasurement = EUnitOfMeasurement.Unity,
                    CategoryId = 100
                },
                new Product
                {
                    Id = 101,
                    Name = "Milk",
                    QuantityInPackage = 2,
                    UnitOfMeasurement = EUnitOfMeasurement.Liter,
                    CategoryId = 101,
                }
            );
            builder.Entity<User>().ToTable("Users");
            builder.Entity<User>().HasKey(p => p.Id);
            // builder.Entity<User>().HasData
            // (
            //     new User
            //     {
            //         // Id = Guid.NewGuid().ToString(),
            //         Name = "ali",
            //         UserName = "a",
            //         Password = "a",
            //         CreateDate = DateTime.Now
            //     }
            // );

            /// <summary>
            /// ///////
            /// </summary>
            /// <typeparam name="Entity"></typeparam>
            /// <returns></returns>
            List<Entity> entities = new List<Entity>();
                for (int i = 1; i < 100; i++)
                {
                    entities.Add(i % 2 == 0 ? new Entity
                    {
                        // Id = Guid.NewGuid().ToString(),
                        Name = "a",
                        Address = "b",

                    } :
                                new Entity
                                {
                                    // Id = Guid.NewGuid().ToString(),
                                    Name = "b",
                                    Address = "a",

                                }
                            );
                }
            builder.Entity<Entity>().ToTable("Entity");
            builder.Entity<Entity>().HasKey(p => p.Id);
            builder.Entity<Entity>().HasData(entities);

            builder.Entity<Person>().ToTable("Person");
            // builder.Entity<Person>().HasOne(p=>p.Entity).WithMany(p=>p.Persons).HasForeignKey(p=>p.EntityId);
            builder.Entity<Person>().HasKey(p => p.Id);
            List<Person> Persons = new List<Person>();
                for (int i = 1; i < 100; i++)
                {
                    Persons.Add(i % 2 == 0 ? new Person
                    {
                        // Id = Guid.NewGuid().ToString(),
                        Name = "a"+i,
                        Address = "b"+i,
                        // Entity=entities[0],
                        // EntityId=entities[0].Id


                    } :
                                new Person
                                {
                                    // Id = Guid.NewGuid().ToString(),
                                    Name = "b"+i,
                                    Address = "a"+i,
                                    // Entity=entities[1]   ,
                                    // EntityId=entities[1].Id 
                                }
                            );
                }
                                   
            builder.Entity<Person>().HasData(Persons);
            
        }
    }
}

