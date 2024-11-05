import { useEffect, useRef, useState } from 'react'
import { fade_in, fade_out, sleep } from '../../utils/helperFuncs'
import ProjectCard from '../../components/ProjectCard';
import { useNavigate } from 'react-router-dom';
import './Projects.css'

import DOBImg from '../../assets/DineOutBuddyMockup.png'
import REImg from '../../assets/RaccoonEyesMockup.png'
import HackImg from '../../assets/HackUTDMockup.png'

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
      img: DOBImg,
      desc: 'Utilized the MERN techstack to create a responsive mobile app to allow users to quickly find where to eat by generating custom food recommendations based on 20+ possible allergens and preferences.',
      ref: 'dineoutbuddy'
      // ref: 'https://github.com/acm-projects/DineOutBuddy/'
    },
    raccoon: {
      title: 'Raccoon Eyes',
      tech: 'React.js, Tailwind, Next.js, Chart.js',
      img: REImg,
      desc: 'Re-designed the main dashboard using React, Next.js, and Tailwind to allow for much faster at-a-glance comprehension for analyzing student eating patterns at university dining halls in order to help minimize food waste, increase sustainability, and improve overall student satisfaction.',
      ref: 'RaccoonEyes'
      // ref: 'https://raccooneyesai.com/'
    },
    hack: {
      title: 'HackUTD',
      tech: 'React Native, Node.js, MongoDB, Express.js',
      img: HackImg,
      desc: 'Coordinated with team members to update the yearly HackUTD website and create new product designs for each year\'s hackathon, hosting over 1,000 hackers and amassing 2,500+ applicants. Also co-developed a set of branding guidelines every year to facilitate all the previously mentioned activities, as well as our social media presence.',
      ref: 'HackUTD'
      // ref: 'https://ripple.hackutd.co/'
    },
    comingsoon: {
      title: 'More coming soon!',
      tech: '',
      img: '',
      desc: 'More projects are in the works and will be put up on display on this site once they are finished!\n\n\n\n',
      ref: 'https://www.github.com/jor-dango'
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
          <ProjectCard project={proj.comingsoon} navFunction={setPageNav} />
        </div>
      </section>
    </div>
  )
}

export default Projects