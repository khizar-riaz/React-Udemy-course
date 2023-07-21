import React, { useState } from "react";


const AddUser = () => {

const initialState = { name: "", username: "", email: "", phone: "", website: ""};
const [ user, setUser] = useState(initialState)

const { name, username, email, phone, website} = user; //object destructing

  const onChangeInput = (event) => {
    console.log(event);
    setUser({...user, [event.target.name]: event.target.value});
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto p-5 shadow-sm">
        <h2 className="text-center mb-4">Add User</h2>
        <form>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control from-control-lg"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your phone number"
              name="phone"
              value={phone}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Enter your website"
              name="website"
              value={website}
              onChange={(event) => onChangeInput(event)}
            />
          </div>
          <button className="btn btn-info text-white col-12">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
