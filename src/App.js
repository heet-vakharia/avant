import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
// Components
import Navbar from "./components/Navbar/Navbar.component";
import Signin from "./components/Signin/Signin.component";

function App() {
  const [isUserLogIn, setIsUserLogin] = useState(false);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Navbar isUserLogIn={isUserLogIn} setIsUserLogin={setIsUserLogin} />

        {!isUserLogIn ? (
          <Route
            path="/"
            render={() => (
              <Signin setIsUserLogin={setIsUserLogin} setUser={setUser} />
            )}
          />
        ) : null}
      </Router>
    </div>
  );
}

export default App;
