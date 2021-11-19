import React, { Component } from 'react'
import Service from '../Service';
import { MdArrowBackIosNew } from 'react-icons/md';

export default class ListFaculty extends Component {
    constructor(props) {
        super(props)

        this.state = {
            faculty_details: []
        }
        this.addFaculty= this.addFaculty.bind(this);
        this.editFaculty = this.editFaculty.bind(this);
        this.deleteFaculty = this.deleteFaculty.bind(this);
    }

    deleteFaculty(id) {
        Service.deleteFaculty(id).then(res => {
            this.setState({ faculty_details: this.state.faculty_details.filter(fac => fac.id !== id) });
        });
    }
    editFaculty(id) {
        this.props.history.push(`/update-faculty/${id}`);
    }
    componentDidMount() {
        Service.getFaculty().then((res) => {
            this.setState({ faculty_details: res.data });
        });
    }
    addFaculty(){
        this.props.history.push("/AddFaculty");
    }

    render() {
         return (
            <>
            <a href="/" className="ms-5"><MdArrowBackIosNew />
          </a>
                <div className=" container shadow-lg mt-5 table-data bg-light" >
                    <h2 className="text-center"> FACULTY DETAILS</h2>
                    <button type="button" style={{ marginLeft: "980px" }} className="btn btn-primary mb-3" onClick={this.addFaculty}>Add Faculty Details</button>
                    <div className="row">


                        <table className="table table-striped border-dark  table-bordered table-hover">

                            <thead className="thead-dark">
                                <tr>
                                    <th>Name</th>
                                    <th>Date of Birth</th>
                                    <th> Department</th>
                                    <th> Gender</th>
                                    <th> Email_id</th>
                                    <th> Password</th>

                                </tr>
                            </thead>

                            <tbody >
                                {
                                    this.state.faculty_details.map(
                                        fac =>
                                            <tr key={fac.id}>

                                                <td>{fac.name}</td>
                                                <td>{fac.dob}</td>
                                                <td>{fac.dept}</td>
                                                <td>{fac.gender}</td>
                                                <td>{fac.email_id}</td>
                                                <td>{fac.password}</td>

                                              <td>
                                                    <button onClick={() => this.editFaculty(fac.id)} className="btn btn-primary">Update </button>
                                                    <button style={{ marginLeft: "15px" }} onClick={() => this.deleteFaculty(fac.id)} className="btn btn-danger">Delete</button>
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
