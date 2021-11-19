import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";

export default class AddSubject extends Component {
    constructor(props) {
        super(props);
    
    
        this.state = {
          dcode:'' ,
          dname:'' ,
          subject:'' 
          
        }
        this.changeDCodeHandler = this.changeDCodeHandler.bind(this);
        this.changeDNameHandler = this.changeDNameHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);

        this.saveSubject = this.saveSubject.bind(this);
      }
  
      saveSubject = (e) =>{
        e.preventDefault();
    
        let sub = {dcode: this.state.dcode, dname: this.state.dname,subject: this.state.subject}
        console.log('sub =>' + JSON.stringify(sub));
    
        Service.createSubject(sub).then(res =>{
          this.props.history.push('/ListSubject');
        });
    
        
      }
      changeDCodeHandler(event){
        this.setState({dcode: event.target.value})
      }
    
      changeDNameHandler(event){
        this.setState({dname: event.target.value})
      }
   
      changeSubjectHandler(event){
        this.setState({subject: event.target.value})
      }
    

      
      cancel(){
        this.props.history.push("/ListSubject");
      }
    
      render() {
        return (
    
    <>
    
    <div>
         <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
            <h3 className="text-center text mt-2">Subject</h3>
            <div className="card-body">
              <Form striped bordered hover variant="light">
                <Row className="mb-3">
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Domain code
                    </Form.Label>
                    
                    <Form.Control
                      type="text"
                      value={this.state.dcode}
                      onChange={this.changeDCodeHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Domain Name
                    </Form.Label>
                   
                    <Form.Control
                      type="text"
                      value={this.state.dname}
                      onChange={this.changeDNameHandler}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGridZip">
                    <Form.Label>
                      Enter Subject Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.subject}
                      onChange={this.changeSubjectHandler}
                    />
                  </Form.Group>
                  
                </Row>
                <Button
                  className="btn-center me-2"
                  variant="primary"
                  type="submit"
                  onClick={this.saveSubject}
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
