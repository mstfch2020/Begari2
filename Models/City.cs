using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class City:EntityBase
    {
        public string CityTitle { get; set; }
        public int? ProvinceId { get; set; }
        public Province Province { get; set; }
    }
}
