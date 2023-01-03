import Swiper, { Pagination, Keyboard, A11y } from 'swiper';

function sliderInit() {
  const swiperTestimonials = new Swiper('.swiper', {
    modules: [Keyboard, Pagination, A11y],
    observer: true,
    observerParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

export default sliderInit;
