import * as webpFunction from './modules/webp.js';
import sliderInit from './modules/slider.js';
import burger from './modules/burger.js';
import initTabs from './modules/tabs.js';
import scrollTo from './modules/scrollTo.js';
import AOS from 'aos';

/* Webp checking */
webpFunction.isWebp();

/* Init Swiper Js */
sliderInit();

/* Init burger func */
const burgerMethods = burger('.nav__menu');

/* Init tabs func */
initTabs();

/* Init scrollTo module */
scrollTo(burgerMethods);

/* Init aos */
AOS.init({
  disable: false,
  offset: 200,
  duration: 500,
  once: true,
});
