'use client'
import React, {useState, useEffect } from 'react';
import { getCookie } from 'cookies-next';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name : "",
    email: "",
    access_token: "",
    refresh_token: ""
  })

  useEffect(() => {
    const storedName = localStorage.getItem("name") ?? "";
    const storedEmail = localStorage.getItem("email") ?? "";
    const storedAccessToken = localStorage.getItem("access_token") ?? "";
    const stored_refresh_token = getCookie("refresh_token") ?? "";
    setUserInfo({
      name: storedName,
      email: storedEmail,
      access_token: storedAccessToken,
      refresh_token: stored_refresh_token
    })
  },[])

  return (
    <>
      <h1 className='text-center p-3'>Profile</h1>
      <div className='flex flex-col items-center mt-20 gap-2 '>
        <p>Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
      </div>
      <div className='px-4 w-[80%] mx-auto overflow-x-auto mb-10'>Access Token: {userInfo.access_token}</div>
      <div className='px-4 w-[80%] mx-auto overflow-x-auto'>Refresh Token: {userInfo.refresh_token}</div>
    </>
  )
}

export default Profile;