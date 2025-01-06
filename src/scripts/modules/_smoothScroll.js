export const smoothScroll = () => {
  // headerの高さを取得
  const headerHeight = document.querySelector('header').offsetHeight

  //href属性が#で始まるものを取得
  const links = document.querySelectorAll('a[href^="#"]')
  if (links.length === 0) return
  links.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      // クリックされたときのデフォルトの挙動を防ぐ
      e.preventDefault()

      // クリックされたアンカータグのhref属性を取得
      const href = anchor.getAttribute('href')

      // href属性の#を取り除いた部分と一致するIDを取得
      const target = document.getElementById(href.replace('#', ''))

      //ページ上の位置からheaderの高さを引いて、スクロール位置がヘッダーの下になるように調整
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    })
  })
}
