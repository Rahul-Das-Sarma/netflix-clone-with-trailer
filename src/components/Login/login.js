import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../store/actionCreator/actionCreator";
import { connect } from "react-redux";

function Login(props) {
  const history = useHistory();
  
  const emailRef = useRef("");
  const passwordRef = useRef("");
 

  function handleSubmit(e) {
    e.preventDefault();
    props.signIn(emailRef.current.value, passwordRef.current.value);
    history.push("/") 
    
  }

 

  return (
    <div className="Signup_container">
      <div className="card">
        <div className="card_container">
          <h1> Log In</h1>

          {props.activeUser.error && <h3>{props.activeUser.error}</h3>}
          <div className="details__info">
            <form onSubmit={handleSubmit}>
              <input
                ref={emailRef}
                className="inp"
                type="email"
                required
                placeholder="Email"
              />
              <input
                ref={passwordRef}
                className="inp"
                type="password"
                required
                placeholder="Password"
              />
              <input className="chk_bx" type="checkbox" />{" "}
              <label>Remember Me?</label>
              <input type="submit" value=" Log IN " className="btn-signup" />
            </form>
            <p style={{ margin: "10px 0" }}>Forgot Password? </p>
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{ textDecoration: "underline", color: "white" }}
              >
                <span> Sign up here </span>{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    activeUser: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(userLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
