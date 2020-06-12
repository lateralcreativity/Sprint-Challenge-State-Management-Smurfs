import React, { Component } from "react";
import SmurfContainer from './SmurfContainer';
import SmurfForm from './SmurfForm';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <br/>
        <SmurfForm />
        <br/>
        <div>Your Smurf Village!</div>
        <br/>
        <SmurfContainer />
      </div>
    );
  };
};

export default App;
