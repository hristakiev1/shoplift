import "./App.css";
import React, { Component } from "react";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/navbar/navbar.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unsubsriberFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsriberFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) =>
          setCurrentUser({
            currentUser: { id: snapShot.id, ...snapShot.data() },
          })
        );
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubsriberFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <h1>
          {currentUser.displayName
            ? `Hello ${currentUser.displayName}`
            : "Welcome to Lifty"}
        </h1>

        <Header />

        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
            }
          />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispachToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
