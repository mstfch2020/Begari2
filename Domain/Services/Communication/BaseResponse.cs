using System;
using Newtonsoft.Json;

namespace WebApiRestful.Domain.Services.Communication
{
    public  class BaseResponse
    {
        public int? ErrorCode { get; set; }

        public bool Success { get; protected set; }
        public string Message { get; protected set; }

        public BaseResponse(bool success, string message, int? errorCode)
        {
            Success = success;
            Message = message;
            ErrorCode = errorCode;

        }
        public override string ToString()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
}
