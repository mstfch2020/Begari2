using System;
using System.Collections.Generic;

namespace GuiltyPoorPersonManagement.Models
{
    public partial class Personel:EntityBase
    {
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool? Obligation { get; set; }
        public bool? Taahodzamen { get; set; }
        public bool? Ezharname { get; set; }
        public bool? Soratjalase { get; set; }
        public bool? Pazirai { get; set; }
        public bool? Reqeskan { get; set; }
        public string Code { get; set; }
        public bool? Del { get; set; }
        public bool? Personel1 { get; set; }
        public bool? Perins1 { get; set; }
        public bool? Perdel1 { get; set; }
        public bool? Perins { get; set; }
        public bool? Perdel { get; set; }
        public bool? Sabtmojrem { get; set; }
        public bool? Delmjrem { get; set; }
        public bool? Search { get; set; }
        public bool? Amartable { get; set; }
        public bool? Amarelat { get; set; }
        public bool? Amarshahr { get; set; }
        public bool? Gomshode { get; set; }
        public string Emza { get; set; }
        public bool? Manage { get; set; }
        public bool? Soratjalase2 { get; set; }
        public bool? Pezeshk { get; set; }
        public bool? Sms { get; set; }
        public bool? Smsins { get; set; }
        public bool? Smsdel { get; set; }
        public string Codeostan { get; set; }
        public string Codeshahr { get; set; }
        public string Accessostan { get; set; }
        public string Accessshahr { get; set; }
        public bool? Admin { get; set; }
        public bool? Gozareshat { get; set; }
        public bool? Ostan { get; set; }
        public bool? Ostanins { get; set; }
        public bool? Ostandel { get; set; }
        public bool? Shahrins { get; set; }
        public bool? Shahrdel { get; set; }
        public bool? Log { get; set; }
        public int? Tedad { get; set; }
        public DateTime? Time { get; set; }
        public DateTime? Datechangepass { get; set; }
    }
}
