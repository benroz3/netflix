import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const startHandler = () => {
    if (emailRef.current) setEmail(emailRef.current.value);
  };

  const finishHandler = () => {
    if (passwordRef.current) setPassword(passwordRef.current.value);
    console.log(password); //remove later
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            className="logo"
          />
          <Link to="/" className="link">
            Login
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Email" ref={emailRef} />
            <button className="registerButton" onClick={startHandler}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Password" ref={passwordRef} />
            <button className="registerButton" onClick={finishHandler}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
