using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http;

namespace GuiltyPoorPersonManagement.Models {
    public partial class GuiltyPerson : EntityBase {
        public GuiltyPerson () {
            GuiltyPersonCategories = new List<GuiltyPersonCategory> ();
        }
        public List<GuiltyPersonCategory> GuiltyPersonCategories { get; set; }

        public string Code { get; set; }
        public string Name { get; set; }
        public string Family { get; set; }
        public string Fullname { get; set; }
        public string AliasName { get; set; }
        public string FatherName { get; set; }
        public string NationalityCode { get; set; }
        public int? IdentityNumber { get; set; }
        public int? CategoryId { get; set; }

        [ForeignKey ("CategoryId")]
        public virtual Category Category { get; set; }
        //سکونت
        public int? CityId { get; set; }

        [ForeignKey ("CityId")]
        public virtual City City { get; set; }

        public int? ProvinceId { get; set; }

        [ForeignKey ("ProvinceId")]
        public virtual  Province Province { get; set; }

        public int? IdentityIssueProvinceId { get; set; }

        [ForeignKey ("IdentityIssueProvinceId")]
        public  virtual Province IdentityIssueProvince { get; set; }

        //صدور شماسنامه
        public int? IdentityIssueCityId { get; set; }

        [ForeignKey ("IdentityIssueCityId")]
        public virtual  City IdentityIssueCity { get; set; }

        public DateTime? BirthDate { get; set; }
        public int? Age { get; set; }
        public int? GenderId { get; set; }

        [ForeignKey ("GenderId")]
        public virtual  Gender Gender { get; set; }
        public int? MaritalStatusId { get; set; }

        [ForeignKey ("MaritalStatusId")]
        public  virtual MaritalStatus MaritalStatus { get; set; }
        public string MaritalReason { get; set; }
        public DateTime? MaritalDate { get; set; }
        public int? MaritalCount { get; set; }
        public int? NationalityTypeId { get; set; }

        [ForeignKey ("NationalityTypeId")]
        public virtual  NationalityType NationalityType { get; set; }
        public string OtherNationality { get; set; }
        public int? ReligonId { get; set; }

        [ForeignKey ("ReligonId")]

        public  virtual Religion Religion { get; set; }
        public string OtherReligion { get; set; }
        public string ArrestedAddress { get; set; }

        public int? ArrestedProvinceId { get; set; }

        [ForeignKey ("ArrestedProvinceId")]
        public virtual  Province ArrestedProvince { get; set; }

        public int? ArrestedCityId { get; set; }

        [ForeignKey ("ArrestedCityId")]
        public  virtual City ArrestedCity { get; set; }

        public string PhoneNumber { get; set; }
        public string MobileNumber { get; set; }
        public string Address { get; set; }
        public int? HealthStatusId { get; set; }

        [ForeignKey ("HealthStatusId")]

        public virtual  HealthStatus HealthStatus { get; set; }
        public int? ArrestedReasonId { get; set; }

        [ForeignKey ("ArrestedReasonId")]
        public virtual  ArrestedReason ArrestedReason { get; set; }
        public DateTime? ArrestedDate { get; set; }

        [ForeignKey ("DrugTypeId")]

        public virtual  DrugType DrugType { get; set; }
        public int? DrugTypeId { get; set; }
        public string Curator { get; set; }
        public string Police { get; set; }
        public string EyeColor { get; set; }
        public float Weight { get; set; }
        public float stature { get; set; }

        #region Images

        [NotMapped]
        public IFormFile HalfRightImageFile { get; set; }

        [ForeignKey ("HalfRightImageDataId")]
        public virtual  FileData HalfRightImageData { get; set; }
        public int? HalfRightImageDataId { get; set; }

        [NotMapped]
        public IFormFile HalfLeftImageFile { get; set; }

        [ForeignKey ("HalfLeftImageDataId")]
        public  virtual FileData HalfLeftImageData { get; set; }
        public int? HalfLeftImageDataId { get; set; }

        [NotMapped] //کامل
        public IFormFile FullImageFile { get; set; }

        [ForeignKey ("FullImageDataId")]
        public virtual  FileData FullImageData { get; set; }
        public int? FullImageDataId { get; set; }

        [NotMapped] //تمام رخ
        public IFormFile FullViewImageFile { get; set; }

        [ForeignKey ("FullViewImageDataId")]
        public  virtual FileData FullViewImageData { get; set; }
        public int? FullViewImageDataId { get; set; }

        #endregion

        #region Attachment
        [NotMapped]
        public IFormFile AttachmentFile { get; set; }

        [ForeignKey ("AttachmentFileDataId")]
        public virtual  FileData AttachmentFileData { get; set; }
        public int? AttachmentFileDataId { get; set; }

        #endregion

        public int? FingerPrintId { get; set; }

        [ForeignKey ("FingerPrintId")]
        public virtual  FingerPrint FingerPrint { get; set; }
        public DateTime? CreateDate { get; set; }
        public string RegistreationCode { get; set; }
        public string IssuerJudge { get; set; }
        public string SpecialView { get; set; }
        public bool? IsCarer { get; set; }
        public string SubCarerNumber { get; set; }
        public int? ChildrenCount { get; set; }
        public DateTime? CarerStartDate { get; set; }
        public bool? HaveAttendant { get; set; }
        public string AttendantNumber { get; set; }
        public bool? HaveReceptionHistory { get; set; }
        public string ReceptionNumber { get; set; }
        public string Sickness { get; set; }
        public string Consciousness { get; set; }

        [ForeignKey ("ConsciousnessTypeId")]
        public virtual  ConsciousnessType ConsciousnessType { get; set; }
        public int? ConsciousnessTypeId { get; set; }
        public int? UserId { get; set; }

        [ForeignKey ("CreatorUserId")]
        public virtual  User CreatorUser { get; set; }
        public int? EducationId { get; set; }

        [ForeignKey ("EducationId")]
        public virtual Education Education { get; set; }
        public string PreviousCode { get; set; }
        public DateTime? PreviousCreateDate { get; set; }
        public bool? IsAccepted { get; set; }
        public bool? IsReceptionAgain { get; set; }
        public string  UserName { get; set; }
    }
}