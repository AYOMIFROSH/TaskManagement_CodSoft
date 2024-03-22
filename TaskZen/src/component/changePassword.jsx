import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { token } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    // Add password validation here
    try {
      const response = await axios.post("http://localhost:3001/changePassword/:token", {
        token,
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      // Check if error is a network error
      if (!error.response) {
        setMessage("Network error. Please try again.");
      } else {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <h4>Change Password</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
