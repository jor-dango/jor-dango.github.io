import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import bg from './assets/mesh70.png'

import Hero from './pages/Hero/Hero'
import Projects from './pages/Projects/Projects'

function App() {
  document.body.style.backgroundImage = `url(${bg})`;
  // const navigate = useNavigate();

  function go_home() {
    const navigate = useNavigate();
    navigate("/")
  }

  return (
    <div>
      {/* <div className="logo" onClick={go_home}><a href="/" style={{opacity: '0'}}>ewe</a></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App