import axios from "axios";
const USER_API_BASE_URL = "http://localhost:2022/employee";
class EmployeeService {
    addEmployee(employee){
        return axios.post(USER_API_BASE_URL + "/create", employee)
    }
    getAllEmployee(){
        return axios.get(USER_API_BASE_URL + "/getall" )
    }
    getEmployee(id){
        return axios.get(USER_API_BASE_URL + "/getbyid/" + id);
    }
    deleteEmployee(id){
        return axios.delete(USER_API_BASE_URL + "/delete/" + id)
    }
    updateEmployee(id,employee){
        return axios.put(USER_API_BASE_URL + "update/" + id,employee)
    }
}
export default new EmployeeService();