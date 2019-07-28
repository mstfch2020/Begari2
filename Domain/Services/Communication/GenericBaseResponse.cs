using WebApiRestful.Domain.Services.Communication;

namespace WebApiReact.Domain.Services.Communication
{
    public class GenericBaseResponse<T> : BaseResponse
    {
        public T _entity { get; private set; }
        private GenericBaseResponse(bool success, string message, int? code, T Entity) : base(success, message, code)
        {
            _entity = Entity;
        }

        /// <summary>
        /// Creates a success response.
        /// </summary>
        /// <param name="category">Saved category.</param>
        /// <returns>Response.</returns>
        public GenericBaseResponse(T Entity) : this(true, string.Empty, null, Entity)
        { }

        /// <summary>
        /// Creates am error response.
        /// </summary>
        /// <param name="message">Error message.</param>
        /// <returns>Response.</returns>
        public GenericBaseResponse(string message, int? code) : base(false, message, code)
        { }
    }
}