import React from "react";
import ComplianceService from "../Service/ComplianceService";

class Compliance extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.onChanged = this.onChanged.bind(this);
        this.saveCompliance = this.saveCompliance.bind(this);
      }
      initialState={
        complianceid:'',
        rlType:'',
        details:'',
        department:{
            departId:'',
            departName:'',
        },
        status:'',
        singleCompliance:[],
        compliance:[]


      }
      saveCompliance = event =>{
        event.preventDefault();
        const compliance= {
            complianceid: this.state.complianceid,
            rlType: this.state.rlType,
            details: this.state.details,
            departId: this.state.departId,
            departName: this.state.departName,
            status:this.state.status
        };
        ComplianceService.addCompliance(compliance)
        .then(response => {
            if(response.data !=null){
                this.setState(this.initialState);
                alert("Compliance Saved Successfully");
            }
        });

      }
      resetCompliance = () =>{
        this.setState( ()  => this.initialState)
      }
      componentDidMount(){
        ComplianceService.getAllCompliance().then(response => {
            this.setState({compliance: response.data});
        });
      }
      onChanged = e => {
        const {name, value} = e.target;
        this.setState({
            [name]:value
        })
      }
      render() {

        const {complianceid,rlType,details,departId,departName,status} = this.state;
    
        return (
          <>
            <div className="container user-section">
              <div className="row user-section-row">
                <div className="col-md-2">
                  <p className="userButtons">
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add Compliance
                    </button>
                  </p>
                </div>
    
                
                
               
                <div className="col-md-2">
                  <p>
                    <button className="btn btn-outline-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5">
                      All Users
                    </button>
                  </p>
                </div>
              </div>
    
    
              <div className="row row-card user-card-form-section">
                <div className="col">
    
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      <form className="row g-3 needs-validation" novalidate onSubmit={this.saveCompliance} onReset={this.resetCompliance}>
                        <div className="col-md-3">
                          <label for="validationCustom01" className="form-label">RL Type</label>
                          <input type="text" className="form-control" required placeholder="" id="validationCustom01"  name='rlType' value={rlType} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom01" className="form-label">Details</label>
                          <input type="text" className="form-control" required placeholder="" id="validationCustom02" name='details' value={details} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom02" className="form-label">DepartId</label>
                          <input type="number"  className="form-control" required placeholder="" id="validationCustom03"  name='departId' value={departId} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        <div className="col-md-3">
                          <label for="validationCustom03" className="form-label">Status</label>
                          <input type="text" required placeholder="" min="1111111111" max="9999999999" maxlength="10" className="form-control" id="validationCustom04"  name='status' value={status} onChange={this.onChanged}/>
                          <div className="valid-feedback">
                            Looks good!
                          </div>
                        </div>
                        
    
    
    
    
                       
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type='submit'>Add Compliance</button>
                        </div>
                        <div className="col-6 move-to-center">
                          <button className="btn btn-outline-dark" type="reset">Reset</button>
                        </div>
    
                      </form>
                    </div>
                  </div>
    
                  {/* User update section */}
                  
    
                  {/* User delete section */}
                
    
                  {/* <!--        User view section        --> */}
                  
    
          
    
                  {/* <!-- User view all section--> */}
                  <div className="collapse" id="collapseExample5">
                    <div className="card card-body">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                              <th>Compliance Id</th>
                              <th>RL Tyep</th>
                              <th>Details</th>
                              <th>status</th>
                             
                            </tr>
                        </thead>
    
                          <tbody>
                              {
                                this.state.compliance.map(
                                  compliance =>(
                                  <tr key={compliance.complianceid}>
                                            <td>{compliance.complianceid}</td>
                                            <td>{compliance.rlType}</td>
                                            <td>{compliance.details}</td>
                                            <td>{compliance.status}</td>
                                            
                                            
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
export default Compliance;