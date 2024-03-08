'use client'

import React, {FormEvent, useState} from 'react';
import axios from 'axios';

const  VerifyEmail = () => {
  const [otpCode, setOtpCode] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOtpCode(e.target.value);
  }
  const handleSubmit = (e:FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    console.log("I am in handle submit");
  };
  return (
    <div className='flex flex-col items-center mt-60 gap-2'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>
        <label htmlFor="otp">Enter your Otp code:</label>
        <input type="text" name='otp' id='otp' value={otpCode} onChange={handleChange} className='text-red-900 ' />
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default VerifyEmail;