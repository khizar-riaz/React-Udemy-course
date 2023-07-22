import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const ViewUser = () => {
  const { userId } = useParams(); //it will grab the userId value from url and return that
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    fetchUser(); //will call only once on page load as we have pased empty depedency array
  }, []);

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    //console.log(response);
    setUser(response.data);
  };
  return (
    <div className="container">
      <ListGroup variant="flush" className="P=4 W-75">
        <ListGroup.Item>{user.name}</ListGroup.Item>
        <ListGroup.Item>{user.email}</ListGroup.Item>
        <ListGroup.Item>{user.phone}</ListGroup.Item>
        <ListGroup.Item>{user.username}</ListGroup.Item>
        <ListGroup.Item>{user.website}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ViewUser;
