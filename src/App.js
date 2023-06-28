import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";
import { UserContext } from "./components/Context";
import FavouritesList from "./components/FavouritesList";

function App() {
  const [userState, setUserState] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [favourites, setFavourites] = useState([]);
  return (
    <>
      <div className="App">
        <UserContext.Provider
          value={{ userState, setUserState, favourites, setFavourites }}
        >
          <Routes>
            <Route path="/registration-form" element={<Register />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/favourite-lists" element={<FavouritesList />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
