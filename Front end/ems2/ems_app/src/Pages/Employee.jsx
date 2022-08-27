import React from "react";
import EmployeeService from "../Service/EmployeeService";
class Employee extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChanged = this.onChanged.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
      }
      initialState = {
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        department:{
          departId:''
        },
        singleEmployee:[],
        employee:[]
      }
      saveEmployee = event =>{
        event.preventDefault();
        const employee ={
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            departId:this.state.departId
            
        };
        EmployeeService.addEmployee(employee)
        .then(response =>{
            if(response.data != null){
                this.setState(this.initialState);
                alert("Employee Saved Sucessfully");
            }
        });

      }
      resetEmployee=()=>{
        this.setState(() => this.initialState)
      }
      updateEmployee = event =>{
        event.preventDefault();
        const employee = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dob: this.state.dob,
            departId: this.state.departId,
           // departName: this.state.departName
        };
        EmployeeService.updateEmployee(this.state.id,employee)
        .then(response => {
            if(response.data !=null){
                this.setState(this.initialState);
                alert("Employee updated Successfully");
            }else{
                alert("User with entered id not found");
            }
        });
        this.setState(this.initialState)
      }
      deleteEmployee = event =>{
        event.preventDefault();
        EmployeeService.deleteEmployee(this.state.id)
        .then(response => {
            if(response.data !=null){
            this.setState(this.initialState);
            alert("Employee deleted successfully")
        }else{
            alert("Employee with id not found");
        }
      });
      this.setState(this.initialState)
    }
    componentDidMount(){
        EmployeeService.getAllEmployee().then(response => {
            this.setState({employee :response.data});
            console.log(this.state.employee)
        });
    }
    onChanged = e =>{
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }
    render() {

        const {id,firstName,lastName,email,departId} = this.state;
    
        return (
          <>
            <div className="container user-section">
              <div className="row user-section-row">
                <div className="col-md-2">
                  <p className="userButtons">
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add Employee
                    </button>
                  </p>
                </div>
    
                
                <div className="col-md-2">
                  <p>
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                      Delete Employee
                    </button>
                  </p>
                </div>
               
                <div className="col-md-2">
                  <p>
                    <button className="btn btn-outline-dark" type="button" onClick={this.componentDidMount} data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                      View All Employees
                    </button>
                  </p>
                </div>
              </div>
    
    
              <div className="row row-card user-card-form-section">
                <div className="col">
    
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <form className="row g-3 needs-validation" novalidate onSubmit={this.saveEmployee} onReset={this.resetEmployee}>
                        
                        <div className="col-md-3">
                          <label for="validationCustom01" className="form-label">First Name</label>
                          <input type="text" className="form-control" required placeholder=""  id="validationCustom02"  name='firstName' value={firstName} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom02" className="form-label">Last Name</label>
                          <input type="text" min="5" className="form-control" required placeholder="" id="validationCustom03"  name='lastName' value={lastName} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom03" className="form-label">Email</label>
                          <input type="email" className="form-control" required placeholder="" id="validationCustom04"  name='email' value={email} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom04" className="form-label">Department Id</label>
                          <input type="text" className="form-control" required placeholder="" id="validationCustom05"  name='departId' value={departId} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
    
    
    
    
                        <p></p>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type='submit'>Register Employee</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
    
                      </form>
                    </div>
                  </div>
    
                  {/* User update section */}
                 
    
                  {/* User delete section */}
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body">
                      <form className="row g-3 needs-validation" novalidate onSubmit={this.deleteEmployee} onReset={this.resetEmployee}>
                        <div className="col-12">
                          <label for="validationCustom01" className="form-label">Employee Id</label>
                          <input type="number" className="form-control user-delete-input" required placeholder="" id="validationCustom01"  name='id' value={id} onChange={this.onChanged} />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
    
    
    
    
    
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="submit">Delete Employee</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
    
                      </form>
                    </div>
                  </div>
    
                  {/* <!--        User view section        --> */}
                 
          
    
                  {/* <!-- User view all section--> */}
                  <div className="collapse" id="collapseExample5">
                    <div className="card card-body">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th>Employee Id</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Email</th>
                             
                            </tr>
                        </thead>
    
                          <tbody>
                              {
                                this.state.employee.map(
                                  employee =>(
                                  <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                          
                                            
                                  </tr>
                                  )
                                )
                              }
                          </tbody>
    
                        </table>
                    </div>
                  </div>
    
    
    
                </div>
              </div>
    
            </div>
          </>
        );
      }
    }
    
    export default Employee;