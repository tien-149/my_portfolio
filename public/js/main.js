//This is where we build WORK page
// gsap.from("#work-background", {duration:1.5, opacity:0, y:300, stagger: 1.25, ease: "back"});
var colors = new Array(
	[62,35,255],
	[60,255,60],
	[255,35,98],
	[45,175,230],
	[255,0,255],
	[255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
	
	if ( $===undefined ) return;
	
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#project').css({
	 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
	  background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
	
	step += gradientSpeed;
	if ( step >= 1 )
	{
	  step %= 1;
	  colorIndices[0] = colorIndices[1];
	  colorIndices[2] = colorIndices[3];
	  
	  //pick two new target color indices
	  //do not pick the same as the current one
	  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
	  
	}
  }
  
  setInterval(updateGradient,10);
(function() {
	

	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		console.log("button clicked");
		//ad class or toggle to button and burger container
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu);
})();


// import { parse } from "path";

// this is a partially revealing module pattern - just a variation on what we've already done

// const myVM = (() => {
//     // get the user buttons and fire off an async DB query with Fetch
//     let userButtons = document.querySelectorAll(".u-link");
//     let lightBox = document.querySelector(".lightbox");
  
//     //create the social media list

//     // function renderSocialMedia(media) {
//     //   return `<ul class="u-social">
//     //     ${media.map(item => `<li>${item}</li>`).join(",")}
//     //     </ul>
//     //     `;
//     // }
  
//     function parseUserData(person) {
//       let targetDiv = lightBox.querySelector(".lb-content");
//       let targetImg = lightBox.querySelector("img");
  
//       let bioContent = `
//       <p>${person.Introduction}</p>
      
//       `;
  
//       targetDiv.innerHTML = bioContent;
//       targetImg.src = person.currentSrc;
//       lightBox.classList.add("show-lb");
//     }
  
//     function getUserData(e) {
//       e.preventDefault();
//       //1, 2 , or 3 depending on which anchor tag you click
//       let url = `/users/${this.getAttribute("href")}`,
//         currentImg = this.previousElementSibling.getAttribute("src");
  
//       //this goes and fetches the database content ( or an API endpoint)
//       // that's why it's called a fetch!
  
//       fetch(url)
//         .then(res => res.json())
//         .then(data => {
//           console.log(data);
//           data.currentSrc = currentImg;
//           parseUserData(data);
//         })
//         .catch(err => console.log(err));
//     }
  
//     userButtons.forEach(button => button.addEventListener("click", getUserData));
  
//     // wire up the lightbox close button
//     lightBox.querySelector(".close").addEventListener("click", function() {
//       lightBox.classList.remove("show-lb");
//     });
//   })();
  

