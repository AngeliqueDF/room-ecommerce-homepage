import { Slider } from "./Slider";

const [sliderLeftButton, sliderRightButton] = Array.from(
	document.querySelectorAll(".slider-controls button")
);
const sliderControls = Slider(".slider-cta ul", ".slide");
sliderLeftButton.addEventListener("click", sliderControls.moveToPreviousSlide);
sliderRightButton.addEventListener("click", sliderControls.moveToNextSlide);

