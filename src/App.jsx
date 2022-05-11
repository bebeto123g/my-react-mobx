import React from 'react'

import SwitchRoutes from './routes/SwitchRoutes'

import Navbar from './components/Navbar/Navbar'
import AppAlert from './components/AppAlert/Alert'

import './App.scss'
import Modal from './components/Modal/Modal'

function App() {
    return (
        <>
            <Navbar />
            <main id="app">
                <SwitchRoutes />
            </main>
            <Modal />
            <AppAlert />
        </>
    )
}

export default App
