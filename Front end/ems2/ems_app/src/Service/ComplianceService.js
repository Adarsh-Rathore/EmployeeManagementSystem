import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2022/compliance";

class ComplianceService{
    addCompliance(compliance){
        return axios.post(USER_API_BASE_URL + "/create/compliance", compliance)
    }
    getAllCompliance(){
        return axios.get(USER_API_BASE_URL + "/getall")
    }
}
export default new ComplianceService();