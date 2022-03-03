import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SuspenseSpinner from "./components/Spinner";
import "./style/main.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/Home";

function App() {
  return (
    <Suspense fallback={<SuspenseSpinner />}>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
