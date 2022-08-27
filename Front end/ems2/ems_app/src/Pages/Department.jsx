import React from "react";
import { Component } from "react";
import DepartmentService from "../Service/DepartmentService";
class Department extends React.Component{
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChanged = this.onChanged.bind(this);
        this.saveDepartment = this.saveDepartment.bind(this);
      }
    
      initialState = {
          departId: '',
          departName: '',
          singleDepartment: [],
          department:[]
          
      }
    
      saveDepartment = event => {
        event.preventDefault();
        const department = {
          departId: this.state.departId,
          departName: this.state.departName,
          
        };
    
        DepartmentService.addDepartment(department)
            .then(response => {
                if(response.data != null){
                  this.setState(this.initialState);
                  alert("User Saved Successfully");
                }
        });
    }
    
      resetDepartment = () => {
        this.setState(() => this.initialState)
      }
    
      
    
      deleteDepartment = event => {
        event.preventDefault();
    
        DepartmentService.deleteDepartment(this.state.departId)
          .then(response => {
            if(response.data != null){
              this.setState(this.initialState);
              alert("Department deleted successfully")
            }else{
              alert("Department with id not found!");
            }
          });
          this.setState(this.initialState)
      }
    
      
      viewDepartment = event =>{
        DepartmentService.getDepartment().then(response => {
          this.setState({ department: response.data});
        })
      }
      componentDidMount(){
        DepartmentService.getAllDepartment().then(response => {
          this.setState({ department: response.data });
        });
      }
    
    
      onChanged = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    
      render() {
    
        const {departId,departName} = this.state;
    
        return (
          <>
            <div className="container user-section">
              <div className="row user-section-row">
                <div className="col-md-2">
                  <p className="userButtons">
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add Department
                    </button>
                  </p>
                </div>
    
                
                <div className="col-md-2">
                  <p>
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3">
                      Delete Department
                    </button>
                  </p>
                </div>
          
                <div className="col-md-2">
                  <p>
                    <button className="btn btn-outline-dark" type="button" onClick={this.componentDidMount} data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                      All Departments
                    </button>
                  </p>
                </div>
              </div>
    
    
              <div className="row row-card user-card-form-section">
                <div className="col">
    
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <form className="row g-3 needs-validation" novalidate onSubmit={this.saveDepartment} onReset={this.resetDepartment}>
                        <div className="col-md-3">
                          <label for="validationCustom01" className="form-label">Department Id</label>
                          <input type="number" className="form-control" required placeholder="" id="validationCustom01"  name='departId' value={departId} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom01" className="form-label">Department Name</label>
                          <input type="text" className="form-control" required placeholder="" id="validationCustom02"  name='departName' value={departName} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                       
                       
                        
                      <p/>
    
    
    
                        
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type='submit' >Register Department</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
    
                      </form>
                    </div>
                  </div>
    
                  
    
                  {/* User delete section */}
                  <div className="collapse" id="collapseExample3">
                    <div className="card card-body">
                      <form className="row g-3 needs-validation" novalidate onSubmit={this.deleteDepartment} onReset={this.resetDepartment}>
                        <div className="col-12">
                          <label for="validationCustom01" className="form-label">Department Id</label>
                          <input type="number" className="form-control user-delete-input" id="validationCustom01" required  name='departId' value={departId} onChange={this.onChanged} />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
    
    
    
    
    
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="submit">Delete Department</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
    
                      </form>
                    </div>
                  </div>
    
                  {/* <!--        User view section        --> */}
                  <div className="collapse" id="collapseExample4">
                    <div className="card card-body">
                    <form className="row g-3 needs-validation" novalidate onReset={this.resetDepartment} onSubmit={this.viewDepartment}>
                        <div className="col-12">
                          <label for="validationCustom01" className="form-label">User Id</label>
                          <input type="number" className="form-control user-delete-input" id="validationCustom01" required placeholder="849xxx233" name='departId' value={departId} onChange={this.onChanged} />
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
    
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" onClick={this.viewDepartment}>View Department</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
                        
                      </form>
    
                      <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                              <th>Depart Id</th>
                              <th>Depart Name</th>
                              
                            </tr>
                        </thead>
    
                          <tbody>
                              {
                                this.state.singleDepartment.map(
                                  singleDepartment =>(
                                  <tr key={singleDepartment.departId}>
                                            <td>{singleDepartment.departId}</td>
                                            <td>{singleDepartment.departName}</td>
                                            
                                            
                                  </tr>
                                  )
                                )
                              }
                          </tbody>
    
                        </table>
                      
                    </div>
    
                    
                    
                  </div>
    
          
    
                  {/* <!-- User view all section--> */}
                  <div className="collapse" id="collapseExample5">
                    <div className="card card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th>Department ID</th>
                              <th>Department Name</th>
                            </tr>
                        </thead>
    
                          <tbody>
                              {
                                this.state.department.map(
                                  department =>(
                                  <tr key={ department.departId}>
                                            <td>{department.departId}</td>
                                            <td>{department.departName}</td>
                                           
                                            
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
    
    export default Department;


