//This is where we build WORK page
(function() {
	console.log("JavaScrip is linked up");

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



