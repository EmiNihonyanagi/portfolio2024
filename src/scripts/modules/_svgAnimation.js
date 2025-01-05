import Vivus from 'vivus';

export const svgAnimation = () => {
  const fv = document.getElementsByClassName('home__fv-areaLine')[0];
  window.setTimeout(function () {
    fv.classList.add("is-animate");
    new Vivus('mask', { //ここにsvgタグにつけたIDを書き込む
      type: 'oneByOne',
      start: 'inViewport',
      duration: 40,
      forceRender: false,
      animTimingFunction: Vivus.LINEAR,
    });

  }, 6000);

};
