import React, { Component } from 'react'
import Service from '../Service';
import { Form, Row, Button } from "react-bootstrap";
import { MdArrowBackIosNew } from 'react-icons/md';

export default class ListSubject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sub_det: []
        }
        this.addSubject= this.addSubject.bind(this);
        this.editSubject = this.editSubject.bind(this);
        this.deleteSubject = this.deleteSubject.bind(this);
    }

    deleteSubject(id) {
        Service.deleteSubject(id).then(res => {
            this.setState({ sub_det: this.state.sub_det.filter(sub => sub.id !== id) });
        });
    }
    editSubject(id) {
        this.props.history.push(`/update-subject/${id}`);
    }
    componentDidMount() {
        Service.getSubject().then((res) => {
            this.setState({ sub_det: res.data });
        });
    }
    addSubject(){
        this.props.history.push('/AddSubject');
    }
    
    render() {
        return (
            <>
            <a href="/" className="ms-5"><MdArrowBackIosNew />
          </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >

                    <h2 className="text-center"> SUBJECT DETAILS</h2>
                    <button type="button" style={{ marginLeft: "980px" }} className="btn btn-primary mb-3" onClick={this.addSubject}>Add Subject Details</button>
                    <div className="row">


                        <table className="table table-striped border-dark  table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>Domain code</th>
                                    <th>Domain</th>
                                    <th>Subject</th>
                                    
                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.sub_det.map(
                                        sub =>
                                            <tr key={sub.id}>
                                                <td>{sub.dcode}</td>
                                                <td>{sub.dname}</td>
                                                <td>{sub.subject}</td>
                                               

                                              <td>
                                                    <button onClick={() => this.editSubject(sub.id)} className="btn btn-primary">Update </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteSubject(sub.id)} className="btn btn-danger">Delete</button>
                                                    {/* <button style={{marginLeft: "15px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> */}
                                                </td>

                                            </tr>
                                    )
                                }</tbody>

                        </table>
                    </div>



                </div>
            </>

        )
    }
}
