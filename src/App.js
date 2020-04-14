import React from 'react';
import logo from './tmo-logo-v3.svg';
import './App.css';

function App() {
  return (
  <div className="AppPage">

    <div className="AppTopPage">
      <div>
        <a class="logoAnchor" href="https://www.t-mobile.com/">
          <img className="headerLogo" src={logo} alt="T-Mobile"/>
        </a>
      </div>
      <div className="headerLinks">
        <div>
          <a href="https://dialogflow.com/">Dialogflow</a>
      </div>
      <div>
        <a className="endLink" href="https://www.t-mobile.com/support/account">My Account</a>
      </div>
      </div>
    </div>

    <div className="AppMiddlePage">
      <div>
        <h1>
          We’re committed to supporting our customers. Learn how we're responding to COVID-19.
        </h1>
      </div>
    </div>

    <div className="AppBottomPage">
      <div>
        <iframe
          className="iframe"
          allow="microphone;"
          width="100%"
          height="500"
          src="https://console.dialogflow.com/api-client/demo/embedded/t-mobile"
          title="My COVID Demo"
        />
      </div>
    </div>
    
  </div>
  );
}

export default App;