using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models {
    public partial class Province:EntityBase {
        public Province()
        {
            cities=new List<City>();
        }
        public string ProvinceTitle { get; set; }
        public List<City> cities { get; set; }
    }
}