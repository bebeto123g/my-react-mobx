import React from 'react'
import { observer } from 'mobx-react'

import './Navbar.scss'
import Alert from '../../store/Alert'
import Auth from '../../store/Auth'
import Modal from '../../store/Modal'

import Navigation from './Navigation'

const Navbar = observer(() => {
    const alertHandler = () => {
        Alert.show({
            variant: 'danger',
            message: 'Сообщение из навбара',
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    LOGOTYPE
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <Navigation />
                </div>
                <button
                    onClick={alertHandler}
                    className="btn btn-outline-success"
                >
                    Алерт
                </button>
                <button
                    onClick={() => Auth.toggle()}
                    className="btn btn-outline-warning"
                >
                    Авторизация
                </button>
                <button
                    type="button"
                    className="btn btn-outline-info"
                    onClick={() => Modal.show()}
                >
                    Модал
                </button>
            </div>
        </nav>
    )
})

export default Navbar
