// assets/scripts.js
document.addEventListener('DOMContentLoaded', () => {
  /* ===================== 移动端折叠菜单 ===================== */
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
  /* ===================== 2) 新增：Hero 静谧滚动相册（模式 A） ===================== */
  const hero = document.getElementById('hero');
  if (hero) {
    const slides   = Array.from(hero.querySelectorAll('.hero-slide'));
    const dots     = Array.from(hero.querySelectorAll('.hero-dot'));
    const viewport = hero.querySelector('.hero-slider__viewport') || hero;

    let index = 0;
    let timer = null;
    const INTERVAL = 7000; // 6–8s 之间取 7s
    const prefersReduced = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function setSlide(i) {
      slides.forEach((s, idx) => {
        const active = idx === i;
        s.classList.toggle('is-active', active);
        s.setAttribute('aria-hidden', String(!active));
        if (dots[idx]) {
          dots[idx].classList.toggle('is-active', active);
          dots[idx].setAttribute('aria-selected', String(active));
        }
      });
      index = i;
    }
    function next() { setSlide((index + 1) % slides.length); }
    function prev() { setSlide((index - 1 + slides.length) % slides.length); }

    function play() {
      if (prefersReduced) return; // 尊重“减少动态”
      stop();
      timer = window.setInterval(next, INTERVAL);
    }
    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    // 分页圆点点击
    dots.forEach((btn, i) => btn.addEventListener('click', () => { setSlide(i); play(); }));

    // 悬停暂停：在视口容器上监听
    if (viewport) {
      viewport.addEventListener('mouseenter', stop);
      viewport.addEventListener('mouseleave', play);
    }

    // 视口外暂停（节流/省电）
    if ('IntersectionObserver' in window && viewport) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { e.isIntersecting ? play() : stop(); });
      }, { threshold: 0.2 });
      io.observe(viewport);
    }

    // 标签页隐藏时暂停
    document.addEventListener('visibilitychange', () => {
      document.visibilityState === 'visible' ? play() : stop();
    });

    // 键盘左右键（当焦点在 Hero 内或鼠标悬停其上时才响应）
    document.addEventListener('keydown', (e) => {
      const focusInside = hero.contains(document.activeElement);
      const hover = viewport && viewport.matches(':hover');
      if (!focusInside && !hover) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
    });

    // 初始化
    setSlide(0);
    play();
  }
  
});
