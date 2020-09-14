import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = ({ setIsUserLogin, setUser }) => {
  const [userUserid, setUserUserid] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSigin = async () => {
    setIsLoading(true);
    await fetch("https://young-temple-47679.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        userUserid,
        userPassword,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        setUser(user);
        setIsUserLogin(true);
        setIsLoading(false);
      });
  };

  return (
    <section className="signin">
      <form action="">
        <label htmlFor="userid">
          <input
            type="text"
            name="Email"
            id="userid"
            onChange={(event) => setUserUserid(event.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="Password"
            id="password"
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </label>
        <input
          type="button"
          value={isLoading ? "Loading" : "Sign In"}
          onClick={onSigin}
        />
      </form>
    </section>
  );
};
export default Signin;
