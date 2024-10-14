import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="trial-container">
      <h1>Ready to take a free trial?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div className="form-box">
        <h2>Sign up for a free account</h2>
        <form>
          <div className="form-row">
            <input type="text" name="first_name" placeholder="First name" required />
            <input type="text" name="last_name" placeholder="Last name" required />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Email address" required />
            <input type="tel" name="phone" placeholder="Phone Number" />
          </div>
          <input type="password" name="password" placeholder="Create password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
