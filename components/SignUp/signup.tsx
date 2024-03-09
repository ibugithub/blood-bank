'use client'

import React, {FormEvent, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignUp = () => {
  const  router = useRouter();
  const [formData, setFormData]= useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: ""
  })
  const [error, setError] = useState("") 

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const {email, first_name, last_name, password, password2} = formData;

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !first_name || !last_name || !password || !password2) {
      setError("All fields are required")
    }
    else {
      setError("")
      const req = await axios.post("http://127.0.0.1:8000/api/register/", formData)
      if(req.status === 201){
        router.push('/verifyemail')
        toast.success('Registration successful');
      }
    }
  }
  return (
    <>
      <h1 className='text-center pt-5 text-2xl mt-16'>Signup</h1>
      <div className='text-red-700 text-center '>{error}</div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center mt-10'>
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
          <input type="password" name='password2' placeholder='Confirm Password' className='p-1 text-red-900' value={password2} onChange={handleChange}/>
        </div>
        <div className='text-center mt-2'>
          <input type="submit" value='submit' className='bg-red-900 p-2'/>
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