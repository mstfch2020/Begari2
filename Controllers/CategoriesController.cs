using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiRestful.Domain.Repositories;
using WebApiRestful.Domain.Services.Communication;

namespace WebApiRestful.Controllers
{
    // [Authorize]
    [Route("/api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ILogger _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly ICategoryRepository _categoryRepository;
        //we use [JsonIgnore] instead resource auto mapper
        // private readonly IMapper _mapper;

        public CategoriesController(ILogger<CategoriesController> logger, IUnitOfWork unitOfWork, ICategoryRepository categoryRepository)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _categoryRepository = categoryRepository;
        }


        [HttpGet]
        public async Task<IEnumerable<Category>> GetAllAsync()
        {
            var categories = await _categoryRepository.ListAsync();
            return categories;
        }
         [HttpGet("{id}")]
        public async Task<Category> FetchById(int id)
        {
            _logger.LogInformation(4000,  "FetchById {id}",id );
            try{var category = await _categoryRepository.FindByIdAsync(id);
            return category;
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                _logger.LogError(4000, ex, "FetchById error{code}",4000 );
            }
            return null;
        }
        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Category category)
        {
            _logger.LogWarning("start to create");
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            CategoryResponse result = null;
            try
            {
                await _categoryRepository.AddAsync(category);
                await _unitOfWork.CompleteAsync();

                result = new CategoryResponse(category);
            }
            catch (Exception ex)
            {
                // Do some logging stuff
                result = new CategoryResponse($"An error occurred when saving the category: {ex.Message}");
                _logger.LogError(4000, ex, "post error{code}",4000 );
            }

            if (!result.Success)
                return BadRequest(result.Message);

            return Ok(result.Category);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsync(int id, [FromBody] Category category)
        {
            _logger.LogInformation("Getting itemId {ID},itemName {Name}", id, category?.CategoryTitle);
            if (!ModelState.IsValid)
                return BadRequest(ModelState.GetErrorMessages());

            CategoryResponse result = null;
            var existingCategory = await _categoryRepository.FindByIdAsync(id);

            if (existingCategory == null)
                result = new CategoryResponse("Category not found.");
            else
            {
                existingCategory.CategoryTitle = category.CategoryTitle;

                try
                {
                    _categoryRepository.Update(existingCategory);
                    await _unitOfWork.CompleteAsync();

                    result = new CategoryResponse(existingCategory);
                }
                catch (Exception ex)
                {
                    // Do some logging stuff
                    result = new CategoryResponse($"An error occurred when updating the category: {ex.Message}");
                }
            }
            if (!result.Success)
                return BadRequest(result.Message);

            return Ok(result.Category);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            CategoryResponse result = null;
            var existingCategory = await _categoryRepository.FindByIdAsync(id);

            if (existingCategory == null)
            {
                result = new CategoryResponse("Category not found.");
            }
            else
            {
                try
                {
                    _categoryRepository.Remove(existingCategory);
                    await _unitOfWork.CompleteAsync();

                    result = new CategoryResponse(existingCategory);
                }
                catch (Exception ex)
                {
                    // Do some logging stuff
                    result = new CategoryResponse($"An error occurred when deleting the category: {ex.Message}");
                    //log Exception
                    _logger.LogError(4000, ex, "GetById({ID}) NOT FOUND", id);
                }
            }
            if (!result.Success)
                return BadRequest(result.Message);
            return Ok(result.Category);
        }

    }
}
