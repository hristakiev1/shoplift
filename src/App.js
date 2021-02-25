import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Link, Route } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.component";

function App() {
  return (
    <div>
      <h1>Hello Lifty</h1>

      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
