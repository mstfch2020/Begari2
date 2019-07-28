using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models {
    public partial class Category : EntityBase {
        public Category () {
            GuiltyPersonCategories = new List<GuiltyPersonCategory> ();
        }

        public string CategoryTitle { get; set; }
        public List<GuiltyPersonCategory> GuiltyPersonCategories { get; set; }
    }
}