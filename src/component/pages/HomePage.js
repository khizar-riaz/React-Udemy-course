import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
function HomePage() {
  const [users, setusers] = useState([]); //we are creating a users array and its setter method and its an empty array

  useEffect(() => {
    //getAllUsers();
    getAllUsersWithAwait();
  }, []); //empty array to load content once

  const getAllUsersWithAwait = async () => {
    const result = await axios.get("http://localhost:5000/users");
    console.log(result);
    setusers(result.data);

    console.log("after axios call");
  };
  const getAllUsers = () => {
    axios
      .get("http://localhost:5000/users")
      .then(function (response) {
        console.log("a response", response.data); //async call
      }) //do something if the data is feteched successfully
      .catch(function (error) {
        console.log("an error", error);
      }); //do something if there is an error
    console.log("after axios api call");
  };
  return (
    <div className="container">
      HomePage
      <h2 className="py-3">User Management System </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index)=> (
              <tr>
              <td>{index+1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>   
            ))
          }
     
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
