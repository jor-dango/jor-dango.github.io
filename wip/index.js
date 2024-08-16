// const Parallax = require('parallax-js');
// import Parallax from 'parallax-js';
// var scene = document.getElementById('hero');
// var parallaxInstance = new Parallax(scene);

class Static {
  static width = 100;
  static top = 0;
  static left = 0;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function init() {
  
  // Animate circles initially
  sleep(1000).then(() => { document.getElementById("circle1").style.borderWidth = "250vh"; });
  sleep(1100).then(() => { document.getElementById("circle2").style.borderWidth = "250vh"; });
  sleep(1200).then(() => { document.getElementById("circle3").style.borderWidth = "250vh"; });

  // Reveal the page
  sleep(1400).then(() => {
    document.getElementById("initBG").style.display = "none"; 
    for (let i = 0; i < document.getElementsByClassName("initCircle").length; i++) {
      document.getElementsByClassName("initCircle").item(i).style.width = "250vh";
    }
  })
  
  // Hide all circles to make the page clickable after the animation ends
  sleep(2200).then(() => { 
    for (let i = 0; i < document.getElementsByClassName("initCircle").length; i++) {
      document.getElementsByClassName("initCircle").item(i).style.display = "none";
    }
  });
}