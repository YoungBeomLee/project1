document.addEventListener("DOMContentLoaded", function () {
const gnbAnc = document.querySelectorAll(".skip_menu");


gnbAnc.forEach((el) => {
	el.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
	});
});
});