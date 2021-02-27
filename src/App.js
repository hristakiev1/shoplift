import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.component";
import Header from "./components/navbar/navbar.component";

function App() {
  return (
    <div>
      <h1>Hello Lifty</h1>
      <Header />

      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
