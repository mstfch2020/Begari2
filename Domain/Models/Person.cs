using System;
using System.ComponentModel.DataAnnotations.Schema;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Http;

namespace WebApiReact.Domain.Models
{
    public class Person: EntityBase
    {
         public string Name { get; set; }
         public string Family { get; set; }
        public string Address { get; set; }
        public DateTime? CreateDate { get; set; }
        public string PhoneNumber { get; set; }        
        
        // public Entity Entity { get; set; }
        // public string EntityId { get; set; }
        [NotMapped]
        public IFormFile AvatarFile { get; internal set; }
        public byte[] Avatar { get; internal set; }
    }
}