window.addEventListener('DOMContentLoaded', () => {

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;

		breakpoint = window.matchMedia(breakpoint);

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings);

			if (callback) {
				callback(swiper);
			}
		}

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings);
			} else {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			}
		};

		breakpoint.addEventListener('change', checker);
		checker();
	}

	const someFunc = (instance) => {
		if (instance) {
			instance.on('slideChange', function (e) {
				console.log('*** mySwiper.activeIndex', instance.activeIndex);
			});
		}
	};

	resizableSwiper(
		'(min-width: 10px)',
		'.preview__swiper',
		{
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
			slidesPerGroup: 4,
			spaceBetween: 15,
			slidesPerView: 1,
			centeredSlides: true,
			breakpoints: {
				370: {
					slidesPerView: 1.2,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
					},
				},
				430: {
					slidesPerView: 1.5,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
					},
				},
				580: {
					slidesPerGroup: 2,
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction',
					},
				},
				767: {
					centeredSlides: false,
					slidesPerGroup: 3,
					slidesPerView: 3,
				},
				1023: {
					centeredSlides: false,
					slidesPerGroup: 4,
					slidesPerView: 4,
				}
			}
		},
	);
});

