import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddFaculty extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          dob:'' ,
          dept:'' ,
          name:'' ,
          gender:'' ,
          email_id:'',
        password:''
    
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveFaculty = this.saveFaculty.bind(this);
      }
  
      saveFaculty = (e) =>{
        e.preventDefault();
    
        let fac = {dob: this.state.dob, dept: this.state.dept, name: this.state.name, gender: this.state.gender,email_id: this.state.email_id, password: this.state.password}
        console.log('fac =>' + JSON.stringify(fac));
    
        Service.createFaculty(fac).then(res =>{
          this.props.history.push('/ListFaculty');
        });
    
        
      }
      changeNameHandler(event){
        this.setState({name: event.target.value})
      }
    
      changeDOBHandler(event){
        this.setState({dob: event.target.value})
      }
   
      changeDepartmentHandler(event){
        this.setState({dept: event.target.value})
      }
      changeGenderHandler(event){
        this.setState({gender: event.target.value})
      }
    
      changeEmailIdHandler(event){
        this.setState({email_id: event.target.value})
      }
      changePasswordHandler(event){
        this.setState({password: event.target.value})
      }

      
      cancel(){
        this.props.history.push("/ListFaculty");
      }
    
      render() {
        return (
    
    <>
    
    <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">FACULTY</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Name
                    </Form.Label>
                    
                    <Form.Control
                      type="text"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Date of Birth 
                    </Form.Label>
                   
                    <Form.Control
                      type="date"
                      value={this.state.dob}
                      onChange={this.changeDOBHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Gender
                    </Form.Label>
                   
                    <Form.Control
                      type="text"
                      value={this.state.gender}
                      onChange={this.changeGenderHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Department
                    </Form.Label>
                    
                    <Form.Control
                      type="text"
                      value={this.state.dept}
                      onChange={this.changeDepartmentHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Email_id
                    </Form.Label>
                   
                    <Form.Control
                      type="email"
                      value={this.state.email_id}
                      onChange={this.changeEmailIdHandler}
                    />
                  </Form.Group>
                  
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                    Enter Password
                    </Form.Label>
                   
                    <Form.Control
                      type="password"
                      value={this.state.password}
                      onChange={this.changePasswordHandler}
                    />
                  </Form.Group>
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveFaculty}
                >
                  Submit
                </Button>
                 <Button
                  className="btn-center"
                  variant="primary"
                  type="submit"
                  onClick={this.cancel.bind(this)}
                > Cancel</Button>
              </Form>
            </div>
          </div>
        </div>
      
  
          </>
        );
      }
}
