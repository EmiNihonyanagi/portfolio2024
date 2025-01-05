import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const scrollTrigger = () => {


  gsap.from(".js-main__title", {
    scrollTrigger: ".js-main__title",
    duration: 1,
    autoAlpha: 1,
    markers: true,
  });



  const listWrapperEl_01 = document.querySelector('.js-horizontalArea__01');
  const listEl_01 = document.querySelector('.js-horizontalArea__item01');

  gsap.to(listEl_01, {
    x: () => -(listEl_01.clientWidth - listWrapperEl_01.clientWidth),
    ease: 'none',
    scrollTrigger: {
      // markers: true,
      trigger: '.js-horizontal__01',
      start: 'top left',
      end: () => `+=${listEl_01.clientWidth - listWrapperEl_01.clientWidth}`,
      scrub: true,
      pin: true,
    },
  });

  const listWrapperEl_02 = document.querySelector('.js-horizontalArea__02');
  const listEl_02 = document.querySelector('.js-horizontalArea__item02');

  gsap.to(listEl_02, {
    x: () => -(listEl_02.clientWidth - listWrapperEl_02.clientWidth),
    ease: 'none',
    scrollTrigger: {
      // markers: true,
      trigger: '.js-horizontal__02',
      start: 'top top',
      end: () => `+=${listEl_02.clientWidth - listWrapperEl_02.clientWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

};
