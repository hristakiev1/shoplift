import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Link, Route } from "react-router-dom";
import Hats from "./pages/item-pages/hats.component";

function App() {
  return (
    <div>
      <h1>Hello Lifty</h1>

      <Switch>
        <Route path="/hats" component={Hats} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
