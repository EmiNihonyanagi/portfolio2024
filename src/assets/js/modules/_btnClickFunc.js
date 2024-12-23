export const btnClickFunc = () => {

  document.querySelector('.js-btn').addEventListener('click', function () {
    this.classList.toggle('is-open');
    document.querySelector('.siteHeader__nav').classList.toggle('is-active');
  });

};