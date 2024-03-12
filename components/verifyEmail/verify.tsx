'use client'

import React, {FormEvent, useState} from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const  VerifyEmail = () => {
  const [otpCode, setOtpCode] = useState("");
  const router = useRouter();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(e.target.value);
  }
  const handleSubmit = async(e:FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    const otp = {'otpCode': otpCode}
    const req = await axios.post("http://127.0.0.1:8000/api/verify-email", otp)
    if (req.status === 200) {
      router.push('/signin')
      toast.success("Email verified successfully")
    }
  };
  return (
    <div className='flex flex-col items-center mt-60 gap-2'>
      <h1>Please Enter the otp code that has been sent to your  email address</h1>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>
        <label htmlFor="otp">Enter your Otp code:</label>
        <input type="text" name='otp' id='otp' value={otpCode} onChange={handleChange} className='text-red-900 ' />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default VerifyEmail;