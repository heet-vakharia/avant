import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../form.styles.scss";

const Signin = ({ setIsUserLogin, setUser }) => {
  const [userUserid, setUserUserid] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const onSigin = async () => {
    setIsLoading(true);
    if (userPassword && userUserid) {
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
          if (user.id) {
            setUser(user);
            setIsUserLogin(true);
          } else {
            setErrMsg(user.msg);
            setIsLoading(false);
          }
        });
    } else {
      setIsLoading(false);
      setErrMsg("Plz filled up your Username & Password");
    }
  };

  return (
    <section className="loginRegister">
      <div className="form">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1071.45 384.96">
            <path
              className="small-circle"
              d="M299.48,273.25a10.31,10.31,0,1,1-10.31-10.31A10.31,10.31,0,0,1,299.48,273.25ZM181.17,292.94a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,181.17,292.94Zm-98-123a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,83.17,169.94Zm215-63a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,298.17,106.94Zm-46-35a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,252.17,71.94Zm-59-14a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,193.17,57.94Zm-51,21a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,142.17,78.94Zm-40,40a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,102.17,118.94Zm-7,107a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,95.17,225.94Zm36,47a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,131.17,272.94Zm107,17a10.31,10.31,0,1,0,10.31,10.31A10.31,10.31,0,0,0,238.17,289.94Z"
            />
            <path
              className="large-circle"
              d="M281.87,41A15.89,15.89,0,1,1,266,25.13,15.88,15.88,0,0,1,281.87,41ZM115,36.13A15.89,15.89,0,1,0,130.87,52,15.88,15.88,0,0,0,115,36.13Zm73-22A15.89,15.89,0,1,0,203.87,30,15.88,15.88,0,0,0,188,14.13Zm-129,79A15.89,15.89,0,1,0,74.87,109,15.88,15.88,0,0,0,59,93.13Zm37,207A15.89,15.89,0,1,0,111.87,316,15.88,15.88,0,0,0,96,300.13Zm220-11A15.89,15.89,0,1,0,331.87,305,15.88,15.88,0,0,0,316,289.13Zm-68,39A15.89,15.89,0,1,0,263.87,344,15.88,15.88,0,0,0,248,328.13Zm-76,2A15.89,15.89,0,1,0,187.87,346,15.88,15.88,0,0,0,172,330.13Zm-120-90A15.89,15.89,0,1,0,67.87,256,15.88,15.88,0,0,0,52,240.13Zm-19-77A15.89,15.89,0,1,0,48.87,179,15.88,15.88,0,0,0,33,163.13Zm296-87A15.89,15.89,0,1,0,344.87,92,15.88,15.88,0,0,0,329,76.13Z"
            />
            <g id="logo__text">
              <path
                className="logo__text--letter"
                d="M407.78,124.63,478,273.25H445.09l-42.4-90.32-46,90.32H323.4l75.69-148.62Z"
              />
              <path
                className="logo__text--letter"
                d="M533.5,273.25l-45.58-91.38H514.2l23.33,46.86,23.1-46.86h26.29l-45.58,91.38Z"
              />
              <path
                className="logo__text--letter"
                d="M715.18,181.87v91.38H692.71v-8.91a48.34,48.34,0,1,1,0-73.77l2.12-8.7Zm-26.71,45.58a24.63,24.63,0,0,0-7-17.59,22.9,22.9,0,0,0-16.74-7.21,23.78,23.78,0,0,0-17,7.21,25.58,25.58,0,0,0-7,17.59,26,26,0,0,0,7,17.6,23.78,23.78,0,0,0,17,7.21,22.9,22.9,0,0,0,16.74-7.21A25,25,0,0,0,688.47,227.45Z"
              />
              <path
                className="logo__text--letter"
                d="M779.63,189.93c7.2-6.36,16.75-10.6,26.07-10.6,24.6,0,44.74,21.62,44.74,48.55v45.37H824.57V227.88c0-13.15-9.33-24.81-22.05-24.81s-22,11.66-22,24.81v45.37H753.76V181.87h21.63Z"
              />
              <path
                className="logo__text--letter"
                d="M951.56,181.87v24.81h-21.2v66.57H903.44V206.68H884.36V181.87h19.08V148h26.92v33.92Z"
              />
            </g>
          </svg>
        </div>
        <h1 className="form__heading">Sign In</h1>
        <label htmlFor="userid" className="form--userid-label form--item-label">
          <input
            type="text"
            name="userid"
            id="userid"
            placeholder="Username"
            className="form--userid form--item"
            onChange={(event) => setUserUserid(event.target.value)}
          />
        </label>
        <label
          htmlFor="password"
          className="form--Password-label form--item-label"
        >
          <input
            type="password"
            name="Password"
            id="password"
            placeholder="Password"
            className="form--password form--item"
            onChange={(event) => setUserPassword(event.target.value)}
          />
        </label>
        <button type="button" className="form__btn" onClick={onSigin}>
          {isLoading ? "Loading" : "Sign In"}
        </button>
        <Link to="/register" className="register__link">
          Dont have a account?
        </Link>
        <h3 className={`form__errMsg ${isLoading ? "opacity-none" : ""}`}>
          {errMsg}
        </h3>
      </div>
    </section>
  );
};
export default Signin;
