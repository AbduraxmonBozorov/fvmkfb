import React from 'react'
import { Link } from 'react-router-dom'

function DropDown() {

  function handleLoginOut(){
    localStorage.removeItem("authToken");
  }

  return (
    <div className='flex flex-col bg-white shadow'>
        <Link className='p-2  hover:bg-slate-100' to="">Profile</Link>
        <Link className='p-2  hover:bg-slate-100' to="/login" onClick={handleLoginOut}>Log out</Link>
    </div>
  )
}

export default DropDown