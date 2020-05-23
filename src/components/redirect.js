import React, { useState } from "react";
import "../App.css";
import { withRouter } from 'react-router-dom'
// this also works with react-router-native


const Redirect = withRouter(({ history }) => {
  var [text, setText] = useState("");
  const continueFunction = () => {
      console.log(window.location)
    const search = window.location.hash;
    const params = new URLSearchParams(search);
    const token = params.get("#access_token");
    if (token) {
      setText("Signed in successfully");
      localStorage.setItem('api-token', token)
      history.push('/list')
    } else {
      setText("Not signed in");
    }
  };

  return (
    <div className="Redirect">
      <header className="App-header">
        <p>{text}</p>
        <button onClick={continueFunction}>Continue</button>
      </header>
    </div>
  );
}
)
export default Redirect;
