import React, { useState } from "react";
import "../App.css";
import Favourites from "./Favourites";

const Edit = () => {
  return (
    <div className="edit-container">
      <div className="edit-reg-form">
        <div className="form-container">
          <form className="reg-form">
            <h2>Register Form</h2>
            <label htmlFor="name">Name:</label>

            <label htmlFor="phone">Phone:</label>

            <label htmlFor="email">Email:</label>

            <button className="save-button" type="submit">
              SAVE
            </button>
          </form>
        </div>
      </div>
      <div className="favourites-list">
        <h3>FAVOURITES LIST</h3>
      </div>
    </div>
  );
};

export default Edit;
