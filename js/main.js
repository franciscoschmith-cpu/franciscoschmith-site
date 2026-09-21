/* =========================================================================
   Francisco Schmith — comportamentos da página
   Tudo aqui é progressivo: sem JS, a página continua legível e navegável.
   ========================================================================= */
(function () {
  'use strict';

  document.documentElement.classList.remove('no-js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header ganha fundo ao rolar ---------- */
  var header = document.getElementById('site-header');
  if (header) {
    var stuck = false;
    var onScroll = function () {
      var should = window.scrollY > 24;
      if (should !== stuck) {
        stuck = should;
        header.classList.toggle('is-stuck', stuck);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Menu do celular ---------- */
  var toggle = document.getElementById('nav-toggle');
  var navMobile = document.getElementById('nav-mobile');
  if (toggle && navMobile) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      navMobile.hidden = !open;
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Fecha ao escolher um destino
    navMobile.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  /* ---------- Entrada suave ao rolar ---------- */
  var revealables = document.querySelectorAll('.reveal');

  var show = function (el) {
    var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.transitionDelay = (delay * 90) + 'ms';
    el.classList.add('is-visible');
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    revealables.forEach(function (el) {
      // O que já está na primeira tela aparece na hora, com a animação de
      // entrada. Nada acima da dobra pode ficar esperando rolagem.
      if (el.getBoundingClientRect().top < window.innerHeight) show(el);
      else io.observe(el);
    });
  }

  /* ---------- Cliques no WhatsApp ---------- */
  /* Registra de qual seção veio o clique. Se não houver analytics
     instalado, não faz nada e não quebra. */
  function track(name, props) {
    try {
      if (typeof window.va === 'function') window.va('event', { name: name, data: props });
      else if (window.dataLayer && typeof window.dataLayer.push === 'function') {
        window.dataLayer.push(Object.assign({ event: name }, props));
      }
    } catch (err) { /* analytics nunca pode derrubar a página */ }
  }

  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('whatsapp_click', { secao: el.getAttribute('data-wa') });
    });
  });

})();
