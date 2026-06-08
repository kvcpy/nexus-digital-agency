/* ── Reveal on scroll ─────────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Hero elements visible immediately
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const heroEls = document.querySelectorAll('.page-hero .reveal, .hero .reveal');
    heroEls.forEach(el => el.classList.add('visible'));

    const pc = document.getElementById('perfCard');
    if (pc) pc.classList.add('animated');
  }, 80);
});

/* ── Navbar scroll ────────────────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── Active nav link ─────────────────────────────────────────── */
(function markActive() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(a => {
    const href = a.getAttribute('href').split('#')[0].split('/').pop();
    if (href === path) a.classList.add('active');
  });
})();

/* ── Mobile menu ──────────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

const openMenu  = () => { mobileMenu.classList.add('open'); document.body.style.overflow = 'hidden'; hamburger?.setAttribute('aria-expanded','true'); };
const closeMenu = () => { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; hamburger?.setAttribute('aria-expanded','false'); };

hamburger?.addEventListener('click', openMenu);
mobileClose?.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));

/* ── Smooth anchor scroll ─────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) + 20;
      window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: 'smooth' });
    }
  });
});

/* ── Contact form ─────────────────────────────────────────────── */
const form    = document.getElementById('contactForm');
const formBtn = document.getElementById('formBtn');
const toast   = document.getElementById('toast');

const showToast = (msg, ms = 4000) => {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), ms);
};

form?.addEventListener('submit', async e => {
  e.preventDefault();
  const name  = document.getElementById('fname')?.value.trim();
  const email = document.getElementById('femail')?.value.trim();
  if (!name)  { showToast('Proszę podać imię i nazwisko.'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Proszę podać prawidłowy adres e-mail.'); return; }

  if (formBtn) {
    formBtn.disabled = true;
    formBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Wysyłanie...`;
  }
  await new Promise(r => setTimeout(r, 1400));
  if (formBtn) {
    formBtn.disabled = false;
    formBtn.innerHTML = `Wyślij Zapytanie — To Nic Nie Kosztuje <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
  }
  form.reset();
  showToast('✓ Wiadomość wysłana! Odezwiemy się w ciągu 2 godzin.', 5000);
});
