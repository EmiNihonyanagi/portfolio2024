export const linkTraget_rel = () => {
  function ready(fn) {
    if (document.readyState != 'loading') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState != 'loading')
          fn();
      });
    }
  }
  ready(function () {
    var website = window.location.hostnam;
    var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
      + website
      + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');
    var anchorEls = document.querySelectorAll('a');
    var anchorElsLength = anchorEls.length;

    for (var i = 0; i < anchorElsLength; i++) {
      var anchorEl = anchorEls[i];
      var href = anchorEl.getAttribute('href');
      if (!internalLinkRegex.test(href)) {
        anchorEl.setAttribute('target', '_blank');
        anchorEl.setAttribute('rel', 'noopener nofollow');
      }
    }
  });
}