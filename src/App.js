import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Redirect } from 'react-router';

const redirectConfig = {
  web_client_id: '348da7c2174c73ec9ed932f708d30b0c87df5ac99240326be55b93f939f31976',
  redirect_uri: 'https://gitlab-deployer.herokuapp.com/redirect'
}
const redirectLink = 'https://gitlab.com/oauth/authorize?client_id=' + redirectConfig.web_client_id + '&redirect_uri=' + redirectConfig.redirect_uri + '&response_type=token'
function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => window.open(redirectLink)}
        >
          Log in with GitLab
        </button>
      </header>
    </div>
  );
}

export default App;
