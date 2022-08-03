export const Slider = function (sliderSelector, slidesSelector) {
	const slider = document.querySelector(sliderSelector);
	const slides = document.querySelectorAll(slidesSelector);
	const viewportWidth = window.innerWidth;

	return {
		moveToPreviousSlide: function () {
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
		},
		moveToNextSlide: function () {
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
		},
	};
};
