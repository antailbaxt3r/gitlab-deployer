import React, { useState, useEffect } from "react";
import "../App.css";
const axios = require("axios").default;
axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://gitlab.com/api/v4";
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "*";
const token = localStorage.getItem("api-token");

const ListScreen = () => {
  var [username, setusername] = useState("");
  var [name, setname] = useState("");
  var [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get("/user", {
          params: {
            access_token: token,
          },
        })
        .then((response) => {
          console.log(response);
          setusername(response.data.username);
          setname(response.data.name);
          const getList = async () => {
            await axios
              .get("users/" + response.data.username + "/projects", {
                params: {
                  access_token: token,
                },
              })
              .then((projects) => {
                console.log("projects :", projects);
                setProjectsList(projects.data);
              })
              .catch((error) => {
                console.log(error);
              });
          };
          getList();
        })
        .catch((error) => {
          console.log(error);
          alert("Could not fetch details");
        });
    };
    getUser();
  });


  return (
    <div className="ListScreen">
      <header className="App-header">
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        {projectsList.map((project) => (
          <div key={project.id} style={{ background: "white", borderRadius: 10, width: "60%", padding: 10, margin: 10}}>
            <p style={{color:'black'}}>{project.name}</p>
            <p style={{color:'black'}}>{project.description}</p>
          </div>
        ))}
      </header>
    </div>
  );
};
export default ListScreen;
