const splide = new Splide( '.splide', {
    type: 'loop',
    perPage: 3,
    padding: '10%',
    focus    : 'center',
    gap: "30px",
    isNavigation: false,
    breakpoints: {
		640: {
			perPage: 2,
		},
    },
    classes: {
		arrows: 'splide__arrows controls',
		arrow : 'splide__arrow arrow',
		prev  : 'splide__arrow--prev prev',
		next  : 'splide__arrow--next next',
  },
});

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

splide.mount();


nextBtn.addEventListener('click', () => {
  splide.go('+${i}');
})

prevBtn.addEventListener('click', () => {
  splide.go('-${i}');
})
