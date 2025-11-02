// assets/js/main.js
// Cleaned, non-duplicated site scripts
(function () {
  'use strict';

  // Utility: safe getElement
  const $ = (id) => document.getElementById(id);

  // Tailwind config blocks can be left in HTML where Tailwind processes them;
  // if needed, you can keep a single config block in the HTML head instead.
  // ---- UI Controls ----
  const mobileMenuButton = $('mobile-menu-button');
  const mobileMenu = $('mobile-menu');
  const backToTopButton = $('back-to-top');

  // Safe event binding helper
  function addEvent(el, type, fn) {
    if (!el) return;
    el.addEventListener(type, fn);
  }

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    addEvent(mobileMenuButton, 'click', () => {
      mobileMenu.classList.toggle('hidden');
      // optional icon toggle (if you use icons)
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenuButton.innerHTML = '<i class="fa fa-times text-xl"></i>';
      } else {
        mobileMenuButton.innerHTML = '<i class="fa fa-bars text-xl"></i>';
      }
    });
  }

  // Back to top behavior
  if (backToTopButton) {
    addEvent(window, 'scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
    addEvent(backToTopButton, 'click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Shrink/Sticky header on scroll (single handler)
  (function headerScrollHandler() {
    const header = document.querySelector('header');
    if (!header) return;
    let lastScrollTop = 0;
    addEvent(window, 'scroll', () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 100) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
      } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  })();

  // Counters using IntersectionObserver
  (function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        let count = 0;
        const speed = 200;
        const update = () => {
          const inc = target / speed;
          if (count < target) {
            count += inc;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 1);
          } else {
            // preserve + sign if present in template
            counter.innerText = String(target) + (counter.innerText.includes('+') ? '+' : '');
          }
        };
        update();
        observer.unobserve(counter);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => obs.observe(c));
  })();

  // Smooth scrolling for anchor links (single handler)
  (function smoothAnchors() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (!anchors.length) return;
    anchors.forEach(a => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // close mobile menu if open
          if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
          }
        }
      });
    });
  })();

  // Charts: initialize only if Chart exists and canvas present
  function safeCreateChart(canvasId, configFactory) {
    const el = $(canvasId);
    if (!el) return null;
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded; skipping chart:', canvasId);
      return null;
    }
    try {
      return new Chart(el.getContext('2d'), configFactory());
    } catch (err) {
      console.error('Error creating chart', canvasId, err);
      return null;
    }
  }

  // Example: researchChart
  safeCreateChart('researchChart', () => ({
    type: 'line',
    data: {
      labels: ['2018','2019','2020','2021','2022','2023'],
      datasets: [
        { label: 'Publications', data: [5,8,12,18,25,28], borderColor:'#fff', backgroundColor:'rgba(255,255,255,0.1)', tension:0.4, fill:true },
        { label: 'Citations', data: [25,60,150,320,650,980], borderColor:'#f4d03f', backgroundColor:'rgba(244,208,63,0.1)', tension:0.4, fill:true }
      ]
    },
    options: {
      responsive:true,
      maintainAspectRatio:false,
      plugins: {
        legend: { labels: { color: '#ffffff' } },
        tooltip: { backgroundColor:'rgba(255,255,255,0.9)', titleColor:'#1a5276', bodyColor:'#1a5276' }
      },
      scales: {
        x: { ticks: { color:'#ffffff' }, grid: { color:'rgba(255,255,255,0.1)' } },
        y: { ticks: { color:'#ffffff' }, grid: { color:'rgba(255,255,255,0.1)' } }
      }
    }
  }));

  // Add other charts similarly, using safeCreateChart('diversityChart', ()=>({...})) etc.
  safeCreateChart('diversityChart', () => ({
    type: 'doughnut',
    data: { labels:['Asian','White','Hispanic/Latino','Black','Middle Eastern','Mixed/Other'], datasets:[{ data:[35,25,15,10,10,5], backgroundColor:['#1abc9c','#f4d03f','#3498db','#e74c3c','#9b59b6','#95a5a6']}] },
    options: { responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#fff' } }, title:{ display:true, text:'Ethnic Diversity', color:'#fff' } }, cutout:'70%' }
  }));

  safeCreateChart('publicationsChart', () => ({
    type:'line',
    data:{ labels:['2018','2019','2020','2021','2022','2023'], datasets:[ { label:'Publications', data:[15,25,35,42,56,65], borderColor:'#1a5276', backgroundColor:'rgba(26,82,118,0.1)', tension:0.4, fill:true }, { label:'Citations', data:[120,350,780,1340,2650,5000], borderColor:'#1abc9c', backgroundColor:'rgba(26,188,156,0.1)', tension:0.4, fill:true } ] },
    options:{ responsive:true, maintainAspectRatio:false }
  }));

  safeCreateChart('citationsChart', () => ({
    type:'bar',
    data:{ labels:['2018','2019','2020','2021','2022','2023'], datasets:[{ label:'Citations', data:[120,350,780,1340,2650,5000], backgroundColor:'rgba(255,255,255,0.2)', borderColor:'rgba(255,255,255,0.7)', borderWidth:1 }] },
    options:{ responsive:true, maintainAspectRatio:false }
  }));

  // Load more publications button (safe attach)
  (function loadMore() {
    const btn = $('load-more');
    const list = $('publication-list');
    if (!btn || !list) return;
    addEvent(btn, 'click', () => {
      btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Loading...';
      btn.disabled = true;
      setTimeout(() => {
        // simulate append - ensure safe DOM operations
        // ... (you can reuse existing simulation code)
        btn.innerHTML = 'Load More Publications <i class="fa fa-refresh"></i>';
        btn.disabled = false;
      }, 1000);
    });
  })();

  // Form submission handler (safe)
  (function forms() {
    const forms = document.querySelectorAll('form');
    if (!forms.length) return;
    forms.forEach(form => {
      addEvent(form, 'submit', function (e) {
        e.preventDefault();
        const submit = form.querySelector('button[type="submit"]');
        if (!submit) return;
        const original = submit.innerHTML;
        submit.disabled = true;
        submit.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Submitting...';
        setTimeout(() => {
          submit.innerHTML = '<i class="fa fa-check"></i> Submitted Successfully!';
          submit.classList.remove('bg-primary'); submit.classList.add('bg-green-600');
          form.reset();
          setTimeout(() => {
            submit.disabled = false;
            submit.innerHTML = original;
            submit.classList.add('bg-primary'); submit.classList.remove('bg-green-600');
          }, 2000);
        }, 1500);
      });
    });
  })();

})(); // end IIFE
