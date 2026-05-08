// Tab switching
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.closest('.filter-chips').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // Brand chips hover
  document.querySelectorAll('.brand-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.style.borderColor = 'rgba(79,142,247,0.6)';
      setTimeout(() => chip.style.borderColor = '', 300);
    });
  });

  // Wishlist toggle
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.textContent = btn.textContent === '♡' ? '♥' : '♡';
      btn.style.color = btn.textContent === '♥' ? '#ff4444' : '';
    });
  });

  // Nav active state
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.phone-card, .news-item, .review-card, .upcoming-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });
