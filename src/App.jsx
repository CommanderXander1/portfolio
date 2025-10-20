import { useState } from 'react'
import './App.css'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navigation/>
      <Header/>
      <Languages/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
