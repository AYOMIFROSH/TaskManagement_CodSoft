import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      alert('Please Enter Email!')
      ;
    }
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/forgot-password", {
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h2 style={{fontStyle: 'italic', fontSize: '2rem', fontFamily:'cursive'}}>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email"/>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
            style={{border: 'none', margin: '1%'}}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading} style={{border: 'none', cursor: 'pointer'}}>
            {isLoading ? "Sending..." : "Submit"}
          </button>
          <Link to="/login">Go Back To Login</Link>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
