'use client'

import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password } = formData;
  const [errors, setError] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
    }
    else {
      setError("");
      const req = await axios.post("http://127.0.0.1:8000/api/login", formData)
      if (req.status === 200) {
        const response = req.data
        localStorage.setItem("name", JSON.stringify(response.full_name));
        localStorage.setItem("email", JSON.stringify(response.email));
        localStorage.setItem("access_token", JSON.stringify(response.access_token));

        const cookieName = "refresh_token";
        const cookieValue = response.refresh_token;
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 1); 
        document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/; SameSite=strict`;
        console.log('The response is', req)
        router.push('/profile')
        toast.success('Login successful')

      }
      else {
        setError("email or password is worng")
      }
    }
  }
  return (
    <>
      <h1 className='text-center pt-5 text-2xl mt-32'>Sign in</h1>
      <div className="text-red-700 text-center">{errors}</div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center mt-10'>
        <div>
          <input type="text" name='email' placeholder='Email' className='p-1 text-red-900' value={email} onChange={handleChange} />
        </div>
        <div>
          <input type="password" name='password' placeholder='Password' className='p-1 text-red-900' value={password} onChange={handleChange} />
        </div>
        <div className='text-center mt-2'>
          <input type="submit" value='submit' className='bg-red-900 p-2' />
        </div>
      </form>
    </>
  )
}

export default SignIn;