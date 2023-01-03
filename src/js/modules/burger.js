function burger(menuClassName) {
  const ACTIVE_CLASS = 'active';
  const button = document.querySelector('.menu-burger');
  const menu = document.querySelector(menuClassName);
  const body = document.body;

  if (button) {

    /* Returns methods and passes them to the scrollTo module */
    const methods = {
      openMenu() {
        body.classList.add('no-scroll');
        button.classList.add(ACTIVE_CLASS);
        menu.classList.add(ACTIVE_CLASS);
        button.setAttribute('aria-expanded', true);
      },
      closeMenu() {
        body.classList.remove('no-scroll');
        button.classList.remove(ACTIVE_CLASS);
        menu.classList.remove(ACTIVE_CLASS);
        button.setAttribute('aria-expanded', false);
      },
    };

    // const openMenu = () => {
    //   body.classList.add('no-scroll');
    //   button.classList.add(ACTIVE_CLASS);
    //   menu.classList.add(ACTIVE_CLASS);
    //   button.setAttribute('aria-expanded', true);
    // };

    // const closeMenu = () => {
    //   body.classList.remove('no-scroll');
    //   button.classList.remove(ACTIVE_CLASS);
    //   menu.classList.remove(ACTIVE_CLASS);
    //   button.setAttribute('aria-expanded', false);
    // };

    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (!button.classList.contains(ACTIVE_CLASS)) {
        methods.openMenu();
      } else methods.closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        methods.closeMenu();
      }
    });
    return methods;
  }
}

export default burger;
