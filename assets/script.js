/* ============================================================
   GENDERCOM 2026 — Interacción
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Nav sticky ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menú móvil ---------- */
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  const backdrop = document.getElementById('navBackdrop');
  const closeMobile = () => { mobile.classList.remove('open'); backdrop.classList.remove('open'); document.body.style.overflow = ''; };
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      backdrop.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    backdrop.addEventListener('click', closeMobile);
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));
  }

  /* ---------- Acordeones (líneas + FAQ) ---------- */
  function bindAccordion(triggerSel, itemSel) {
    document.querySelectorAll(triggerSel).forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest(itemSel);
        const open = item.getAttribute('data-open') === 'true';
        item.setAttribute('data-open', open ? 'false' : 'true');
      });
    });
  }
  bindAccordion('.line-trigger', '.line-item');
  bindAccordion('.faq-trigger', '.faq-item');

  /* ---------- Enfoque: acordeón horizontal ---------- */
  const hacc = document.getElementById('enfoqueHacc');
  if (hacc) {
    const panels = Array.from(hacc.querySelectorAll('.ha-panel'));
    hacc.querySelectorAll('.ha-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const panel = tab.closest('.ha-panel');
        if (panel.classList.contains('is-open')) return;
        panels.forEach(p => p.classList.remove('is-open'));
        panel.classList.add('is-open');
      });
    });
  }

  /* ---------- Sede: carrusel ---------- */
  const car = document.getElementById('sedeCarousel');
  if (car) {
    const track = car.querySelector('.sede-track');
    const slides = Array.from(track.children);
    const dots = Array.from(car.querySelectorAll('.sede-dot'));
    let idx = 0, timer = null;
    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (idx * 100) + '%)';
      dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    };
    const start = () => { stop(); timer = setInterval(() => go(idx + 1), 5500); };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };
    const prev = car.querySelector('.sede-prev');
    const next = car.querySelector('.sede-next');
    if (prev) prev.addEventListener('click', () => { go(idx - 1); start(); });
    if (next) next.addEventListener('click', () => { go(idx + 1); start(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); start(); }));
    car.addEventListener('mouseenter', stop);
    car.addEventListener('mouseleave', start);
    start();
  }

  /* ---------- Scroll reveal + contadores (basado en scroll, robusto) ---------- */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const counters = Array.from(document.querySelectorAll('[data-count]'));
  let counted = new WeakSet();
  const animateCount = (el) => {
    if (counted.has(el)) return;
    counted.add(el);
    const target = parseInt(el.getAttribute('data-count'), 10);
    const dur = 1600;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString('es-ES');
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString('es-ES');
    };
    requestAnimationFrame(step);
  };
  if (reduce) {
    reveals.forEach(el => el.classList.add('in'));
    counters.forEach(el => el.textContent = parseInt(el.getAttribute('data-count'), 10).toLocaleString('es-ES'));
  } else {
    const checkReveals = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(el => {
        if (el.classList.contains('in')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.92 && rect.bottom > 0) el.classList.add('in');
      });
      counters.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.85 && rect.bottom > 0) animateCount(el);
      });
    };
    let ticking = false;
    const onScrollCheck = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { checkReveals(); ticking = false; });
    };
    window.addEventListener('scroll', onScrollCheck, { passive: true });
    window.addEventListener('resize', onScrollCheck, { passive: true });
    checkReveals();
    // Segunda pasada por si las fuentes/layout cambian tras la carga
    setTimeout(checkReveals, 300);
    window.addEventListener('load', checkReveals);
    // Red de seguridad: nunca dejar contenido oculto de forma permanente
    setTimeout(() => reveals.forEach(el => el.classList.add('in')), 3000);
  }

  /* ---------- Ponentes: acordeón (expandir al pulsar) ---------- */
  const acc = document.getElementById('speakersAccordion');
  if (acc) {
    const items = Array.from(acc.querySelectorAll('.speaker'));
    items.forEach(it => {
      it.addEventListener('click', () => {
        items.forEach(x => x.classList.remove('active'));
        it.classList.add('active');
      });
      it.addEventListener('mouseenter', () => {
        if (window.matchMedia('(min-width: 761px)').matches) {
          items.forEach(x => x.classList.remove('active'));
          it.classList.add('active');
        }
      });
    });
  }

  /* ---------- Formulario decorativo ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '¡Mensaje enviado! ✓';
      btn.style.background = 'var(--teal)';
      setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; form.reset(); }, 2600);
    });
  }
})();
