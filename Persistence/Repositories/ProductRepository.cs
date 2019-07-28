using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiRestful.Domain.Models;
using WebApiRestful.Domain.Repositories;
using WebApiRestful.Persistence.Contexts;

namespace WebApiRestful.Persistence.Repositories
{
    public class ProductRepository : BaseRepository, IProductRepository
    {
        public ProductRepository(AppDbContext context) : base(context) { }

        public async Task<IEnumerable<Product>> ListAsync()
        {
            return await _context.Products.Include(p => p.Category)
                .ToListAsync();
        }
    }
}