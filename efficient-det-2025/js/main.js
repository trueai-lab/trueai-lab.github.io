/* ===== COPY BIBTEX ===== */
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const box = btn.closest('.bibtex-box');
    const text = box.innerText.replace('Copy', '').replace('Copied!', '').trim();
    navigator.clipboard.writeText(text).then(() => {
      btn.classList.add('copied');
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
      }, 2000);
    });
  });
});

/* ===== IMAGE COMPARISON SLIDER ===== */
document.querySelectorAll('.comparison-wrap').forEach(wrap => {
  const overlay = wrap.querySelector('.comparison-overlay');
  const divider = wrap.querySelector('.comparison-divider');
  const handle  = wrap.querySelector('.comparison-handle');
  if (!overlay) return;

  const setPos = pct => {
    overlay.style.width = pct + '%';
    if (divider) divider.style.left = pct + '%';
    if (handle)  handle.style.left  = pct + '%';
  };

  const getPos = e => {
    const rect = wrap.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    return Math.min(Math.max((x / rect.width) * 100, 2), 98);
  };

  let dragging = false;
  wrap.addEventListener('mousedown',  e => { dragging = true; setPos(getPos(e)); });
  wrap.addEventListener('touchstart', e => { dragging = true; setPos(getPos(e)); }, { passive: true });
  window.addEventListener('mousemove',  e => { if (dragging) setPos(getPos(e)); });
  window.addEventListener('touchmove',  e => { if (dragging) setPos(getPos(e)); }, { passive: true });
  window.addEventListener('mouseup',  () => dragging = false);
  window.addEventListener('touchend', () => dragging = false);
});

/* ===== SMOOTH SCROLL for anchor links ===== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
