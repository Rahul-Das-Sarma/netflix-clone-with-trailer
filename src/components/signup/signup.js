import React, {useRef, useState} from "react";
import "./signup.css";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import { userSignUp } from "../../store/actionCreator/actionCreator";

function Signup(props) {
  const [loading, setLoading ] = useState(false);
  const [error, setError ] = useState("")
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef(""); 
  const signUp = props.onUserSignup
  const history = useHistory()


const handleChange = e => {
  e.preventDefault()
  if(passwordRef.current.value !== confirmPasswordRef.current.value) {
    return setError("Passwords Do not Match!")

  }
  setLoading(true)
  signUp(emailRef.current.value, passwordRef.current.value)
  history.push("/")
}

  return (
    <div className="Signup_container">
      <div className="card">
        <div className="card_container">
          <h1> Sign up</h1>

          {error && <h3>{error} </h3>}
           <div className="details__info">
             <form onSubmit={handleChange}>
          <input className="inp" required ref={emailRef} type="email" placeholder="Email" />
          <input className="inp" required ref={passwordRef} type="password" placeholder="Password" />
          <input className="inp" required ref={confirmPasswordRef}  type="password" placeholder="Confirm Password" />
          <input className="chk_bx" type="checkbox" /> <label>Remember Me?</label>
          <input disabled={loading} type="submit" value="Sign Up" className="btn-signup" />
          </form>
          <p>Already have an account? <Link to="/login" style={{textDecoration:"underline" , color: "white"}}><span> Log in here </span> </Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
}



const mapDispatchToProps = dispatch => {
  return {
   onUserSignup : (email, password) =>{ 
     dispatch(userSignUp(email, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup);
