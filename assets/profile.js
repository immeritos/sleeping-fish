// /assets/js/profile.js
(function () {
  const photo = document.querySelector('.photo');
  if (!photo) return; // 安全保护：不是 profile 页面时直接退出

  // 仅桌面端启用
  const desktop = () => window.matchMedia('(min-width: 860px)').matches;

  // 视差参数
  const PARALLAX_RANGE = 240; // 生效滚动范围（px）
  const MAX_SHIFT = 18;       // 最大下移（px）
  let ticking = false;

  function applyShift() {
    if (!desktop()) {
      // 移动端禁用位移
      photo.style.transform = 'translateY(0)';
      return;
    }
    const y = Math.max(0, Math.min(window.scrollY, PARALLAX_RANGE));
    const t = y / PARALLAX_RANGE; // 0 -> 1
    const shift = t * MAX_SHIFT;
    photo.style.transform = `translateY(${shift}px)`;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      applyShift();
      ticking = false;
    });
  }

  function init() {
    // 无动画偏好：直接退出
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      photo.style.transform = 'none';
      return;
    }
    applyShift(); // 初始计算
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', applyShift);
  }

  // 如果用 defer 或放在 </body> 前，这里 DOM 一般已就绪；否则兜底监听
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
