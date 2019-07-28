using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;

namespace WebApiRestful.Domain.Repositories
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
        DamagedContext GetContext();
    }
}
