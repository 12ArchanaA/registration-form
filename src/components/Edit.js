import React, { useState, useContext } from "react";
import "../App.css";
import { UserContext } from "./Context";

const Edit = (props) => {
  const { userState, setUserState } = useContext(UserContext);
  const [details, setDetails] = useState([]);

  const [record, setRecord] = useState([]);
  console.log(props);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserState({ ...userState, [name]: value });
  };
  const saveForm = (e) => {
    e.preventDefault();
    console.log(record);
    const newRecord = { ...userState, id: new Date().getTime().toString() };
    setRecord([...record, newRecord]);
  };
  return (
    <div className="edit-container">
      <div className="edit-reg-form">
        <div className="form-container">
          <form className="reg-form">
            <h2>Register Form</h2>

            <label htmlFor="fullName">Name:</label>
            <input
              type="text"
              value={userState.fullName}
              onChange={handleChange}
              name="fullName"
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              value={userState.phone}
              onChange={handleChange}
              name="phone"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="text"
              value={userState.email}
              onChange={handleChange}
              name="email"
            />
            <button className="save-button" type="submit" onClick={saveForm}>
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
