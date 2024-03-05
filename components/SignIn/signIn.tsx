import React from 'react';

const SignIn = () => {
  return (
    <>
      <h1 className='text-center pt-5 text-2xl mt-32'>Signin</h1>
      <form action="" className='flex flex-col gap-2 items-center mt-10'>
        <div>
          <input type="text" name='email' placeholder='Email' className='p-1' />
        </div>
        <div>
          <input type="password" name='password' placeholder='Password' className='p-1' />
        </div>
        <div className='text-center mt-2'>
          <input type="submit" value='submit' className='bg-red-900 p-2' />
        </div>
      </form>
    </>
  )
}

export default SignIn;