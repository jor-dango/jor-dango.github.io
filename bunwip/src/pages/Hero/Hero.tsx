import React from 'react'
import fontWeights from '../../components/constants'
import './fonts.css'
import './init.css'
import './body.css'

function Hero() {
  async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function init() {

    let delay_ms = -10000;

    delay_ms += 800;
    sleep(delay_ms).then(() => {
      document.getElementById("loader").style.opacity = 0.0;
    })

    // Minimize the BG div for a smooth reveal animation
    delay_ms += 700;
    sleep(delay_ms).then(() => {
      document.getElementById("initBG").style.width = "0px";
      document.getElementById("initBG").style.backgroundColor = "rgba(255, 255, 255, 0)";
    })

    // Reveal the page
    delay_ms += 50;
    sleep(delay_ms).then(() => {
      document.getElementById("initBG").style.transition = "width .8s";
      document.getElementById("initBG").style.width = "250vh";
    });

    // Reveal initial elements
    delay_ms += 100;
    sleep(delay_ms).then(() => { fade_in("hero") });

    // Hide initial loading screen to make the page clickable after the animation ends
    delay_ms += 650;
    sleep(delay_ms).then(() => {
      document.getElementById("initBG").style.display = "none";
      document.getElementById("pfp").classList.remove("fade-in");
    });
  }

  function goto_work() {

  }

  return (
    <div onLoad={init}>
      <div id="initBG">
        <div id="loader"></div>
      </div>

      <section id="hero">
        <div className="parallax-layer" id="hero-layer-1" data-depth="0.2"></div>
        <div className="parallax-layer" id="hero-layer-2">
          <div id="bio-container">
            <h1 className="fade-in" id="title">
              {/* 👋 Hi, I'm Jordan! */}
              <span style={{ fontWeight: fontWeights.semibold }}>
                {/* I’m an aspiring software developer with a passion for UI/UX design. */}
              </span>
            </h1>
            <h2 className="fade-in" id="bio">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </h2>
          </div>
          {/* <a className="fade-in pfp"></a> */}
          {/* <a className="pfp" href="https://www.linkedin.com/in/jordan-e-tan/" target="_blank" rel="noopener noreferrer"></a> */}
          <a className="fade-in pfp"></a>
        </div>
        <a id="worklink" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: 'fit-content' }} onClick={goto_work}>
          {/* div used to wrap since without it, the anchor duplicates itself?? */}
          <div>
            <h2 style={{ fontWeight: fontWeights.semibold, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>Check out my work! &nbsp
              <svg style={{ backgroundColor: "rgba(255,255,255,0)", width: "clamp(1.2rem, 1.25vw, 1.5rem)" }} viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.0002 15.0001V9.00005M15.0002 9.00005H9.00019M15.0002 9.00005L9.00019 14.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </h2>
          </div>
        </a>
      </section>
    </div >
  )
}

export default Hero

const styles = {

}