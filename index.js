const navLinkElements = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkElements.forEach(navLinkElement => {
    const navLinkPathname = new URL(navLinkElement.href).pathname;

    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navLinkElement.classList.add('active');
    }
});