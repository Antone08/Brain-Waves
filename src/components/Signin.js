import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
      console.log("click")
  };

  return (
    <div className="signin-container">
      <h2 class="login"> Login </h2>
      <form className="form-two" onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <div className="signin-links">
        {/* <a  href="/register" target="_blank" classname="register-one">Register</a> */}
        {/* <p onClick={forgotPasswordHandler}>Forgot Password?</p> */}
        </div>
      </form>
    </div>
  );
};

export default Signin;