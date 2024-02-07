import React from 'react'
import Navbar from './Navbar'

import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './Actions/index';




function Contact() {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.myFirstReducer.users)

  
  return (
    <>
    <Navbar/>
    <>
    <div>
      <h1><center>Fetch-API using Saga</center></h1>
      <div className='btn-container'><center><button className='buttons' onClick={()=>dispatch(getUsersFetch())}>Get Users</button></center></div>
      <center><div className='content-1'><h2>Following are the users details:</h2></div> <div className='content-2'>{users.map((user => (<div className='content-3'>{user.name} has the email-id: {user.email}</div>)))}</div></center>
    </div>
    </>
    </>
  )
}

export default Contact