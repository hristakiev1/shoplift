import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/navbar/navbar.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubsriberFromAuth = null;

  componentDidMount() {
    this.unsubsriberFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubsriberFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <h1>
          {currentUser
            ? `Hello ${currentUser.displayName}`
            : "Welcome to Lifty"}
        </h1>

        <Header currentUser={currentUser} />

        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
