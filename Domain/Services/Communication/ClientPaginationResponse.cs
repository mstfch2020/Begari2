using System.Collections.Generic;

namespace WebApiReact.Domain.Services.Communication
{
    public class ClientPaginationData
    {
        public int PageSize { get; set; }
        public int TotalRows { get; set; }
        public int CurrentIndex { get; set; }
        public string SortParam { get; set; }
        public dynamic SearchParams { get; set; }
    }
}