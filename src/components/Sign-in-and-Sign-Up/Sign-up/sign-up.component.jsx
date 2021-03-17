import React from "react";
import FormInput from "../../form-input/form-input";
import CustomButton from "../../custom-button/button.component";
import {
  createUserProfileDocument,
  auth,
} from "../../../firebase/firebase.utils";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password doesn`t match");
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      alert(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">You don`t have account yet? </h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Register</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
