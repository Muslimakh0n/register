import React from 'react'
// import "../index.css"
// idk what and why i did it , my tailwind not working tho

const  Registration = () => {
  return (
    <div className=' h-screen w-screen '>
      <div className=' mx-auto h-[600px] w-[500px] p-4 bg-neutral-500'>
        <h1 className=' text-[30px] mb-4'>Register</h1>
        <form>
          <label htmlFor='username' className='text-2xl mb-2 block'>UserName</label>
          <input type="text" className='w-full mb-3'/>
          <label htmlFor="password" className='text-2xl mb-2 block'>Password</label>
          <input type="password" autoComplete='new-password' className='w-full mb-3' />
          <button>Send</button>
        </form>
        <p>Already have an account?</p>
        <a href="#" className='underline'>Log In</a>
      </div>
    </div>
  )
}

export default Registration