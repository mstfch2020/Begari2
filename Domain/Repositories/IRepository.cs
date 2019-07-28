using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using WebApiReact.Domain.Models;

namespace WebApiReact.Domain.Repositories
{
    public interface IRepository<T> where T : EntityBase

    {

        Task<IEnumerable<T>> GetAll();
        IEnumerable<T> GetPageAt(int Index, int PageSize, Func<T, bool> condition,Func<T, object> sortFields);
        int GetCount(Func<T, bool> condition);
        // Task<int> GetCount(Func<T, bool> condition);

        Task<T> GetByIdAsync(int id);

        Task CreateAsync(T entity);

        void Delete(T entity);

        void Update(T entity);
        Task SaveAsync();
        IEnumerable<T> Find(Func<T, bool> condition);
    }
}