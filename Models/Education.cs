using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class Education:EntityBase
    {
        public Education()
        {
            GuiltyPerson = new HashSet<GuiltyPerson>();
        }

        public string EducationTitle { get; set; }

        public virtual ICollection<GuiltyPerson> GuiltyPerson { get; set; }
    }
}
