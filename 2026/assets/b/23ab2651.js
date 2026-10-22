/* ============================================================
   GENDERCOM 2026 — Interacción
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Nav sticky ---------- */
  const nav = document.getElementById('nav');
  const topbar = document.getElementById('topbar');
  const onScroll = () => {
    if (window.scrollY > 40) { nav.classList.add('scrolled'); if (topbar) topbar.classList.add('hidden'); }
    else { nav.classList.remove('scrolled'); if (topbar) topbar.classList.remove('hidden'); }
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
  document.querySelectorAll('.speakers-accordion').forEach(acc => {
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

    const spTabs = Array.from(document.querySelectorAll('.sp-tab'));
    if (spTabs.length && !document.documentElement.dataset.spTabsInit) {
      document.documentElement.dataset.spTabsInit = '1';
      const spDays = Array.from(document.querySelectorAll('.speakers-day'));
      spTabs.forEach(tab => tab.addEventListener('click', () => {
        spTabs.forEach(x => x.classList.toggle('active', x === tab));
        spDays.forEach(d => {
          const on = d.dataset.spday === tab.dataset.spday;
          d.classList.toggle('active', on);
          if (on) d.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
        });
      }));
    }
  });

  /* ---------- Agenda: tabs por día + apilado sticky ---------- */
  const agendaTabs = Array.from(document.querySelectorAll('.agenda-tab'));
  const agendaDays = Array.from(document.querySelectorAll('.agenda-day'));
  const agendaHead = document.querySelector('.agenda-head');
  if (agendaTabs.length) {
    const NAV = 76;      // el head sticky se ancla aquí
    const layoutStack = (day) => {
      // sin apilado: las filas quedan siempre abiertas
      Array.from(day.querySelectorAll('.agenda-row')).forEach((row, i) => {
        row.style.position = 'static';
        row.style.top = '';
        row.style.zIndex = i + 1;
      });
    };
    const relayout = () => { const active = document.querySelector('.agenda-day.active'); if (active) layoutStack(active); };
    agendaDays.forEach(layoutStack);
    window.addEventListener('resize', relayout, { passive: true });
    window.addEventListener('load', relayout);
    agendaTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const day = tab.getAttribute('data-day');
        agendaTabs.forEach(t => t.classList.toggle('active', t === tab));
        agendaDays.forEach(d => {
          const on = d.getAttribute('data-day') === day;
          d.classList.toggle('active', on);
          if (on) { d.querySelectorAll('.reveal').forEach(el => el.classList.add('in')); layoutStack(d); }
        });
      });
    });
  }

  /* ---------- Noticias: modal ---------- */
  const newsModal = document.getElementById('newsModal');
  if (newsModal) {
    const mImg = document.getElementById('newsModalImg');
    const mDate = document.getElementById('newsModalDate');
    const mTitle = document.getElementById('newsModalTitle');
    const mBody = document.getElementById('newsModalBody');
    let lastFocus = null;
    const openModal = (card) => {
      const img = card.querySelector('.news-thumb');
      const date = card.querySelector('.news-date');
      const title = card.querySelector('h3');
      const full = card.querySelector('.news-full');
      if (img) { mImg.src = img.currentSrc || img.src; mImg.style.display = img.getAttribute('src') ? '' : 'none'; }
      mDate.textContent = date ? date.textContent : '';
      mTitle.textContent = title ? title.textContent : '';
      mBody.innerHTML = full ? full.innerHTML : '';
      lastFocus = document.activeElement;
      newsModal.classList.add('open');
      newsModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const closeBtn = newsModal.querySelector('.news-modal-close');
      if (closeBtn) closeBtn.focus();
    };
    const closeModal = () => {
      newsModal.classList.remove('open');
      newsModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };
    document.querySelectorAll('.news-card').forEach(card => {
      card.addEventListener('click', () => openModal(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card); }
      });
    });
    newsModal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && newsModal.classList.contains('open')) closeModal(); });
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

/* ---------- Mesas de debate: filas de agenda clicables ---------- */
(function () {
  const modal = document.getElementById('mesaModal');
  if (!modal) return;
  const mTime = document.getElementById('mesaModalTime');
  const mTitle = document.getElementById('mesaModalTitle');
  const mBody = document.getElementById('mesaModalBody');
  let lastFocus = null;
  const open = (row) => {
    const detail = row.querySelector('.mesa-detail');
    if (!detail) return;
    mTime.textContent = detail.dataset.time || '';
    mTitle.textContent = row.querySelector('h4').textContent;
    mBody.innerHTML = detail.innerHTML;
    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('.news-modal-close');
    if (closeBtn) closeBtn.focus();
  };
  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  };
  document.querySelectorAll('.agenda-row.agenda-click').forEach(row => {
    row.addEventListener('click', () => open(row));
    row.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); open(row); }
    });
  });
  modal.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && modal.classList.contains('open')) close(); });
})();

/* ---------- Mesas destacadas: tarjetas que abren el detalle de la mesa ---------- */
(function () {
  const cards = Array.from(document.querySelectorAll('.mesa-card[data-mesa]'));
  if (!cards.length) return;
  cards.forEach(card => {
    const row = document.querySelector('.agenda-row[data-mesa-id="' + card.dataset.mesa + '"]');
    if (!row) return;
    const faces = card.querySelector('.mesa-faces');
    if (faces) {
      row.querySelectorAll('.mesa-person').forEach(p => {
        const src = p.querySelector('.mesa-photo img');
        const nameEl = p.querySelector('h4');
        if (!src) return;
        const fig = document.createElement('figure');
        const img = document.createElement('img');
        img.src = src.getAttribute('src');
        img.loading = 'lazy';
        img.alt = nameEl ? nameEl.textContent : '';
        if (src.style.objectPosition) img.style.objectPosition = src.style.objectPosition;
        const cap = document.createElement('figcaption');
        cap.textContent = nameEl ? nameEl.textContent : '';
        fig.appendChild(img); fig.appendChild(cap);
        faces.appendChild(fig);
      });
    }
    const go = () => row.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    card.addEventListener('click', go);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
})();
