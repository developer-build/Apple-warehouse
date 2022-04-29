import React from "react";
import "./login.css";
import googleIcon from "../../../Assets/Icons/google.png";
import lock from "../../../Assets/Icons/lock.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <button className="lock-btn">
            <img style={{ width: "30px" }} src={lock} alt="" />
          </button>
          <h3>Hey, welcome again !!!</h3>
          <button className="google-login-btn">
            <img style={{ width: "35px" }} src={googleIcon} alt="" />
            <span>Continue With Google</span>
          </button>

          <div className="or-login">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>

          <form>
            <input type="email" placeholder="Enter Email" name="email" />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            />
            <button className="login-submit-btn">Sign In</button>
          </form>
        </div>
        <div className="login-text row row-cols-md-2">
          <span>Forget Password?</span>
          <p>
            Don't have an account?
            <Link to="/sign-up" style={{ color: "#075cff" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
