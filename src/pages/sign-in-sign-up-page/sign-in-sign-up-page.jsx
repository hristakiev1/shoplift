import React from "react";
import SignIn from "../../components/Sign-in-and-Sign-Up/Sign-In/sign-in.component";
import SignUp from "../../components/Sign-in-and-Sign-Up/Sign-up/sign-up.component";
import "./sign-in-sign-up-page.style.scss";
const SignInSignUpPage = () => {
  return (
    <div className="sign-form">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
