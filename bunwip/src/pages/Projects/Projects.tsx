import React, { useEffect, useRef } from 'react'
import { sleep, fade_in, fade_out } from '../../utils/helperFuncs'
import ProjectCard from '../../components/ProjectCard';
import fontWeights from '../../utils/constants';
import './Projects.css'
import { useNavigate } from 'react-router-dom';

import DineOutBuddyImg from '../../assets/DineOutBuddyMockup.png'

function Projects() {

  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fade_in(projectsRef);
  }, [])

  function goto_projects() {
    fade_out(projectsRef);
    sleep(600).then(() => {
      navigate("/");
    })
  }

  const projects = {
    dineoutbuddy: {
      title: 'DineOutBuddy',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Utilized the MERN techstack to create a responsive mobile app to allow users to quickly find where to eat by generating custom food recommendations based on 20+ possible allergens and preferences.'
    },
    raccooneyes: {
      title: 'Raccoon Eyes',
      tech: 'React.js, Tailwind, Next.js, Chart.js',
      img: DineOutBuddyImg,
      desc: 'Re-designed the main dashboard using React, Next.js, and Tailwind to allow for much faster at-a-glance comprehension for analyzing student eating patterns at university dining halls in order to help minimize food waste, increase sustainability, and improve overall student satisfaction.'
    },
    hackutd: {
      title: 'HackUTD',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: DineOutBuddyImg,
      desc: 'Coordinated with team members to update the yearly HackUTD website and create new product designs for each year\'s hackathon, hosting over 1,000 hackers and amassing 2,500+ applicants. Also co-developed a set of branding guidelines every year to facilitate all the previously mentioned activities, as well as our social media presence.'
    }
  }

  return (
    <section ref={projectsRef} id="projects">
      <header id="intro">

        <a className='fade-in' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: 'fit-content' }} href="#" onClick={goto_projects}>
          {/* div used to wrap since without it, the anchor duplicates itself?? */}
          <div>
            <h2 style={{ fontWeight: fontWeights.semibold, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <svg style={{ backgroundColor: "rgba(255,255,255,0)", width: "clamp(1.2rem, 1.25vw, 1.5rem)" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.00019 15.0001V9.00005M9.00019 9.00005H15.0002M9.00019 9.00005L15.0002 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              &nbsp;Go back</h2>
          </div>
        </a>
        {/* This div is just to make the whole thing wide enough I'm in pain */}
        <div style={{ height: '1px' }}>
          <h2 style={{ opacity: '0' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </h2>
        </div>
      </header>

      <div id="project-container">
        <ProjectCard title={projects.dineoutbuddy.title} img={projects.dineoutbuddy.img} tech={projects.dineoutbuddy.tech} desc={projects.dineoutbuddy.desc} />
        <ProjectCard title={projects.raccooneyes.title} img={""} tech={projects.raccooneyes.tech} desc={projects.raccooneyes.desc} />
        <ProjectCard title={projects.hackutd.title} img={""} tech={projects.hackutd.tech} desc={projects.hackutd.desc} />
        <ProjectCard title={projects.dineoutbuddy.title} img={""} tech={projects.dineoutbuddy.tech} desc={projects.dineoutbuddy.desc} />
      </div>
    </section>
  )
}

export default Projects