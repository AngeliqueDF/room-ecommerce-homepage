const mobileMenuToggle = document.querySelector("header button");
mobileMenuToggle.addEventListener("click", (e) => {
	document.body.classList.toggle("mobile-menu-open");
});

const slider = document.querySelector(".slider-cta ul");
const slides = document.querySelectorAll(".slide");
const sliderButtons = document.querySelectorAll(".slider-controls button");
const [leftButton, rightButton] = Array.from(sliderButtons);
const viewportWidth = window.innerWidth;

leftButton.addEventListener("click", () => {
	const itemIndex = Math.floor(slider.scrollLeft / viewportWidth);
	const previousItemIndex = itemIndex - 1;

	if (previousItemIndex < 0) {
		slider.scrollTo({
			left: (slides.length - 1) * viewportWidth,
			behavior: "smooth",
		});
		slides[slides.length - 1].focus();
	} else {
		slider.scrollTo({
			left: viewportWidth * previousItemIndex,
			behavior: "smooth",
		});

		slides[previousItemIndex].focus();
	}
});

rightButton.addEventListener("click", () => {
	const itemIndex = Math.floor(slider.scrollLeft / viewportWidth);
	const nextItemIndex = itemIndex + 1;

	if (nextItemIndex >= slides.length) {
		slider.scrollTo({ left: 0, behavior: "smooth" });
		slides[0].focus();
	} else {
		slider.scrollTo({
			left: viewportWidth * nextItemIndex,
			behavior: "smooth",
		});
		slides[nextItemIndex].focus();
	}
});
