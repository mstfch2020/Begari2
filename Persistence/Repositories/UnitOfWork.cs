using System;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.Extensions.Logging;
using WebApiRestful.Domain.Repositories;
using WebApiRestful.Persistence.Contexts;

namespace WebApiRestful.Persistence.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DamagedContext _context;
        private readonly ILogger<IUnitOfWork> _logger;

        public UnitOfWork(DamagedContext context, ILogger<IUnitOfWork> logger)
        {
            _context = context;
            _logger = logger;
        }
        public DamagedContext GetContext() { return _context; }
        public async Task CompleteAsync()
        {
            _logger.LogInformation($"ContextHashCode Before Save={_context.GetHashCode()}");
            await _context.SaveChangesAsync();
            _logger.LogInformation($"ContextHashCode after Save={_context.GetHashCode()}");
        }
    }
}
