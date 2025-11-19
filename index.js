const btn = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Slider




(function() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const elements = document.querySelectorAll("[data-aos]");
  if (!elements.length) return;

  elements.forEach(el => {
    const duration = el.getAttribute("data-aos-duration") || 800;
    const delay = el.getAttribute("data-aos-delay") || 0;
    const easing = el.getAttribute("data-aos-easing") || "ease-out";
    const once = el.getAttribute("data-aos-once") === "true";

    // apply custom transition per element
    el.style.transition = `
      opacity ${duration}ms ${easing} ${delay}ms,
      transform ${duration}ms ${easing} ${delay}ms
    `;

    el._aos = { once };
  });

  if (prefersReduced) {
    elements.forEach(el => el.classList.add("aos-animate"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target;

      if (entry.isIntersecting) {
        el.classList.add("aos-animate");
        if (el._aos.once) observer.unobserve(el);
      } else {
        if (!el._aos.once) el.classList.remove("aos-animate");
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
})();


