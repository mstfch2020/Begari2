using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.Extensions.Logging;
using WebApiReact.Domain.Repositories;
using WebApiRestful.Domain.Repositories;

namespace WebApiReact.Persistence.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(IUnitOfWork unitOfWork,ILogger<UserRepository> logger) : base(unitOfWork,logger)
        {
        }
        // public UserRepository(AppDbContext context,ILogger<UserRepository> logger) : base(context,logger)
        // {
        // }

        public async Task<User> Authenticate(string username, string password)
        {
            _logger.LogInformation($"Authenticate {username}/{password}");
            User user = await Task.Run(() => _unitOfWork.GetContext().User.SingleOrDefault(x => x.UserName == username && x.UserPassword == password));

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so return user details without password
            user.UserPassword = null;
            return user;
        }


    }
}