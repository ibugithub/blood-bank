'use client'

import React, {useState} from 'react';

const SignUp = () => {
  const [formData, setFormData]= useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: ""
  })

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log("I am in the handle change");
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const {email, first_name, last_name, password, confirm_password} = formData;
  return (
    <>
      <h1 className='text-center pt-5 text-2xl mt-16'>Signup</h1>
      <form action="" className='flex flex-col gap-2 items-center mt-10'>
        <div>
          <input type="text" name='email' value={email} placeholder='Email' className='p-1 text-red-900' onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name='first_name' placeholder='First Name' className='p-1 text-red-900' value={first_name} onChange={handleChange}/>
        </div>
        <div>
          <input type="text" name='last_name' placeholder='Last Name' className='p-1 text-red-900' value={last_name} onChange={handleChange}/>
        </div>
        <div>
          <input type="password" name='password' placeholder='Password' className='p-1 text-red-900' value={password} onChange={handleChange} />
        </div>
        <div>
          <input type="password" name='confirm_password' placeholder='Confirm Password' className='p-1 text-red-900' value={confirm_password} onChange={handleChange}/>
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