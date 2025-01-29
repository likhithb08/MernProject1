/* Signup page code */import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup Successful! You can now login.");
    navigate("/login");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Signup</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          className="block w-full p-2 mb-2 border rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
