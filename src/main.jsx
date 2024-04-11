import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import Hero from './components/Hero'
import './assets/Styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Hero/>
  </React.StrictMode>,
)
