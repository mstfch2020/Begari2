using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using WebApiRestful.Domain.Models;
using WebApiRestful.Domain.Services.Communication;

namespace WebApiRestful.Domain.Repositories
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> ListAsync();
         Task AddAsync(Category category);
        Task<Category> FindByIdAsync(int id);
        void Update(Category category);
        void Remove(Category category);
    }
}
