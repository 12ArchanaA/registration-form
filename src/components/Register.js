import React, { useState, useContext, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";

const Register = () => {
  const { userState, setUserState, favourites, setFavourites } =
    useContext(UserContext);
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserState({ ...userState, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newRecord = { ...userState, id: new Date().getTime().toString() };
    console.log(record);
    setRecord([...record, newRecord]);
  };

  const editForm = () => {
    navigate("/edit");
  };

  const addFavourites = () => {
    console.log(userState);
    let newArray = favourites;
    newArray.push(userState);
    setFavourites(newArray);
  };

  const favouritesList = () => {
    navigate("/favourite-lists");
  };

  return (
    <>
      <div className="main-container">
        <div className="form-container">
          <form className="reg-form">
            <h2>Register Form</h2>

            <label htmlFor="fullName">Name:</label>
            <input
              type="text"
              placeholder=""
              value={userState.fullName}
              onChange={handleChange}
              name="fullName"
              id="fullName"
              autoComplete="off"
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              placeholder=""
              value={userState.phone}
              onChange={handleChange}
              name="phone"
              id="phone"
              autoComplete="off"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="you@gmail.com"
              value={userState.email}
              onChange={handleChange}
              name="email"
              id="email"
              autoComplete="off"
            />

            <button className="save-button" type="submit" onClick={handleSave}>
              SAVE
            </button>
            {/* <div className="error">
              {errorMessage()}
              {successMessage()}
            </div> */}
          </form>
        </div>
        <div className="form-content">
          {record.map((user) => {
            const { id, fullName, phone, email } = user;
            return (
              <div className="card-content" key={id}>
                <div className="info">
                  <div className="name-field">
                    <div>NAME:</div>
                    <div>{fullName}</div>
                  </div>
                  <div className="phone-field">
                    <div>PHONE NUMBER:</div>
                    <div>{phone}</div>
                  </div>
                  <div className="email-field">
                    <div>EMAIL:</div>
                    <div>{email}</div>
                  </div>
                  <button className="save-button" onClick={editForm}>
                    EDIT
                  </button>
                  <button className="save-button" onClick={addFavourites}>
                    ADD TO FAVOURITE
                  </button>
                  <button className="save-button" onClick={favouritesList}>
                    FAVOURITE LIST
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Register;
