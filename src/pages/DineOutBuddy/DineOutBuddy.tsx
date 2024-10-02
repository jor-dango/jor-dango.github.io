import { useEffect, useRef } from 'react';
import './DineOutBuddy.css'
import { fade_in } from '../../utils/helperFuncs';
import DineOutBuddyImg from '../../assets/DineOutBuddyMockup.png'

function DineOutBuddy() {

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fade_in(projectRef);
  }, [])

  return (
    <div className="project-container" ref={projectRef}>
      <div className="project">
        <div className="project-header">
          <div className="project-header-text">
            <h1 className='fade-in' style={{fontSize: 'clamp(3rem, 5vw, 6rem)'}}>DineOutBuddy</h1>
            <p className='fade-in'>Frontend Developer</p>
          </div>
          <div className="project-header-img fade-in">
            <img style={{maxWidth: '100%'}} src={DineOutBuddyImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DineOutBuddy