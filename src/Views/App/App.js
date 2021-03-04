import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "Views/Login";
import { Body } from "./style";
import UserDetails from "Views/UserDetails";

function App() {
  return (
    <Body>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/userdetails" component={UserDetails} />
      </Switch>
    </Body>
  );
}

export default App;
