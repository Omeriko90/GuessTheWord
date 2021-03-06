import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "Views/Login";
import { Body } from "./style";
import UserPage from "Views/UserPage";

function App() {
  return (
    <Body>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/userPage" component={UserPage} />
      </Switch>
    </Body>
  );
}

export default App;
