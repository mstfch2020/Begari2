using System.IO;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiReact.Controllers.BaseController;
using WebApiReact.Domain.Repositories;

namespace WebApiReact.Controllers {
    public class ImageDataController : Controller {
        private readonly ILogger _logger;
        private readonly IRepository<FileData> _imageDataRepository;
        public ImageDataController (ILogger<ImageDataController> logger, IRepository<FileData> imageDataRepository) {
            _logger = logger;
            _imageDataRepository = imageDataRepository;
        }

        [HttpGet]
        public async Task<FileStreamResult> ViewImage (int id) {

            FileData imageData = await _imageDataRepository.GetByIdAsync (id);

            MemoryStream ms = new MemoryStream (imageData.Data);

            return new FileStreamResult (ms, imageData.ContentType);

        }
    }
}