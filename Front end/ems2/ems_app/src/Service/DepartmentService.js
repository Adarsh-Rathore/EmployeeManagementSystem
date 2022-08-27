import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2022/department";

class DepartmentService {
    addDepartment(department){
        return axios.post(USER_API_BASE_URL + "/create", department)
    }
    getAllDepartment(){
        return axios.get(USER_API_BASE_URL + "/getall" )
    }
    getDepartment(id){
        return axios.get(USER_API_BASE_URL + "/getbyid/" + id);
    }
    deleteDepartment(id){
        return axios.delete(USER_API_BASE_URL + "/delete/" + id)
    }
}
export default new DepartmentService();