import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
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
  }

   const deleteUser = async (userId) => {
    await  axios.delete(`http://localhost:5000/users/${userId}`);
    getAllUsersWithAwait();
   }

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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <Link to="" className="btn btn-info me-2">
                  View
                </Link>
                <Link
                  to={`/users/edit/${user.id}`}
                  className="btn btn-outline-info me-2"
                >
                  Edit
                </Link>
                 <Button onClick={() => deleteUser(user.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HomePage;
