export const Slider = function (sliderSelector, slidesSelector) {
	const slider = document.querySelector(sliderSelector);
	const slides = document.querySelectorAll(slidesSelector);
	const viewportWidth = window.innerWidth;

	const announceSlide = (new_current) => {
		document.querySelector(".slider-cta .liveregion").textContent =
			"Item " + (new_current + 1) + " of " + slides.length;
	};

	const liveregion = document.createElement("div");
	liveregion.setAttribute("aria-live", "polite");
	liveregion.setAttribute("aria-atomic", "true");
	liveregion.setAttribute("class", "liveregion visuallyhidden");
	document.querySelector(".slider-cta").appendChild(liveregion);

	return {
		moveToPreviousSlide: function () {
			const itemIndex = Math.floor(slider.scrollLeft / viewportWidth);
			const previousItemIndex = itemIndex - 1;

			if (previousItemIndex < 0) {
				slider.scrollTo({
					left: (slides.length - 1) * viewportWidth,
					behavior: "smooth",
				});
				announceSlide(slides.length - 1);
				slides[slides.length - 1].focus();
			} else {
				slider.scrollTo({
					left: viewportWidth * previousItemIndex,
					behavior: "smooth",
				});
				announceSlide(previousItemIndex);
				slides[previousItemIndex].focus();
			}
		},
		moveToNextSlide: function () {
			const itemIndex = Math.floor(slider.scrollLeft / viewportWidth);
			const nextItemIndex = itemIndex + 1;

			if (nextItemIndex >= slides.length) {
				slider.scrollTo({ left: 0, behavior: "smooth" });
				announceSlide(0);
				slides[0].focus();
			} else {
				slider.scrollTo({
					left: viewportWidth * nextItemIndex,
					behavior: "smooth",
				});
				announceSlide(nextItemIndex);
				slides[nextItemIndex].focus();
			}
		},
	};
};
