import Axios from "axios";
import GlobalData from "../global/global-data";

class PersonServiceApi {
    static GetPagedPersonApi(currentIndex, PageSize, sortParam, searchParams) {
        return Axios.post(`${GlobalData.baseUrl}/Person/GetPersonDataInAdvance`, {
            "currentIndex": currentIndex,
            "PageSize": PageSize,
            searchParams: searchParams,
            sortParam: sortParam
        });
    }
    static GetPersonById(id) {
        return Axios.get(`${GlobalData.baseUrl}/Person/GetPersonById/${id}`);
    }
    static SavePerson(Person) {
        return Axios.put(
            `${GlobalData.baseUrl}/Person/SavePersonData/${Person.id}`,
            Person,
            { headers: {'Content-Type': 'multipart/form-data' }}

        );
    }
}
export default PersonServiceApi;
