import Axios from "axios";
import GlobalData from "../global/global-data";

class GuiltyPersonServiceApi {

    static GetPagedDataApi(currentIndex, PageSize, sortParam, searchParams) {
        return Axios.post(`${GlobalData.baseUrl}/GuiltyPerson/GetGuiltyPersonDataInAdvance`, {
            "currentIndex": currentIndex,
            "PageSize": PageSize,
            searchParams: searchParams,
            sortParam: sortParam
        });
    }
    static GetGuiltyPersonById(id) {
        return Axios.get(`${GlobalData.baseUrl}/GuiltyPerson/GetGuiltyPersonById/${id}`);
    }
    static SaveGuiltyPerson(GuiltyPerson) {
        return Axios.put(
                 `${GlobalData.baseUrl}/GuiltyPerson/SaveGuiltyPersonData/${GuiltyPerson.id}`,
                 GuiltyPerson,
                 { headers: {'Content-Type': 'multipart/form-data' }}

        );
    }
}
export default GuiltyPersonServiceApi;
