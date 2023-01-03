function initTabs(tabsType = true) {
  const ACTIVE_CLASS = 'active';
  const TABS_ATTR = '[data-tabs]';
  const TABS_NAV_ATTR = '[data-navtabs]';

  const getTabs = (selector, wrapper = document) => wrapper.querySelectorAll(selector);

  /* Generate tabs id, if tabs > 1 */
  const generateTabsId = (tabs) => {
    if (tabs.length > 1) {
      for (let i = 0; i < tabs.length; i++) {
        const tabsId = `tabs-${i + 1}`;
        const item = tabs[i];
        item.id = tabsId;
      }
    }
  };

  const generateNavTabsId = (wrapper) => {
    const tabs = getTabs(TABS_NAV_ATTR, wrapper);
    const length = tabs.length;

    for (let i = 0; i < length; i++) {
      const item = tabs[i];
      item.setAttribute('data-navtabs', i);
    }
  };

  const tabsNavigationDefault = (element, tabs, wrapper) => {
    const navBtns = wrapper.querySelectorAll(TABS_NAV_ATTR);
    const currentBtn = element.closest(TABS_NAV_ATTR);

    if (currentBtn) {
      for (const btn of navBtns) {
        btn.classList.remove(ACTIVE_CLASS);
      }
      currentBtn.classList.add(ACTIVE_CLASS);
      const navId = currentBtn.dataset.navtabs;
      return tabs[navId];
    }
  };

  const changeNav = (wrapper) => {
    const nav = wrapper.querySelector('.tabs__nav');
    const transformValue = 30;
    const offset = nav.offsetTop;

    const methods = {
      addValue() {
        nav.style.top = `${offset + transformValue}px`;
      },
      removeValue() {
        nav.style.top = `${offset - transformValue}px`;
      },
    };
    return methods;
  };

  const tabsNavigation = (element, tabs, wrapper) => {
    const isPrevBtn = element.closest('.tabs__btn_prev');
    const isNextBtn = element.closest('.tabs__btn_next');
    let currentTab = wrapper.querySelector(`.tabs__item.${ACTIVE_CLASS}`);

    if (isPrevBtn && currentTab !== tabs[0]) {
      currentTab = currentTab.previousElementSibling;
      changeNav(wrapper).removeValue();
    }

    if (isNextBtn && currentTab !== tabs[tabs.length - 1]) {
      currentTab = currentTab.nextElementSibling;
      changeNav(wrapper).addValue();
    }
    return currentTab;
  };

  const removeActiveTabs = (tabs) => {
    for (const item of tabs) {
      item.classList.remove(ACTIVE_CLASS);
    }
  };

  const addListener = (callBack, wrappers) => {
    for (const elem of wrappers) {
      if (elem) {
        elem.addEventListener('click', callBack);
      }
    }
  };

  function tabsHandler(event) {
    const target = event.target;
    const wrapper = this;
    const tabs = getTabs(TABS_ATTR, wrapper);

    generateNavTabsId(wrapper);
    let tab = tabsNavigationDefault(target, tabs, wrapper);

    if (!tabsType) {
      tab = tabsNavigation(target, tabs, wrapper);
    }

    if (tab) {
      removeActiveTabs(tabs);
      tab.classList.add(ACTIVE_CLASS);
    }
  };

  const tabs = getTabs('.tabs');
  generateTabsId(tabs);
  addListener(tabsHandler, tabs);
}

export default initTabs;
