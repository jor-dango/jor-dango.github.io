"use strict"

// const Parallax = require('parallax-js');
// import Parallax from 'parallax-js';
// var scene = document.getElementById('parallax-container');
// var parallaxInstance = new Parallax(scene);

async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function fade_in(page) {
  const elements = document.getElementById(page).getElementsByClassName("fade-in");
		
  let offset_ms = 0;
  for (let i = 0; i < elements.length; i++) {
    offset_ms += 100;
    sleep(offset_ms).then(() => {
      elements.item(i).style.opacity = "1";
      elements.item(i).style.transform = "translate(0, -2rem)";
    });
  }
  // document.getElementById("pfp").style.opacity = "1";
  // document.getElementById("pfp").style.transform = "translate(0, -2rem)";
}

function fade_out(page) {
  const elements = document.getElementById(page).getElementsByClassName("fade-in");
		
  let offset_ms = 0;
  for (let i = 0; i < elements.length; i++) {
    offset_ms += 100;
    sleep(offset_ms).then(() => {
      elements.item(i).style.opacity = "0";
      elements.item(i).style.transform = "translate(0, 2rem)";
    });
  }
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
	sleep(delay_ms).then(() => {fade_in("hero")});

	// Hide initial loading screen to make the page clickable after the animation ends
	delay_ms += 650;
	sleep(delay_ms).then(() => {
		document.getElementById("initBG").style.display = "none";
    document.getElementById("pfp").classList.remove("fade-in");
	});
}

function goto_work() {
  
}