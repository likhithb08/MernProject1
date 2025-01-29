/* Navbar code */import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Finance Tracker</h1>
      <div>
        <Link className="mr-4" to="/dashboard">Dashboard</Link>
        <Link className="mr-4" to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
