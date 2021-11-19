import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import AddFaculty from './FacultyDet/AddFaculty'
import ListFaculty from './FacultyDet/ListFaculty'
import UpdateFaculty from './FacultyDet/UpdateFaculty';

import ListSubject from './SubjectDet/ListSubject'
import AddSubject from './SubjectDet/AddSubject'
import UpdateSubject from'./SubjectDet/UpdateSubject'
import Main from './Main';

function App(){
      return(<>
       

<Switch>
  <Route exact path="/AddFaculty" component={AddFaculty}/>
  <Route exact path="/" component={Main}/>
  <Route exact path="/ListFaculty" component={ListFaculty}/>
  <Route exact path="/update-faculty/:id" component={UpdateFaculty}/>
  <Route exact path="/AddSubject" component={AddSubject}/>
  <Route exact path="/ListSubject" component={ListSubject}/>
  <Route exact path="/update-subject/:id" component={UpdateSubject}/>

  </Switch>
   </ >
      )
}
export default App;


