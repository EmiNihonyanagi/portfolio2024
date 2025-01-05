
import { loading } from './modules/_loading';
import { svgAnimation } from './modules/_svgAnimation';
import { linkTraget_rel } from './modules/_linkTraget_rel';
import { btnClickFunc } from './modules/_btnClickFunc';
import { smoothScroll } from './modules/_smoothScroll';
import { scrollTrigger } from './modules/_scrollTrigger';
import { scrollBlockAnime } from './modules/_scrollBlockAnime';



document.addEventListener('DOMContentLoaded', function () {
  loading();
  svgAnimation();
  smoothScroll();
  btnClickFunc();
  scrollTrigger();
  scrollBlockAnime();
  linkTraget_rel();
});
