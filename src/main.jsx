import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./index.scss"
import { AppProvider } from './utils/Context.jsx'
import {BrowserRouter as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>
    ,
)
