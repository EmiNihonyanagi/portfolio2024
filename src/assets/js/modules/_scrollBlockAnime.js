export const scrollBlockAnime = () => {
  const myFunc = function(){
    const target = document.getElementsByClassName('animate__target');
    const position = Math.floor(window.innerHeight * .75);
    for (let i = 0; i < target.length; i++) {
        let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
        if (offsetTop < position) {
            target[i].classList.add('is-animate');
        }
    }
  }

  //スクロールイベントリスナーに登録
  window.addEventListener('scroll', myFunc, false);


  };
