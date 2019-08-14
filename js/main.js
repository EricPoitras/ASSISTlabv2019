var btn_github = document.querySelector(".fa-github");
var btn_twitter = document.querySelector(".fa-twitter");
var btn_contact = document.getElementById("btn_contact");
var btn_about = document.getElementById("btn_about");
var btn_bars = document.getElementById("btn_bars");
var area_sidebar = document.getElementById("area_sidebar");
var btn_close = document.getElementById("btn_close");

btn_github.addEventListener("click", function() {
	window.open("https://github.com/EricPoitras", "_blank");
});
btn_twitter.addEventListener("click", function() {
	window.open("https://twitter.com/profpoitras", "_blank");
});
btn_contact.addEventListener("click", function() {
	document.location.href = "mailto:eric.poitras@utah.edu";
});
btn_about.addEventListener("click", function() {
	window.open("https://faculty.utah.edu/u0986438-Eric_G._Poitras/research/index.hml", "_blank");
});
btn_bars.addEventListener("click", function() {
	if (area_sidebar.style.display == "none") {
		area_sidebar.style.width = "300px";
		area_sidebar.style.display = "block";
	} else {
		area_sidebar.style.width = "0px";
		area_sidebar.style.display = "none";
	}
});
btn_close.addEventListener("click", function() {
	if (area_sidebar.style.display == "none") {
		area_sidebar.style.width = "300px";
		area_sidebar.style.display = "block";
	} else {
		area_sidebar.style.width = "0px";
		area_sidebar.style.display = "none";
	}
});
