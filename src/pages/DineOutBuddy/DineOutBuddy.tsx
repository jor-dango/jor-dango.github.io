import { useEffect, useRef } from 'react';
import './DineOutBuddy.css'
import { fade_in } from '../../utils/helperFuncs';
import DineOutBuddyImg from '../../assets/DineOutBuddyMockup.png'
import ProjectHeader from '../../components/ProjectHeader';
// import fontWeights from '../../utils/constants';

function DineOutBuddy() {

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fade_in(projectRef);
  }, [])

  return (
    <div className="project-container" ref={projectRef}>
      <div className="project">
        <ProjectHeader title="DineOutBuddy" role="Frontend Developer" img={DineOutBuddyImg} />
        <section className="project-section">
          <div><h2>01. The Problem</h2></div>
          <p>eoqiwjeoqiwjoeiq</p>
        </section>
      </div>
    </div>
  )
}

export default DineOutBuddy