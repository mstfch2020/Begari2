using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class Guarantor:EntityBase
    {
        public string Name { get; set; }
        public string FatherName { get; set; }
        public string BirthDate { get; set; }
        public string IssuePlace { get; set; }
        public string Address { get; set; }
        public string Job { get; set; }
        public string PhoneNumber { get; set; }
    }
}
