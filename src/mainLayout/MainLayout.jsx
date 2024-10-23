import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';


function MainLayout({children}) {
  return (
    <div className='mainLayout flex flex-row w-full h-screen'>
        <div className='navbar border border-blue-500 w-1/6 p-1 sm:p-3 md:p-5 bg-slate-800'>
            <Navbar></Navbar>
        </div>
        <div className='flex flex-col w-5/6 h-screen'>
            <Header></Header>
            <div className='content'>
                {children}
            </div>
        </div>

    </div>
  )
}

export default MainLayout