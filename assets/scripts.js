// assets/scripts.js
const toggle = document.querySelector('.nav-toggle');
const mobile = document.querySelector('.nav-mobile');

if (toggle && mobile) {
  toggle.addEventListener('click', () => {
    const isHidden = mobile.hasAttribute('hidden');
    if (isHidden) {
      mobile.removeAttribute('hidden');
    } else {
      mobile.setAttribute('hidden', '');
    }
    toggle.setAttribute('aria-expanded', String(isHidden));
  });
}
