import { Slider } from "./Slider";

const sliderControls = Slider(".slider-cta ul", ".slide");
const sliderButtons = document.querySelectorAll(".slider-controls button");

const mobileMenuToggle = document.querySelector("header button");
mobileMenuToggle.addEventListener("click", () => {
	document.body.classList.toggle("mobile-menu-open");
});

sliderButtons.forEach((btn) => {
	if (Array.from(btn.classList).includes("previous-slide")) {
		btn.addEventListener("click", sliderControls.moveToPreviousSlide);
	} else if (Array.from(btn.classList).includes("next-slide")) {
		btn.addEventListener("click", sliderControls.moveToNextSlide);
	}
});
