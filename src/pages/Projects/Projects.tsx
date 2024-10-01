import { useEffect, useRef } from 'react'
import { fade_in } from '../../utils/helperFuncs'
import ProjectCard from '../../components/ProjectCard';
import './Projects.css'

import DineOutBuddyImg from '../../assets/DineOutBuddyMockup.png'

function Projects() {

  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fade_in(projectsRef);
  }, [])

  const proj = {
    dineout: {
      title: 'DineOutBuddy',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Utilized the MERN techstack to create a responsive mobile app to allow users to quickly find where to eat by generating custom food recommendations based on 20+ possible allergens and preferences.'
    },
    raccoon: {
      title: 'Raccoon Eyes',
      tech: 'React.js, Tailwind, Next.js, Chart.js',
      img: DineOutBuddyImg,
      desc: 'Re-designed the main dashboard using React, Next.js, and Tailwind to allow for much faster at-a-glance comprehension for analyzing student eating patterns at university dining halls in order to help minimize food waste, increase sustainability, and improve overall student satisfaction.'
    },
    hack: {
      title: 'HackUTD',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Coordinated with team members to update the yearly HackUTD website and create new product designs for each year\'s hackathon, hosting over 1,000 hackers and amassing 2,500+ applicants. Also co-developed a set of branding guidelines every year to facilitate all the previously mentioned activities, as well as our social media presence.'
    }
  }

  return (
    <section ref={projectsRef} id="projects">

      <div id="project-container">
        <ProjectCard project={proj.dineout} />
        <ProjectCard project={proj.raccoon} />
        <ProjectCard project={proj.hack} />
        <ProjectCard project={proj.dineout} />
      </div>
    </section>
  )
}

export default Projects