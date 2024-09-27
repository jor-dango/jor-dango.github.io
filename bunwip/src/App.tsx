import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import bg from './assets/mesh70.png'

import Hero from './pages/Hero/Hero'
import Projects from './pages/Projects/Projects'

function App() {
  document.body.style.backgroundImage = `url(${bg})`

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App