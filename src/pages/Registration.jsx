// Bismillah
import React, { useEffect, useRef, useState } from 'react';

const loginRgx = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwdRgx = /^[a-zA-Z0-9]{4,30}$/;
const nameRgx = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const phoneRgx = /^[0-9]{10}$/;

const Registration = () => {

  const [login, setLogin] = useState('');
  // to check rgx
  const [loginValid, setLoginValid] = useState(false);

  const [pwd, setPwd] = useState('');
  const[pwdValid, setPwdValid] = useState(false);

  const [name, setName] = useState('');
  const[nameValid, setNameValid] =useState(false);

  const [phone, setPhone] = useState('');
  const[phoneValid, setPhoneValid] =useState(false);
  
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(()=>{
    const result = loginRgx.test(login);
    console.log(result);
    setLoginValid(result)
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-96'>
        <h1 className='text-3xl mb-4 text-white'>Register</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username' className='text-lg mb-2 block text-white'>
              Login
            </label>
            <input
              type='text'
              className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
              ref={userRef}
              required
              placeholder='Enter your login...'
              onChange={(e) => setLogin(e.target.value)}
              pattern={loginRgx}
              // onSubmit={handleSubmit} idk, o my goodneeeeeeeeeeeesssssssss
            />
          </div>
          <div>
            <label htmlFor='name' className='text-lg mb-2 block text-white'>
              Name
            </label>
            <input
              type='text'
              className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
              required
              pattern={nameRgx}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name...'
            />
          </div>
         
          
          <div>
            <label htmlFor='phone' className='text-lg mb-2 block text-white'>
              Phone Number
            </label>
            <input
              type='tel'
              className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
              required
              pattern={phoneRgx}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter your phone number...'
            />
          </div>
           <div>
            <label htmlFor='password' className='text-lg mb-2 block text-white'>
              Password
            </label>
            <input
              type='password'
              autoComplete='new-password'
              className='w-full p-2 border rounded focus:outline-none focus:border-blue-500'
              required
              placeholder='Enter your password...'
              pattern={pwdRgx}
              onChange={(e) => setPwd (e.target.value)}
            />
          </div>
          <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
            Register
          </button>
        </form>
        <p className='mt-4 text-white'>Already have an account?</p>
        <a href='#' className='underline text-blue-500'>
          Log In
        </a>
      </div>
    </div>
  );
};

export default Registration;
