using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Http;

namespace WebApiReact.Domain.Models
{
    public class Entity : EntityBase
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime? CreateDate { get; set; }
        public string PhoneNumber { get; set; }
        // public List<Person> Persons { get; set; }
        public byte[] Avatar { get; set; }
        [NotMapped]
        public IFormFile  AvatarFile { get; set; }

    }
}