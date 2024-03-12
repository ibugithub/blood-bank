'use client'
import React from 'react';

const Profile = () => {
  const name = typeof localStorage !== 'undefined' ? localStorage.getItem('name') || "" : "";
  const email = typeof localStorage !== 'undefined' ? localStorage.getItem('email') || "" : "";
  return (
    <>
      <h1 className='text-center p-3'>Profile</h1>
      <div className='flex flex-col items-center mt-20 gap-2'>
        <p>Name: {name}</p>
        <p>Email:{email}</p>
      </div>
    </>
  )
}

export default Profile;