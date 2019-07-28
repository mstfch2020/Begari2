using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiReact.Domain.Models;
using WebApiReact.Domain.Repositories;
using WebApiReact.Domain.Services.Communication;
using WebApiRestful.Domain.Repositories;
using System.Linq;
using System;
using WebApiRestful.Domain.Services.Communication;
using WebApiRestful;
using System.IO;

namespace WebApiReact.Controllers
{
    [Route("/api/[controller]")]
    public class EntityController : Controller
    {
        private readonly ILogger _logger;
        private readonly IRepository<Entity> _entityRepository;
        public EntityController(ILogger<EntityController> logger, IRepository<Entity> entityRepository)
        {
            _logger = logger;
            _entityRepository = entityRepository;
        }
        [HttpGet("GetEntityData")]
        public async Task<IEnumerable<Entity>> GetEntityData()
        {
            var entities = await _entityRepository.GetAll();

            return entities;
        }

        [HttpPost("GetEntityDataInAdvance")]
        public PaginationResponse<Entity> GetEntityDataInAdvance([FromBody] ClientPaginationData clientPaginationData)
        {

            // if (_entityRepository.GetCount(p => p.Id != null) == 0)
            // {
            //     // List<Entity> entities = new List<Entity>();
            //     for (int i = 1; i < 100; i++)
            //     {
            //         _entityRepository.CreateAsync(i % 2 == 0 ? new Entity
            //         {
            //             Id = Guid.NewGuid().ToString(),
            //             Name = "a",
            //             Address = "b",

            //         } :
            //                     new Entity
            //                     {
            //                         Id = Guid.NewGuid().ToString(),
            //                         Name = "b",
            //                         Address = "a",

            //                     }
            //                 );
            //     }

            //     _entityRepository.SaveAsync();
            // }
            _logger.LogInformation("GetEntityDataInAdvance started");
            // throw new Exception("asd");
            System.Reflection.PropertyInfo sortField = typeof(Entity).GetProperties().FirstOrDefault(
                p => p.Name.ToLower() == clientPaginationData.SortParam?.ToLower());
            string name = clientPaginationData.SearchParams?.name?.Value;
            string address = clientPaginationData.SearchParams?.address?.Value;

            PaginationResponse<Entity> newPaginationResponse = new PaginationResponse<Entity>(
                _entityRepository.GetPageAt(
                    clientPaginationData.CurrentIndex,
                    clientPaginationData.PageSize,
                     (p =>
                        (string.IsNullOrEmpty(name) || p.Name.Contains(name))
                        &&
                        (string.IsNullOrEmpty(address) || p.Address.Contains(address))
                     ),
                     (p => sortField == null ? p.Id : sortField.GetValue(p, null))
                     ).ToList()
                     );
            newPaginationResponse.CurrentIndex = clientPaginationData.CurrentIndex;
            newPaginationResponse.PageSize = clientPaginationData.PageSize;
            newPaginationResponse.TotalRows = _entityRepository.GetCount
                (p =>
                    (string.IsNullOrEmpty(name) || p.Name.Contains(name))
                    &&
                    (string.IsNullOrEmpty(address) || p.Address.Contains(address))
                );

            return newPaginationResponse;
        }
        [HttpGet("GetEntityById/{id}")]
        public async Task<GenericBaseResponse<Entity>> GetEntityById(int id)
        {
            _logger.LogInformation(4000, "FetchById {id}", id);
            try
            {
                Entity entity = await _entityRepository.GetByIdAsync(id);

                return new GenericBaseResponse<Entity>(entity);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                _logger.LogError(4000, ex, "FetchById error{code}", 4000);
                return new GenericBaseResponse<Entity>(ex.Message, 500);
            }

        }

        [HttpPut("SaveEntityData/{id}")]
        [Consumes("multipart/form-data")]
        public async Task<GenericBaseResponse<Entity>> SaveEntityData(string id, [FromForm] Entity entity)
        {
            if (!ModelState.IsValid)
                return new GenericBaseResponse<Entity>(string.Join(',', ModelState.GetErrorMessages()), 500);

            try
            {
                // full path to file in temp location
                var filePath = Path.GetTempFileName();
                if (entity.AvatarFile.Length > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        await entity.AvatarFile.CopyToAsync(memoryStream);
                        entity.Avatar = memoryStream.ToArray();
                    }
                }
                // Entity persistanceEntity = null;
                
                if (!string.IsNullOrEmpty(id) && id != "0")
                {
                    // persistanceEntity = await _entityRepository.GetByIdAsync(id ?? 0);

                    // if (persistanceEntity == null)
                    // {
                    //     return new GenericBaseResponse<Entity>("Entity not found.", 500);
                    // }
                    _entityRepository.Update(entity);
                    await _entityRepository.SaveAsync();
                }

                else
                {
                    await _entityRepository.CreateAsync(entity);

                    await _entityRepository.SaveAsync();
                }
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new GenericBaseResponse<Entity>($"An error occurred when updating the category: {ex.Message}", 500);
            }
            return new GenericBaseResponse<Entity>(entity);
        }
    }
}