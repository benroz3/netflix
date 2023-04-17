import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="Email" />
          <input type="Password" placeholder="Password" />
          <button>Login</button>
          <span>
            New to Netflix?{" "}
            <Link to="/register" className="link">
              Sign up now.
            </Link>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Link to="https://www.google.co.il/" className="link">
              Learn more.
            </Link>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
