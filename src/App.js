import React from 'react'
import './App.scss'
import SwitchRoutes from './routes/SwitchRoutes'
import Navbar from './components/Navbar/Navbar'
import AppAlert from './components/AppAlert/Alert'

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <SwitchRoutes />
      </div>
      <AppAlert />
    </>

  )
}

export default App
