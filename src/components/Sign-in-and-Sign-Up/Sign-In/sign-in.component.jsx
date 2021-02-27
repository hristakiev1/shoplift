import { Component } from "react";
import FormInput from "../../form-input/form-input";
import "./sign-in.style.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Send to server");
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });

    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span className="subtitle">Sigh in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
