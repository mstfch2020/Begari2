using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class FingerPrint:EntityBase
    {
        public int IdMojrem { get; set; }
        public byte[] Finger1 { get; set; }
        public byte[] Finger2 { get; set; }
        public byte[] Finger3 { get; set; }
        public byte[] Finger4 { get; set; }
        public byte[] Finger5 { get; set; }
        public byte[] Finger6 { get; set; }
        public byte[] Finger7 { get; set; }
        public byte[] Finger8 { get; set; }
        public byte[] Finger9 { get; set; }
        public byte[] Finger10 { get; set; }
        public byte[] Eyes { get; set; }
        public byte[] Temp1 { get; set; }
        public byte[] Temp2 { get; set; }
        public byte[] Temp3 { get; set; }
        public byte[] Temp4 { get; set; }
        public byte[] Temp5 { get; set; }
        public byte[] Temp6 { get; set; }
        public byte[] Temp7 { get; set; }
        public byte[] Temp8 { get; set; }
        public byte[] Temp9 { get; set; }
        public byte[] Temp10 { get; set; }
        public byte[] Eyetempleft { get; set; }
        public byte[] Eyetempright { get; set; }
        public byte[] Eyeimgleft { get; set; }
        public byte[] Eyeimgright { get; set; }
    }
}
