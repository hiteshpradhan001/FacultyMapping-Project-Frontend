import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <>
            <div class="card-group mt-5">
  <div class="card shadow mt-5 ms-5 me-5">
    <div class="card-body">
    <h5 class="card-title">Faculty Details</h5>
    <p class="card-text">Here admin can add faculty details</p>
    <a href="ListFaculty" class="btn btn-primary">Faculty</a>
  </div>
  </div>
  <div class="card shadow mt-5 ms-5 me-5">
    <div class="card-body">
    <h5 class="card-title">Subject Details</h5>
    <p class="card-text">Here Admin can add subject details</p>
    <a href="ListSubject" class="btn btn-primary">Subject</a>
  </div>
  </div>
  
</div>
            </>
        )
    }
}
