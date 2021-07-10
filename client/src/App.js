import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};

export default App;





//import React, { Component } from "react";
//
//// We use Route in order to define the different routes of our application
//import { Switch, Route } from "react-router-dom";
//
//// We import all the components we need in our app
//import Navbar from "./components/navbar";
//import Edit from "./components/edit";
//import Create from "./components/create";
//import RecordList from "./components/recordList";
//
//
//const App = () => {
//  return (
//    <div>
//      <Navbar />
//      <Switch>
//          <Route path="/">
//          <Route path="/recordList" component={RecordList} />
//          <Route path="/edit/:id" component={Edit} />
//          <Route path="/create" component={Create} />
//      </Switch>
//    </div>
//  );
//};
//
//export default App;