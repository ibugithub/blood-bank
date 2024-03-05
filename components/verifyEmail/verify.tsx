import React from 'react';

const  VerifyEmail = () => {
  return (
    <div className='flex flex-col items-center mt-60 gap-2'>
      <form action="" className='flex flex-col items-center gap-3'>
        <label htmlFor="otp">Enter your Otp code:</label>
        <input type="text" name='otp' id='otp' />
      </form>
      <input type="submit" value="send" />
    </div>
  )
}

export default VerifyEmail;