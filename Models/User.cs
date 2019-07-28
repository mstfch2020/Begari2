using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class User:EntityBase
    {
        [Required] 
        public string UserName { get; set; }
        [Required] 
        public string UserPassword { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public string Email { get; set; }
      //سکونت
        public int? CityId { get; set; }

        [ForeignKey ("CityId")]
        public City City { get; set; }

        public int? ProvinceId { get; set; }

        [ForeignKey ("ProvinceId")]
        public Province Province { get; set; }
        public string Token { get;  set; }
    }
}
