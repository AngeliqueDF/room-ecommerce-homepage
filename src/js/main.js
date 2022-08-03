import { Slider } from "./Slider";

const [sliderLeftButton, sliderRightButton] = Array.from(
	document.querySelectorAll(".slider-controls button")
);
const sliderControls = Slider(".slider-cta ul", ".slide");
sliderLeftButton.addEventListener("click", sliderControls.moveToPreviousSlide);
sliderRightButton.addEventListener("click", sliderControls.moveToNextSlide);

const mobileMenuToggle = document.querySelector("header button");
mobileMenuToggle.addEventListener("click", () => {
	document.body.classList.toggle("mobile-menu-open");
});
