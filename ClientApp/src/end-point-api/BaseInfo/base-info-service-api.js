import Axios from "axios";
import GlobalData from "../../global/global-data";

export default class BaseInfoServiceApi {

    static GetEducationData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetEducationData`) ;
    }
    static GetProvinceData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetProvinceData`) ;
    }

    static GetCategoryData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetCategoryData`) ;
    }

    static GetCityDataByProvinceId(id) {
       
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetCityDataByProvinceId/${id}`) ;
    }

    static GetArrestedReasonData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetArrestedReasonData`) ;
    }

    static GetDrugTypeData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetDrugTypeData`) ;
    }

    static GetGenderData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetGenderData`) ;
    }

    static GetHealthStatusData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetHealthStatusData`) ;
    }

    static GetMaritalStatusData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetMaritalStatusData`) ;
    }

    static GetNationalityTypeData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetNationalityTypeData`) ;
    }

    static GetReligionData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetReligionData`) ;
    }
    static GetConsciousnessTypeData() {
        return Axios.get(`${GlobalData.baseUrl}/BaseInfo/GetConsciousnessTypeData`) ;
    }
    

}