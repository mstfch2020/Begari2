using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiReact.Domain.Repositories;
using WebApiReact.Domain.Services.Communication;
using WebApiReact.Extensions;
using WebApiRestful;

namespace WebApiReact.Controllers {

    [Route ("/api/[controller]")]
    public class GuiltyPersonController : Controller {

        private readonly ILogger _logger;
        private readonly IRepository<GuiltyPerson> _guiltyPersonRepository;
        public GuiltyPersonController (ILogger<GuiltyPersonController> logger, IRepository<GuiltyPerson> guiltyPersonRepository) {
            _logger = logger;
            _guiltyPersonRepository = guiltyPersonRepository;
        }

        [HttpGet ("GetEntityData")]
        public async Task<IEnumerable<GuiltyPoorPersonManagement.Models.GuiltyPerson>> GetEntityData () {
            var entities = await _guiltyPersonRepository.GetAll ();

            return entities.Take (10);
        }

        [HttpPost ("GetGuiltyPersonDataInAdvance")]
        public PaginationResponse<GuiltyPoorPersonManagement.Models.GuiltyPerson> GetGuiltyPersonDataInAdvance ([FromBody] ClientPaginationData clientPaginationData) {

            _logger.LogInformation ("GetGuiltyPersonDataInAdvance started");

            System.Reflection.PropertyInfo sortField = typeof (GuiltyPerson).GetProperties ().FirstOrDefault (
                p => p.Name.ToLower () == clientPaginationData.SortParam?.ToLower ());
            string name = clientPaginationData.SearchParams?.name?.Value;
            string address = clientPaginationData.SearchParams?.address?.Value;

            PaginationResponse<GuiltyPoorPersonManagement.Models.GuiltyPerson> newPaginationResponse = new PaginationResponse<GuiltyPoorPersonManagement.Models.GuiltyPerson> (
                _guiltyPersonRepository.GetPageAt (
                    clientPaginationData.CurrentIndex,
                    clientPaginationData.PageSize,
                    (p =>
                        (string.IsNullOrEmpty (name) || p.Name.Contains (name)) &&
                        (string.IsNullOrEmpty (address) || p.Address.Contains (address))
                    ),
                    (p => sortField == null ? p.Id : sortField.GetValue (p, null))
                ).ToList ()
            );
            newPaginationResponse.CurrentIndex = clientPaginationData.CurrentIndex;
            newPaginationResponse.PageSize = clientPaginationData.PageSize;
            newPaginationResponse.TotalRows = _guiltyPersonRepository.GetCount (p =>
                (string.IsNullOrEmpty (name) || p.Name.Contains (name)) &&
                (string.IsNullOrEmpty (address) || p.Address.Contains (address))
            );

            return newPaginationResponse;
        }

        [HttpGet ("GetGuiltyPersonById/{id}")]
        public async Task<GenericBaseResponse<GuiltyPoorPersonManagement.Models.GuiltyPerson>> GetGuiltyPersonById (int id) {
            _logger.LogInformation (4000, "FetchById {id}", id);
            try {
                GuiltyPerson GuiltyPerson = await _guiltyPersonRepository.GetByIdAsync (id);

                return new GenericBaseResponse<GuiltyPerson> (GuiltyPerson);
            } catch (Exception ex) {
                // Do some logging stuff
                _logger.LogError (4000, ex, "FetchById error{code}", 4000);
                return new GenericBaseResponse<GuiltyPoorPersonManagement.Models.GuiltyPerson> (ex.Message, 500);
            }

        }

        [HttpPut ("SaveGuiltyPersonData/{id}")]
        [Consumes ("multipart/form-data")]
        public async Task<GenericBaseResponse<GuiltyPerson>> SaveGuiltyPersonData (int? id, [FromForm] GuiltyPerson GuiltyPerson) {
            // if (!ModelState.IsValid)
            //     return new GenericBaseResponse<GuiltyPerson> (string.Join (',', ModelState.GetErrorMessages ()), 500);

            try {
                // set Images and Files                                

                if (GuiltyPerson?.HalfRightImageFile?.Length > 0) {
                    GuiltyPerson.HalfRightImageData =await setGuiltyPersonImagesAndFiles (GuiltyPerson.HalfRightImageFile);
                }
                if (GuiltyPerson?.HalfLeftImageFile?.Length > 0) {
                    GuiltyPerson.HalfLeftImageData =await setGuiltyPersonImagesAndFiles (GuiltyPerson.HalfLeftImageFile);
                }
                if (GuiltyPerson?.FullImageFile?.Length > 0) {
                    GuiltyPerson.FullImageData =await setGuiltyPersonImagesAndFiles (GuiltyPerson.FullImageFile);
                }
                if (GuiltyPerson?.FullViewImageFile?.Length > 0) {
                    GuiltyPerson.FullViewImageData =await setGuiltyPersonImagesAndFiles (GuiltyPerson.FullViewImageFile);
                }
                if (GuiltyPerson?.AttachmentFile?.Length > 0) {
                    GuiltyPerson.AttachmentFileData =await setGuiltyPersonImagesAndFiles (GuiltyPerson.AttachmentFile);
                }

                if (id != null && id != 0) {

                    _guiltyPersonRepository.Update (GuiltyPerson);
                    await _guiltyPersonRepository.SaveAsync ();
                } else {
                    await _guiltyPersonRepository.CreateAsync (GuiltyPerson);

                    await _guiltyPersonRepository.SaveAsync ();
                }
            } catch (Exception ex) {
                _logger.LogError (ex.ToCompeleteString ());
                return new GenericBaseResponse<GuiltyPerson> ($"An error occurred when updating the GuiltyPerson: {ex.Message}", 500);
            }
            return new GenericBaseResponse<GuiltyPerson> (GuiltyPerson);
        }

        private async Task<FileData> setGuiltyPersonImagesAndFiles (IFormFile ImageFile) {
            using (var memoryStream = new MemoryStream ()) {
                await ImageFile.CopyToAsync (memoryStream);
                FileData imageData = new FileData () { ContentType = ImageFile.ContentType, Data = memoryStream.ToArray () };
                return imageData;
            }
        }
    }

}