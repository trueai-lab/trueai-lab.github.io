/* ===== NAVIGATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // News show more/less
  const newsToggle = document.getElementById('news-toggle-btn');
  const newsExtra = document.getElementById('news-extra');
  if (newsToggle && newsExtra) {
    newsToggle.addEventListener('click', () => {
      const isOpen = newsExtra.style.display !== 'none';
      newsExtra.style.display = isOpen ? 'none' : 'block';
      newsToggle.textContent = isOpen ? '▾ Show More' : '▴ Show Less';
    });
  }

  // BibTeX toggle
  document.querySelectorAll('.bibtex-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      const isOpen = target.classList.contains('open');
      target.classList.toggle('open', !isOpen);
      btn.textContent = isOpen ? '[BibTeX]' : '[Hide BibTeX]';
    });
  });

  // Publication year navigation / scroll
  document.querySelectorAll('.pub-year-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.dataset.year;
      const section = document.getElementById('pub-' + year);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.pub-year-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

  // Highlight active year on scroll (publications page)
  const yearSections = document.querySelectorAll('.pub-year-section');
  if (yearSections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('pub-', '');
          document.querySelectorAll('.pub-year-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.year === id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    yearSections.forEach(s => observer.observe(s));
  }
});
