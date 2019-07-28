using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GuiltyPoorPersonManagement.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebApiReact.Domain.Repositories;
using WebApiReact.Domain.Services.Communication;
namespace WebApiReact.Controllers.BaseController {
    [Route ("/api/[controller]")]

    public class BaseInfoController : BaseController {
        private readonly ILogger _logger;
        private readonly IRepository<Education> _educationRepository;
        private readonly IRepository<Province> _provinceRepository;
        private readonly IRepository<Category> _categoryRepository;
        private readonly IRepository<City> _cityRepository;
        private readonly IRepository<ArrestedReason> _arrestedReasonRepository;
        private readonly IRepository<DrugType> _drugTypeRepository;
        private readonly IRepository<Gender> _genderRepository;
        private readonly IRepository<HealthStatus> _healthStatusRepository;
        private readonly IRepository<MaritalStatus> _maritalStatusRepository;
        private readonly IRepository<NationalityType> _nationalityTypeRepository;
        private readonly IRepository<Religion> _religionRepository;
        private readonly IRepository<ConsciousnessType> _consciousnessTypeRepository;
        public BaseInfoController (ILogger<BaseInfoController> logger,
            IRepository<Education> educationRepository,
            IRepository<Province> provinceRepository,
            IRepository<Category> categoryRepository, 
            IRepository<City> cityRepository,
             IRepository<ArrestedReason> arrestedReasonRepository,
              IRepository<Gender> genderRepository,
               IRepository<HealthStatus> healthStatusRepository,
                IRepository<MaritalStatus> maritalStatusRepository,
                 IRepository<NationalityType> nationalityTypeRepository,
                  IRepository<Religion> religionRepository,
                  IRepository<DrugType> drugTypeRepository,
                  IRepository<ConsciousnessType> consciousnessTypeRepository
        ) {
            _logger = logger;
            _educationRepository = educationRepository;
            _provinceRepository = provinceRepository;
            _categoryRepository = categoryRepository;
            _cityRepository = cityRepository;
            _arrestedReasonRepository = arrestedReasonRepository;
            _genderRepository = genderRepository;
            _healthStatusRepository = healthStatusRepository;
            _maritalStatusRepository = maritalStatusRepository;
            _nationalityTypeRepository = nationalityTypeRepository;
            _religionRepository = religionRepository;
            _drugTypeRepository=drugTypeRepository;
            _consciousnessTypeRepository=consciousnessTypeRepository;
        }

        [HttpGet ("GetEducationData")]
        public async Task<PaginationResponse<Education>> GetEducationData () {
            var entities = await _educationRepository.GetAll ();

            return new PaginationResponse<Education> (entities.ToList ());
        }

        [HttpGet ("GetProvinceData")]
        public async Task<PaginationResponse<Province>> GetProvinceData () {
            var entities = await _provinceRepository.GetAll ();

            return new PaginationResponse<Province> (entities.ToList ());
        }

        [HttpGet ("GetCategoryData")]
        public async Task<PaginationResponse<Category>> GetCategoryData () {
            var entities = await _categoryRepository.GetAll ();

            return new PaginationResponse<Category> (entities.ToList ());
        }

        [HttpGet ("GetCityDataByProvinceId/{ProvinceId}")]
        public PaginationResponse<City> GetCityDataByProvinceId (int ProvinceId) {
            var entities = _cityRepository.Find (p => p.ProvinceId == ProvinceId);

            return new PaginationResponse<City> (entities.ToList ());
        }

        [HttpGet ("GetArrestedReasonData")]
        public async Task<PaginationResponse<ArrestedReason>> GetArrestedReasonData () {
            var entities = await _arrestedReasonRepository.GetAll ();

            return new PaginationResponse<ArrestedReason> (entities.ToList ());
        }

        [HttpGet ("GetDrugTypeData")]
        public async Task<PaginationResponse<DrugType>> GetDrugTypeData () {
            var entities = await _drugTypeRepository.GetAll ();

            return new PaginationResponse<DrugType> (entities.ToList ());
        }

        [HttpGet ("GetGenderData")]
        public async Task<PaginationResponse<Gender>> GetGenderData () {
            var entities = await _genderRepository.GetAll ();

            return new PaginationResponse<Gender> (entities.ToList ());
        }

        [HttpGet ("GetHealthStatusData")]
        public async Task<PaginationResponse<HealthStatus>> GetHealthStatusData () {
            var entities = await _healthStatusRepository.GetAll ();

            return new PaginationResponse<HealthStatus> (entities.ToList ());
        }

        [HttpGet ("GetMaritalStatusData")]
        public async Task<PaginationResponse<MaritalStatus>> GetMaritalStatusData () {
            var entities = await _maritalStatusRepository.GetAll ();
            return new PaginationResponse<MaritalStatus> (entities.ToList ());
        }

        [HttpGet ("GetNationalityTypeData")]
        public async Task<PaginationResponse<NationalityType>> GetNationalityTypeData () {
            var entities = await _nationalityTypeRepository.GetAll ();
            return new PaginationResponse<NationalityType> (entities.ToList ());
        }

        [HttpGet ("GetReligionData")]
        public async Task<PaginationResponse<Religion>> GetReligionData () {
            var entities = await _religionRepository.GetAll ();
            return new PaginationResponse<Religion> (entities.ToList ());
        }

         [HttpGet ("GetConsciousnessTypeData")]
        public async Task<PaginationResponse<ConsciousnessType>> GetConsciousnessTypeData () {
            var entities = await _consciousnessTypeRepository.GetAll ();
            return new PaginationResponse<ConsciousnessType> (entities.ToList ());
        }
    }
}