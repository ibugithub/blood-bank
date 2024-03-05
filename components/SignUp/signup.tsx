import React from 'react';

const SignUp = () => {
  return (
    <>
      <h1 className='text-center pt-5 text-2xl mt-16'>Signup</h1>
      <form action="" className='flex flex-col gap-2 items-center mt-10'>
        <div>
          <input type="text" name='email' placeholder='Email' className='p-1'/>
        </div>
        <div>
          <input type="text" name='first_name' placeholder='First Name' className='p-1'/>
        </div>
        <div>
          <input type="text" name='last_name' placeholder='Last Name' className='p-1'/>
        </div>
        <div>
          <input type="password" name='password' placeholder='Password' className='p-1' />
        </div>
        <div>
          <input type="password" name='confirm_password' placeholder='Confirm Password' className='p-1'/>
        </div>
        <div className='text-center mt-2'>
          <input type="submit" value='submit' className='bg-red-900 p-2' />
        </div>
      </form>
      <div className='flex flex-col items-center mt-2 gap-3'>
        <h3>Or</h3>
        <div>
          <button className='bg-red-900 p-2'>SignUP with Google</button>
        </div>
        <div>
          <button className='bg-red-900 p-2 '>SignUP with Github</button>
        </div>
      </div>
    </>

  )
}

export default SignUp;