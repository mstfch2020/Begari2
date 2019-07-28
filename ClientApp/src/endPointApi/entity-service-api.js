import Axios from "axios";
import GlobalData from "../global/global-data";

class EntityServiceApi {

    static GetPagedDataApi(currentIndex, PageSize, sortParam, searchParams) {
        return Axios.post(`${GlobalData.baseUrl}/Entity/GetEntityDataInAdvance`, {
            "currentIndex": currentIndex,
            "PageSize": PageSize,
            searchParams: searchParams,
            sortParam: sortParam
        });
    }
    static GetEntityById(id) {
        return Axios.get(`${GlobalData.baseUrl}/Entity/GetEntityById/${id}`);
    }
    static SaveEntity(entity) {
        return Axios.put(`${GlobalData.baseUrl}/Entity/SaveEntityData/${entity.id}`, entity);
    }
}
export default EntityServiceApi;