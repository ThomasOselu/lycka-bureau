// Lycka Network — Main JS

// Sticky nav shadow
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// Mobile nav toggle
const burger = document.getElementById('burger');
if (burger) {
  burger.addEventListener('click', () => {
    navbar.classList.toggle('nav--open');
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

// Staggered reveal for grids
document.querySelectorAll('.why__grid, .pkg__grid, .coverage__grid').forEach(grid => {
  const children = grid.children;
  Array.from(children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 0.08}s`;
    child.classList.add('reveal');
  });
});

// Re-run observer after adding classes
const allReveal = document.querySelectorAll('.reveal');
const obs2 = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs2.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
allReveal.forEach(el => obs2.observe(el));
