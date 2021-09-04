import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
  <tr>
    <td>{props.record.person_name}</td>
    <td>{props.record.person_position}</td>
    <td>{props.record.person_level}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }


//  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("https://employee-app-mern.herokuapp.com/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will get the data from the database.
//  componentDidMount() {
//    request.get("record")
//      .then(response => response.json())
//      .then(data => this.setState({ records: data }))
//       this.setState({ records: data });
//      })
//      .catch(function (error) {
//        console.log(error);
//      });
//  }

//  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("https://employee-app-mern.herokuapp.com/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will delete a record based on the method
//  deleteRecord(id) {
//    fetch("" + id, { method: 'DELETE'})
//    .then((response) => {
//      console.log(response.data);
//    });
//
//    this.setState({
//      record: this.state.records.filter((el) => el._id !== id),
//    });
//  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h2>Julio Corp Software </h2>
        <h3>Employee List </h3>
        <h6>Add yourself as employee in my app!</h6>
        <h6>Make page wider if you do not see "Create Record" button next to MongoDataBase. </h6>
        <h6>Click top left "MongoDataBase" button to return to this page after adding yourself as an employee.</h6>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}