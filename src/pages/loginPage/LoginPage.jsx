import React from "react";
import DInput from "../../components/DInput/DInput";
import "./styles.css";

const LoginPage = () => {
  return (
    <div className="signUp">
      <h1 className="p-3">Sign Up</h1>

      <div className="col-md-12 offset-md-2">
        <div className="row ">
          <DInput
            type="text" 
            label="First name"
            placeholder="First name" />
          <DInput 
            type="text" 
            label="Last name" 
            placeholder="Last name" />
          <DInput
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <DInput
            type="password"
            label="Password"
            placeholder="Enter password"
          />
          <button className="btn btn-primary" type="submit">
            Sign Up
          </button>
        </div>
        <p>
          Already registered <a href="">sign in?</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
