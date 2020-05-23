import React, { useState } from "react";
import "../App.css";
const axios = require("axios").default;
axios.defaults.baseURL = "https://gitlab.com/api/v4";
const token = localStorage.getItem("api-token");

const ListScreen = () => {
  var [username, setusername] = useState("0");
  var [name, setname] = useState("0");

  if (token) {
    axios
      .get("/user", {
        params: {
          access_token: token,
        },
      })
      .then((response) => {
        console.log(response);
        setusername(response.data.username);
        setname(response.data.name);
      })
      .catch((error) => {
        console.log(error);
        alert("Could not fetch details");
      });
  } else {
    alert("Not signed in!");
  }
  return (
    <div className="ListScreen">
      <header className="App-header">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
      </header>
    </div>
  );
};
export default ListScreen;
