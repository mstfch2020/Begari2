using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApiReact.Domain.Models;
using WebApiReact.Domain.Repositories;
using WebApiRestful.Persistence.Contexts;
using System.Linq;
using Microsoft.Extensions.Logging;
using WebApiRestful.Domain.Repositories;
using GuiltyPoorPersonManagement.Models;

namespace WebApiReact.Persistence.Repositories
{
    public class Repository<T> : IRepository<T> where T : EntityBase
    {
        protected readonly IUnitOfWork _unitOfWork;
        protected readonly ILogger<Repository<T>> _logger;
        private DbSet<T> _entity = null;
        public Repository(IUnitOfWork unitOfWork, Microsoft.Extensions.Logging.ILogger<Repository<T>> logger)
        {

            _unitOfWork = unitOfWork;
            _entity = _unitOfWork.GetContext().Set<T>();
            _logger = logger;
        }
        public async Task CreateAsync(T entity)
        {
            // entity.Id = Guid.NewGuid().ToString();
            _logger.LogInformation($"Create {entity.GetType()} by id {entity.Id}");
            await _entity.AddAsync(entity);
        }

        public void Delete(T entity)
        {
            _logger.LogInformation($"Delete {entity.GetType()} by id {entity.Id}");
            _entity.Remove(entity);
        }

        

        public async Task<IEnumerable<T>> GetAll()
        {
            _logger.LogInformation($"GetAll {_entity.GetType()} ");
            return await _entity.ToListAsync();
        }

        public async Task<T> GetByIdAsync(int id)
        {
            _logger.LogInformation($"GetById {_entity.GetType()} by id {id}");
            return await _entity.FindAsync(id);
        }

        // public async Task<int> GetCount( Func<T, bool> condition)
        // {
        //    return await _entity.CountAsync(condition);
        // }
        public int GetCount(Func<T, bool> condition)
        {
            _logger.LogInformation($"getCount {_entity.GetType()}");
            return _entity.Count(condition);
        }
        public IEnumerable<T> Find(Func<T, bool> condition)
        {
            _logger.LogInformation($"getCount {_entity.GetType()}");
            return _entity.Where(condition);
        }
        public IEnumerable<T> GetPageAt(int Index, int PageSize, Func<T, bool> condition, Func<T, object> sortFields)
        {
            _logger.LogInformation($"getPagedAt {_entity.GetType()}/{Index}/{PageSize}");
            return _entity.Where(condition).OrderBy(sortFields).Skip((Index - 1) * PageSize).Take(PageSize);
        }

        public async Task SaveAsync()
        {
            _logger.LogInformation($"saveData {_entity.GetType()} ");
            await _unitOfWork.GetContext().SaveChangesAsync();
        }

        public void Update(T entity)
        {
            _logger.LogInformation($" Update {entity.GetType()} ");
            //  _entity.Attach(entity);
            //  _unitOfWork.GetContext().Entry(_entity).State = EntityState.Modified;
            _unitOfWork.GetContext().Update(entity);
        }
    }
}