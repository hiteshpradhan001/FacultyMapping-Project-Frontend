import React, { Component } from 'react'
import Service from '../Service';
export default class UpdateSubject extends Component {
  constructor(props) {
    super(props);


    this.state = {
      id: this.props.match.params.id,
      dcode:'' ,
          dname:'' ,
          subject:'' ,
     
    }
    this.changeDCodeHandler = this.changeDCodeHandler.bind(this);
    this.changeDNameHandler = this.changeDNameHandler.bind(this);
    this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
    this.updateSubject = this.updateSubject.bind(this);
  }

  componentDidMount() {
    Service.getSubjectById(this.state.id).then((res) => {
      let sub = res.data;
      this.setState({
        dcode:sub.dcode ,
          dname:sub.dname ,
          subject:sub.subject
        
      });
    });
  }
  updateSubject = (e) => {
    e.preventDefault();

    let sub = { dcode: this.state.dcode, dname: this.state.dname, subject: this.state.subject}
    console.log('sub =>' + JSON.stringify(sub));
    console.log('id =>' + JSON.stringify(this.state.id));
    Service.updateSubject(sub, this.state.id).then(res => {
      this.props.history.push('/ListSubject');
    });
  }

  changeDCodeHandler(event) {
    this.setState({ dcode: event.target.value })
  }

  changeSubjectHandler(event) {
    this.setState({ subject: event.target.value })
  }
  changeDNameHandler(event) {
    this.setState({ dname: event.target.value })
  }
 
  cancel() {
    this.props.history.push("/ListSubject");
  }

  render() {
    return (


      <div className="container ">
        <div className="row ">
          <div className="card col-md-4 offset-md-4 offset-md-4">
            <h2>Update Details</h2>

            <form>
              <div className="form-group">
                <label>Domain code</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2 rounded"
                  value={this.state.dcode} onChange={this.changeDCodeHandler} />
              </div>

              <div className="form-group">
                <label>DOMAIN</label>
                <input  className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.dname} onChange={this.changeDNameHandler} />
              </div>

              <div className="form-group">
                <label>subject</label>
                <input className="form-control pb-1  mt-1 mb-4 shadow-lg p-3 mb-2  rounded"
                  value={this.state.subject} onChange={this.changeSubjectHandler} />
              </div>
            
           
              <button className="btn btn-success me-3 mb-2" onClick={this.updateSubject}>Save</button>
              <button className="btn btn-danger ms-4 mb-2" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
            </form>
          </div>

        </div>

      </div>

    );
  }
    
}
