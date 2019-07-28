import Axios from "axios";
import GlobalData from "../global/global-data";

class EntityServiceApi {

    static GetPagedDataApi(currentIndex, PageSize, sortParam, searchParams) {
        console.log(`${GlobalData.baseUrl}/Entity/GetEntityDataInAdvance`);
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
        return Axios.put(
                 `${GlobalData.baseUrl}/Entity/SaveEntityData/${entity.id}`,
                 entity,
                 { headers: {'Content-Type': 'multipart/form-data' }}

        );
    }
}
export default EntityServiceApi;
