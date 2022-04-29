import React from "react";
import "./login.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import googleIcon from "../../../Assets/Icons/google.png";

const Login = () => {
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <button>
            <FontAwesomeIcon className="ps-2" icon={faLock} />
          </button>
          <h3>Hey, welcome again !!</h3>
          <button>
            <img src={googleIcon} alt="" /> continue with google
          </button>

          <div>
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
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
