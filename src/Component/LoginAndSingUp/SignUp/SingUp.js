import googleIcon from "../../../Assets/Icons/google.png";
import lock from "../../../Assets/Icons/lock.png";
import { Link } from "react-router-dom";
import auth from "../../../FirebaseInit/FirebaseInit";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Spinners from "../../Shear/Spinners/Spinners";
import { toast } from "react-toastify";

const SingUp = () => {
  /*******use Create With Email And Password code start here*******/
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  /*******name Update code start here*******/
  const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

  /*******Loading Spinner code start here*******/
  if (loading || updating) {
    return <Spinners />;
  }
  /*******Error message  code start here*******/
  let errorMessage;
  if (error || UpdateError) {
    errorMessage = error?.message || UpdateError?.message;
  }

  /*******Submit Handler  code start here*******/
  const submitHandler = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast("please check your email!");
  };
  console.log(user);
  return (
    <div>
      <div className="login-container">
        <div className="login">
          <span className="d-block text-danger">{errorMessage}</span>
          <button className="lock-btn">
            <img style={{ width: "30px" }} src={lock} alt="" />
          </button>
          <h3>Hey, welcome to Phonesy !!!</h3>
          <button className="google-login-btn">
            <img style={{ width: "35px" }} src={googleIcon} alt="" />
            <span>Continue With Google</span>
          </button>

          <div className="or-login">
            <div></div>
            <span>Or</span>
            <div></div>
          </div>

          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name" name="name" />
            <input type="email" placeholder="Enter Email" name="email" />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            />
            <button className="login-submit-btn">Sign In</button>
          </form>
        </div>
        <div className="login-text text-center">
          <p>
            Already have an account
            <Link to="/login" style={{ color: "#075cff" }}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
