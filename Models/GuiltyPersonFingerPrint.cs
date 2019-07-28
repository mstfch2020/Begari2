using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class GuiltyPersonFingerPrint:EntityBase
    {
        public int GuiltyPersonId { get; set; }
        public string Fup { get; set; }
    }
}
