class Static {
  static width = 100;
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
  sleep(1300).then(() => {
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