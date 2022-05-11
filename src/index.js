import React from 'react'
import ReactDOM from 'react-dom'

import './vendor/normalize.css'
import './vendor/bootstrap.bundle.min'
import './vendor/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { store } from './store'

import App from './App'
import reportWebVitals from './reportWebVitals'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
