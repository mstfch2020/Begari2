using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GuiltyPoorPersonManagement.Models
{
    public class EntityBase
    {
         [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]           
        public int Id { get;  set; }
    }
}