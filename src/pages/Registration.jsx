import React from 'react'
// import "../index.css"
// idk what and why i did it , my tailwind not working tho

const Registration = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-96'>
        <h1 className='text-3xl mb-4 text-white'>Register</h1>
        <form className='space-y-4'>
          <div>
            <label htmlFor='username' className='text-lg mb-2 block text-white'>UserName</label>
            <input type="text" className='w-full p-2 border rounded focus:outline-none focus:border-blue-500' />
          </div>
          <div>
            <label htmlFor="password" className='text-lg mb-2 block text-white'>Password</label>
            <input type="password" autoComplete='new-password' className='w-full p-2 border rounded focus:outline-none focus:border-blue-500' />
          </div>
          <button className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>Register</button>
        </form>
        <p className='mt-4 text-white'>Already have an account?</p>
        <a href="#" className='underline text-blue-500'>Log In</a>
      </div>
    </div>
  );
}

export default Registration;
