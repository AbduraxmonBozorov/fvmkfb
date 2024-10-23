import React from 'react'
import MainLayout from './mainLayout/MainLayout'
import Dashboard from './pages/rahbariyat/dashboard'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Dashboard></Dashboard>
          </MainLayout>
        }/>
      </Routes>
    </div>
    
  )
}

export default App