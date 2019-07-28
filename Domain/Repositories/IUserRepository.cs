using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;

namespace WebApiReact.Domain.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> Authenticate(string username, string password);
    }
}