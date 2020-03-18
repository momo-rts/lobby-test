import React from "react";

class UsernameInputter extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: ""
  };

  render() {
    const { usernameInput } = this.state;
    const { passwordInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Enter Username: </label>
        <input
          className="input-box"
          type="text"
          name="username"
          onChange={this.handleUsernameChange}
          value={usernameInput}
        />
        <br></br>
        <label htmlFor="username">Enter Password: </label>
        <input
          className="input-box"
          type="text"
          name="password"
          onChange={this.handlePasswordChange}
          value={passwordInput}
        />

        <br></br>
        <button type="submit">log in </button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { usernameInput } = this.state;
    const { passwordInput } = this.state;
    this.props.addUsername(usernameInput);
    this.props.addPassword(passwordInput);

    alert(
      `attemping to log in with username ${usernameInput} and password ${passwordInput}`
    );

    // this.setState(() => {
    //   return { usernameInput: "" };
    // });
  };

  handleUsernameChange = event => {
    const { value } = event.target;
    this.setState({ usernameInput: value });
  };

  handlePasswordChange = event => {
    const { value } = event.target;
    this.setState({ passwordInput: value });
  };
}

export default UsernameInputter;
