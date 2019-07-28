using WebApiReact.Domain.Models;
using WebApiRestful.Domain.Services.Communication;
using System.Linq;
using System.Collections.Generic;

namespace WebApiReact.Domain.Services.Communication
{
    public class PaginationResponse<T> : BaseResponse
    {
        public int PageSize { get; set; }
        public int TotalRows { get; set; }
        public int CurrentIndex { get; set; }
        public List<T> _entity { get; private set; }
        private PaginationResponse(bool success, string message,int? code, List<T> Entity) : base(success, message,code)
        {
            _entity = Entity;
        }

        /// <summary>
        /// Creates a success response.
        /// </summary>
        /// <param name="category">Saved category.</param>
        /// <returns>Response.</returns>
        public PaginationResponse(List<T> Entity) : this(true, string.Empty,null, Entity)
        {             
            _entity=Entity;
        }

        /// <summary>
        /// Creates am error response.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <returns>Response.</returns>
        public PaginationResponse(string message,int? code) : base(false, message,code)
        { }
    }
}
