import React from 'react';
import circleUser from "../assets/images/circle-user-solid.svg";

function Header() {
  return (
    <div className='header w-full border shadow h-[80px] flex flex-row items-center justify-end p-5 box-border' >
        <div className='user flex flex-row items-center gap-2'>
            <div className="fish flex flex-col items-end justify-center">
                <p className='text-md font-semibold'>Ism Familiyasi</p>
                <p className='text-sm'>Lavozimi</p>
            </div>
            <div className='userImage w-12 h-12 border rounded-full'>
                <img src={circleUser} className='w-full h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header