import { useEffect, useRef, useState } from 'react'
import { fade_in, fade_out, sleep } from '../../utils/helperFuncs'
import ProjectCard from '../../components/ProjectCard';
import './Projects.css'

import DineOutBuddyImg from '../../assets/DineOutBuddyMockup.png'
import { useNavigate } from 'react-router-dom';
// import DineOutBuddy from '../DineOutBuddy/DineOutBuddy';

function Projects() {

  const projectsRef = useRef<HTMLDivElement>(null);
  // const transitionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [pageNav, setPageNav] = useState<string>("");

  useEffect(() => {
    fade_in(projectsRef);
  }, [])

  if (pageNav !== "") {
    fade_out(projectsRef);

    // const transitionElement = transitionRef.current;
    // sleep(50).then(() => {
    //   transitionElement!.style.opacity = "1";
    //   transitionElement!.style.transform = "translate(0, 0)";     
    // })

    sleep(600).then(() => {
      navigate(pageNav);
      setPageNav("");
    })
  }

  const proj = {
    dineout: {
      title: 'DineOutBuddy',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Utilized the MERN techstack to create a responsive mobile app to allow users to quickly find where to eat by generating custom food recommendations based on 20+ possible allergens and preferences.',
      ref: 'dineoutbuddy'
    },
    raccoon: {
      title: 'Raccoon Eyes',
      tech: 'React.js, Tailwind, Next.js, Chart.js',
      img: DineOutBuddyImg,
      desc: 'Re-designed the main dashboard using React, Next.js, and Tailwind to allow for much faster at-a-glance comprehension for analyzing student eating patterns at university dining halls in order to help minimize food waste, increase sustainability, and improve overall student satisfaction.',
      ref: 'RaccoonEyes'
    },
    hack: {
      title: 'HackUTD',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Coordinated with team members to update the yearly HackUTD website and create new product designs for each year\'s hackathon, hosting over 1,000 hackers and amassing 2,500+ applicants. Also co-developed a set of branding guidelines every year to facilitate all the previously mentioned activities, as well as our social media presence.',
      ref: 'HackUTD'
    }
  }

  return (
    <div>
      {/* <div id="transition-cover" ref={transitionRef}></div> */}
      <section ref={projectsRef} id="projects-container">
        <div id="projects">
          <ProjectCard project={proj.dineout} navFunction={setPageNav} />
          <ProjectCard project={proj.raccoon} navFunction={setPageNav} />
          <ProjectCard project={proj.hack} navFunction={setPageNav} />
          <ProjectCard project={proj.dineout} navFunction={setPageNav} />
        </div>
      </section>
    </div>
  )
}

export default Projects