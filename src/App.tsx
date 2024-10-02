// import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import bg from './assets/mesh70.png'

import Hero from './pages/Hero/Hero'
import Projects from './pages/Projects/Projects'
import DineOutBuddy from './pages/DineOutBuddy/DineOutBuddy';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Placeholder from './pages/Placeholder';
// import AllProjects from './pages/AllProjects';

function App() {
  // document.body.style.backgroundImage = `url(${bg})`;
  // document.body.style.overflowY = 'hidden';
  // document.body.style.backgroundPosition = 'bottom';
  // document.body.style.backgroundRepeat = 'no-repeat';
  // document.body.style.backgroundAttachment = 'fixed';
  // document.body.style.backgroundSize = 'cover';
  // const navigate = useNavigate();

  // function go_home() {
  //   const navigate = useNavigate();
  //   navigate("/")
  // }

  return (
    <div style={{ width: '100vw', maxWidth: '100%', height: '100vh', backgroundImage: `url(${bg})`, backgroundColor: 'red', backgroundAttachment: 'fixed' }}>
      {/* <div className="logo" onClick={go_home}><a href="/" style={{opacity: '0'}}>ewe</a></div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/dineoutbuddy" element={<DineOutBuddy />} />
          <Route path="projects/*" element={<Placeholder />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App