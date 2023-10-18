// Bismillah;
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Registration = () => {
  const [login, setLogin] = useState("");

  const [pwd, setPwd] = useState("");

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const location = useLocation();
  console.log(location, "sss");
  const userRef = useRef();

  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(success);
    // setSuccess(true);
    try {
      const response = await axios.post(
        "https://v2.u11437.xvest5.ru/api/user/registration",
        JSON.stringify({ name, phoneNumber: phone }),

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      if (response.status !== true) {
        throw new Error("Something went wrong");
      } else {
        return location;
      }
    } catch (err) {
      // console.error(err.messsage, "asdfg");/
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {success ? (
        <p>success this is userPage</p>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl mb-4 text-white">Register</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="text-lg mb-2 block text-white"
              >
                Login
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                ref={userRef}
                required
                placeholder="Enter your login..."
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name" className="text-lg mb-2 block text-white">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-lg mb-2 block text-white">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number..."
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-lg mb-2 block text-white"
              >
                Password
              </label>
              <input
                type="password"
                autoComplete="new-password"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
                required
                placeholder="Enter your password..."
                onChange={(e) => setPwd(e.target.value)}
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Register
            </button>
          </form>
          <p className="mt-4 text-white">Already have an account?</p>
          <a href="#" className="underline text-blue-500">
            Log In
          </a>
        </div>
      )}
    </div>
  );
};

export default Registration;
