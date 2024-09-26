import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Hero from './pages/Hero/Hero'
import Projects from './pages/Projects/Projects'

function App() {
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