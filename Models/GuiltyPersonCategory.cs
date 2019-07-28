namespace GuiltyPoorPersonManagement.Models
{
    public class GuiltyPersonCategory:EntityBase
    {
        public Category Category { get; set; }
        public GuiltyPerson GuiltyPerson { get; set; }
    }
}