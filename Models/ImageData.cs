namespace GuiltyPoorPersonManagement.Models {
    public class FileData : EntityBase {
        public byte[] Data { get; set; }
        public string ContentType { get; set; }
    }
}