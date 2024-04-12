import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import Hero from './components/Hero'
import './assets/Styles/main.scss'
import Projects from './components/Projects'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Hero/>
    <Projects/>
  </React.StrictMode>,
)
