using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiReact.Domain.Models;
using WebApiReact.Domain.Repositories;
using WebApiReact.Domain.Services.Communication;
using WebApiRestful;

namespace WebApiReact.Controllers
{
    [Route("/api/[controller]")]
    public class PersonController: Controller
    {
         private readonly ILogger _logger;
        private readonly IRepository<Person> _PersonRepository;
        public PersonController(ILogger<PersonController> logger, IRepository<Person> PersonRepository)
        {
            _logger = logger;
            _PersonRepository = PersonRepository;
        }
        [HttpPost("GetPersonDataInAdvance")]
        public PaginationResponse<Person> GetPersonDataInAdvance([FromBody] ClientPaginationData clientPaginationData)
        {

           
            _logger.LogInformation("GetPersonDataInAdvance started");
            // throw new Exception("asd");
            System.Reflection.PropertyInfo sortField = typeof(Person).GetProperties().FirstOrDefault(
                p => p.Name.ToLower() == clientPaginationData.SortParam?.ToLower());
            string name = clientPaginationData.SearchParams?.name?.Value;
            string address = clientPaginationData.SearchParams?.address?.Value;

            PaginationResponse<Person> newPaginationResponse = new PaginationResponse<Person>(
                _PersonRepository.GetPageAt(
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
            newPaginationResponse.TotalRows = _PersonRepository.GetCount
                (p =>
                    (string.IsNullOrEmpty(name) || p.Name.Contains(name))
                    &&
                    (string.IsNullOrEmpty(address) || p.Address.Contains(address))
                );

            return newPaginationResponse;
        }
        [HttpGet("GetPersonById/{id}")]
        public async Task<GenericBaseResponse<Person>> GetPersonById(int id)
        {
            _logger.LogInformation(4000, "FetchById {id}", id);
            try
            {
                Person Person = await _PersonRepository.GetByIdAsync(id);

                return new GenericBaseResponse<Person>(Person);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                _logger.LogError(4000, ex, "FetchById error{code}", 4000);
                return new GenericBaseResponse<Person>(ex.Message, 500);
            }

        }

        [HttpPut("SavePersonData/{id}")]
        [Consumes("multipart/form-data")]
        public async Task<GenericBaseResponse<Person>> SavePersonData(string id, [FromForm] Person Person)
        {
            if (!ModelState.IsValid)
                return new GenericBaseResponse<Person>(string.Join(',', ModelState.GetErrorMessages()), 500);

            try
            {
                // full path to file in temp location
                var filePath = Path.GetTempFileName();
                if (Person.AvatarFile.Length > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        await Person.AvatarFile.CopyToAsync(memoryStream);
                        Person.Avatar = memoryStream.ToArray();
                    }
                }
                // Person persistancePerson = null;
                
                if (!string.IsNullOrEmpty(id) && id != "0")
                {
                    // persistancePerson = await _PersonRepository.GetByIdAsync(id ?? 0);

                    // if (persistancePerson == null)
                    // {
                    //     return new GenericBaseResponse<Person>("Person not found.", 500);
                    // }
                    _PersonRepository.Update(Person);
                    await _PersonRepository.SaveAsync();
                }

                else
                {
                    await _PersonRepository.CreateAsync(Person);

                    await _PersonRepository.SaveAsync();
                }
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                return new GenericBaseResponse<Person>($"An error occurred when updating the category: {ex.Message}", 500);
            }
            return new GenericBaseResponse<Person>(Person);
        }
    }
}