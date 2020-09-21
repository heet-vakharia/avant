import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
// Components
import Navbar from "./components/Navbar/Navbar.component";
import Signin from "./components/SignInRegister/Signin/Signin.component";
import Register from "./components/SignInRegister/Register/Register.component";
import Homepage from "./pages/Homepage/Homepage.page";

function App() {
  const [isUserLogIn, setIsUserLogin] = useState(true);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Navbar
          isUserLogIn={isUserLogIn}
          setIsUserLogin={setIsUserLogin}
          user={user}
        />

        {!isUserLogIn ? (
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Signin setIsUserLogin={setIsUserLogin} setUser={setUser} />
              )}
            />
            <Route
              path="/register"
              exact
              render={() => (
                <Register setIsUserLogIn={setIsUserLogin} setUser={setUser} />
              )}
            />
          </Switch>
        ) : (
          <Route path="/" exact component={Homepage} />
        )}
      </Router>
    </div>
  );
}

export default App;
