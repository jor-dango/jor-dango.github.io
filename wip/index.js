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
  sleep(500).then(() => {
  })

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

function test() {
  console.log(document.getElementById("bepe").style.color);
	if (document.getElementById("bepe").style.color == "rgb(0, 153, 0)") {
		document.getElementById("bepe").style.color = "#990000";
	}
	else {
		document.getElementById("bepe").style.color = "#009900";
	}

}

function decreaseSize() {
  Static.width *= 0.5;
  console.log(Static.width);

  document.getElementById("childdiv").style.width = Static.width + "%";
  console.log(getComputedStyle(document.getElementById("circle1")).boxShadow)
}

function redhat() {
  Static.top += 5;
  document.getElementById("pfp").style.top = Static.top + "%";
  document.getElementById("a").innerHTML = Static.top;
}

function dmsans() {
  Static.left += 5;
  document.getElementById("pfp").style.left = Static.left + "%";
  document.getElementById("b").innerHTML = Static.left;
}

function europa() {
  document.getElementById("bio").style.fontFamily = "EuropaRegular";
  Static.spacing += 20;
  document.getElementById("bio").style.lineHeight = Static.spacing + "%";

  // alert(document.getElementById("bio").style.lineHeight);
}