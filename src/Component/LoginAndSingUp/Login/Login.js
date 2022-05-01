import React, { useRef } from "react";
import "./login.css";
import googleIcon from "../../../Assets/Icons/google.png";
import lock from "../../../Assets/Icons/lock.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Spinners from "../../Shear/Spinners/Spinners";
import { toast } from "react-toastify";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  /*******use Sign In With Email And Password code start here*******/
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  /*******Google Sing Up code start here*******/
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  /*******use Send Password Reset Email code start here*******/
  const [sendPasswordResetEmail, sending, PasswordError] =
    useSendPasswordResetEmail(auth);

  let from = location?.state?.from?.pathname || "/";

  /*******user code start here*******/
  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  /*******Loading Spinner code start here*******/
  if (loading || googleLoading || sending) {
    return <Spinners />;
  }
  /*******Error message  code start here*******/
  let errorMessage;
  if (error || googleError || PasswordError) {
    errorMessage =
      error?.message || googleError?.message || PasswordError?.message;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    fetch(" https://intense-dusk-83706.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("accessToken", result.accessToken);
      });
  };

  return (
    <div>
      <div className="login-container">
        <div className="login">
          <span className="d-block text-danger">{errorMessage}</span>
          <button className="lock-btn">
            <img style={{ width: "30px" }} src={lock} alt="" />
          </button>
          <h3>Hey, welcome again !!!</h3>
          <button
            onClick={() => signInWithGoogle()}
            className="google-login-btn"
          >
            <img style={{ width: "35px" }} src={googleIcon} alt="" />
            <span>Continue With Google</span>
          </button>

          <div className="or-login">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>

          <form onSubmit={submitHandler}>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
            <input
              required
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
              name="password"
            />
            <button className="login-submit-btn">Sign In</button>
          </form>
        </div>
        <div className="login-text row row-cols-md-2">
          <span
            onClick={async () => {
              if (emailRef.current.value) {
                await sendPasswordResetEmail(emailRef.current.value);
                toast("please check your email!");
              } else {
                toast("please, Enter  email!");
              }
            }}
          >
            Forget Password?
          </span>
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
