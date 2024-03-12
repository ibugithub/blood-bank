'use client'
import React from 'react';

const  Profile = () => {
  const name = typeof localStorage !== 'undefined' ? localStorage.getItem('name') || "" : "";
  const email = typeof localStorage !== 'undefined' ? localStorage.getItem('email') || "" : "";
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Email:{email}</p>
    </div>
  )
}

export default Profile;