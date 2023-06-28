import React, { useContext, useState } from "react";
import { UserContext } from "./Context";

const FavouritesList = () => {
  const { favourites, setFavourites } = useContext(UserContext);
  console.log(favourites);
  return (
    <div className="favourite">
        <h2>FAVOURITE CONTACT LIST </h2>
        
          <div>
            {favourites.map((user) => {
              return (
                <div>
                  <p>Name: {user.fullName}</p>
                  {/* <p>Phone: {user.phone}</p>
                  <p>Email: {user.email}</p> */}
                </div>
              );
            })}
          </div>
      </div>
  );
};

export default FavouritesList;
