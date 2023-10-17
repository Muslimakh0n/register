// Bismillah

import React, { useEffect, useRef, useState } from "react";

const Login = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Login
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              ref={userRef}
              required
              placeholder="Enter your login..."
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              autoComplete="new-password"
              required
              placeholder="Enter your password..."
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

