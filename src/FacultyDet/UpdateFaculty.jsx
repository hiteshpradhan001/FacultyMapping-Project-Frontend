import React, { Component } from 'react'
import Service from '../Service';
export default class UpdateFaculty extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      name: '',
      dob: '',
      dept:'',
      gender:'',
      email_id:'',
      password:''
     
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.updateFaculty = this.updateFaculty.bind(this);
  }

  componentDidMount() {
    Service.getFacultyById(this.state.id).then((res) => {
      let fac = res.data;
      this.setState({
        dob: fac.dob,
        dept: fac.dept,
        name: fac.name,
        gender: fac.gender,
        email_id:fac.email_id,
      password:fac.password
      });
    });
  }
  updateFaculty = (e) => {
    e.preventDefault();

    let fac = { dob: this.state.dob, dept: this.state.dept, name: this.state.name, gender: this.state.gender,email_id: this.state.email_id, password: this.state.password }
    console.log('fac =>' + JSON.stringify(fac));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateFaculty(fac, this.state.id).then(res => {
      this.props.history.push('/ListFaculty');
    });
  }
  changeNameHandler(event) {
    this.setState({ name: event.target.value })
  }

  changeDOBHandler(event) {
    this.setState({ dob: event.target.value })
  }

  changeGenderHandler(event) {
    this.setState({ gender: event.target.value })
  }
  changeDepartmentHandler(event) {
    this.setState({ dept: event.target.value })
  }
  changeEmailIdHandler(event) {
    this.setState({ email_id: event.target.value })
  }
  changePasswordHandler(event) {
    this.setState({password : event.target.value })
  }
  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (


      <div className="container ">
        <div className="row ">
          <div className="card col-md-4 offset-md-4 offset-md-4">
            <h2>Update Details</h2>

            <form>
              <div className="form-group">
                <label>Name</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 rounded"
                  value={this.state.name} onChange={this.changeNameHandler} />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input  type="date" className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.dob} onChange={this.changeDOBHandler} />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.gender} onChange={this.changeGenderHandler} />
              </div>
              <div className="form-group">
                <label>Department</label>
                <input  className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.dept} onChange={this.changeDepartmentHandler} />
              </div>
              <div className="form-group">
                <label>Email_id</label>
                <input  className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.email_id} onChange={this.changeEmailIdHandler} />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input  className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.password} onChange={this.changePasswordHandler} />
              </div>
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateFaculty}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </form>
          </div>

        </div>

      </div>

    );
  }
}
