import React, { useEffect, useRef } from 'react'
import { fade_in } from '../../components/helperFuncs'

function Projects() {

  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fade_in(projectsRef);
  },[])

  return (
    <div ref={projectsRef}>
      <p className="fade-in">weqwe</p>
    </div>
  )
}

export default Projects