using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Build.Framework;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebApiReact.Domain.Models;
using WebApiReact.Domain.Repositories;
using WebApiReact.Helpers;

namespace WebApiReact.Controllers.Account
{

    // [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Authorize]
    [Route("/api/[controller]")]
    public class AccountsController : Controller
    {
        protected readonly IUserRepository _userRepository;
        protected readonly ILogger<AccountsController> _logger;
        private readonly TokenManagement _tokenManagement;
        public AccountsController(ILogger<AccountsController> logger, IUserRepository userRepository, IOptions<TokenManagement> tokenManagement)
        {
            this._logger = logger;
            this._userRepository = userRepository;
            _tokenManagement = tokenManagement.Value;
        }

        
        [Route("AlwaysFail")]
        public string AlwaysFail()
        {
            return "AlwaysFail";
        }

        [AllowAnonymous]
        [HttpPost]

        public async Task<IActionResult> Authenticate([FromBody] User user)
        {
            _logger.LogWarning("**********user*****" + Newtonsoft.Json.JsonConvert.SerializeObject(user));
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid Request");
            }
            var userEntity = await _userRepository.Authenticate(user.UserName, user.UserPassword);

            if (userEntity == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            var claim = new[]
                        {
                new Claim(ClaimTypes.Name, userEntity.UserName)                
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_tokenManagement.Secret));
            var userIdentity = new ClaimsIdentity(claim); 
            ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity); 
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject =userIdentity,
                Expires = DateTime.UtcNow.AddMinutes(30),
                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            //todo why we should send token to client???
            var tokenStr= tokenHandler.WriteToken(token);             
            user.Token=tokenStr;
            // await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal); 
            // remove password before returning

            user.UserPassword = null;


            return base.Ok(user);
        }

    }
}