function scrollTo(methods, mediaWidth, mediaType = 2) {
  const scrollButtons = document.querySelectorAll('[data-scroll]');
  const SCROLL_CLASS = 'scrolling';
  const body = document.body;

  const getScrollOffset = (item) => {
    const scrollId = item.dataset.scroll;
    const scrollElem = document.getElementById(scrollId);
    if (scrollElem) {
      const scrollOffset = scrollElem.offsetTop;
      return scrollOffset;
    }
  };

  const windowScroll = (event, scrollOffsetTop) => {
    event.preventDefault();
    body.classList.add(SCROLL_CLASS);

    window.scrollTo({
      top: scrollOffsetTop,
      behavior: 'smooth',
    });
    setTimeout(() => {
      body.classList.remove(SCROLL_CLASS);
    }, 1000);
  };

  const getMediaQuery = (width, type) => {
    const typeName = (type === 1) ? 'max' : 'min';
    return window.matchMedia(`(${typeName}-width: ${width}px)`);
  };

  const closeBurgerMenuOnScroll = () => {
    if (body.classList.contains(SCROLL_CLASS)) {
      methods.closeMenu();
    }
  };

  const mediaQuery = mediaWidth ? getMediaQuery(mediaWidth, mediaType) : getMediaQuery(0, mediaType);
  if (scrollButtons.length > 0) {
    scrollButtons.forEach((btn) => {
      const scrollOffsetTop = getScrollOffset(btn);

      if (mediaQuery.matches) {
        btn.addEventListener('click', (event) => {
          windowScroll(event, scrollOffsetTop);
          closeBurgerMenuOnScroll();
        });
      }
    });
  }
}

export default scrollTo;
