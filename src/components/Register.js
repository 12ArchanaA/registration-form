import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Edit";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [record, setRecord] = useState([]);
  // const [errorMsg, setErrorMsg] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // setErrorMsg(validate(record));
    const newRecord = { ...state, id: new Date().getTime().toString() };
    // console.log(record);
    setRecord([...record, newRecord]);
    // setIsSubmit(true);
    // setState({ name: "", phone: "", email: "" });
  };

  // useEffect(() => {
  //   console.log(errorMsg);
  //   if(Object.keys(errorMsg).length === 0 && isSubmit) {
  //     console.log(record);
  //   }
  // },[errorMsg]);

  // const validate = (values) => {
  //   const errors ={};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if(!values.name){
  //     errors.name = "Name is required";
  //   }
  //   if(!values.email){
  //     errors.email = "Email is required";
  //   }
  //   else if(!regex.test(values.email)) {
  //       errors.email = "Not a valid email format";
  //   }
  //   if(!values.phone) {
  //     errors.phone = "Phone number is required";
  //   }
  //   else if(values.phone > 10 ) {
  //       errors.phone = "Number should not exceed 10 digits";
  //   }
  //   else if(values.phone < 10 ) {
  //     errors.phone = "Number must contain 10 digits";
  //   return errors;
  //   }
  // };

  const editForm = () => {
    navigate("/edit");
  };

  const favourites = () => {
    navigate("/favourite-lists");
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <form className="reg-form">
          <h2>Register Form</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder=""
            value={state.name}
            onChange={handleChange}
            name="name"
            id="name"
            autoComplete="off"
          />

          {/* <p className="error-message">{errorMsg.name}</p> */}

          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            placeholder=""
            value={state.phone}
            onChange={handleChange}
            name="phone"
            id="phone"
            autoComplete="off"
          />

          {/* <p className="error-message">{errorMsg.phone}</p> */}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="you@gmail.com"
            value={state.email}
            onChange={handleChange}
            name="email"
            id="email"
            autoComplete="off"
          />

          {/* <p className="error-message">{errorMsg.email}</p> */}
          <button className="save-button" type="submit" onClick={handleSave}>
            SAVE
          </button>
        </form>
      </div>
      <div className="form-content">
        {record.map((user) => {
          const { id, name, phone, email } = user;
          return (
            <div className="card-content" key={id}>
              <div className="info">
                <div className="name-field">
                  <div>NAME:</div>
                  <div>{name}</div>
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
                <button className="save-button">ADD TO FAVOURITE</button>
                <button className="save-button" onClick={favourites}>
                  FAVOURITE LIST
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Register;
