using System.Collections.Generic;
using System.Threading.Tasks;
using WebApiRestful.Domain.Models;

namespace WebApiRestful.Domain.Repositories
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> ListAsync();
    }
}