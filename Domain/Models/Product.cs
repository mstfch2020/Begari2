using GuiltyPoorPersonManagement.Models;

namespace WebApiRestful.Domain.Models
{
    public class Product
    {
        public Product(){}
        public Product(int id, string name, short quantityInPackage, EUnitOfMeasurement unitOfMeasurement, int categoryId, Category category)
        {
            this.Id = id;
            this.Name = name;
            this.QuantityInPackage = quantityInPackage;
            this.UnitOfMeasurement = unitOfMeasurement;
            this.CategoryId = categoryId;
            this.Category = category;

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public short QuantityInPackage { get; set; }
        public EUnitOfMeasurement UnitOfMeasurement { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }
    }
}