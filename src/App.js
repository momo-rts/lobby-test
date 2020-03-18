import React from "react";
import UsernameAdder from "./components/UsernameInputter";
import "./App.css";

class App extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    //console.log(this.state, "app state!!!!");
    return (
      <div className="App">
        <header className="App-header">
          <h1>Momo Rts</h1>
          <UsernameAdder
            addUsername={this.addUsername}
            addPassword={this.addPassword}
          />
        </header>
      </div>
    );
  }

  addUsername = word => {
    this.setState({ username: word });
  };
  addPassword = word => {
    this.setState({ password: word });
  };
}

export default App;
