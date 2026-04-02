// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.section-inner, .feat-card, .tech-block, .highlight-box, .visual-card');

revealElements.forEach(el => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== STAGGERED CARD ANIMATION =====
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.feat-card, .tech-block');
      cards.forEach((card, i) => {
        card.style.transitionDelay = `${i * 60}ms`;
        card.classList.add('visible');
      });
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.cards-grid, .tech-grid').forEach(grid => {
  cardObserver.observe(grid);
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-primary');
  btn.textContent = 'Se trimite...';
  btn.disabled = true;

  setTimeout(() => {
    btn.style.display = 'none';
    formSuccess.style.display = 'block';
    contactForm.reset();

    setTimeout(() => {
      btn.style.display = 'inline-block';
      btn.textContent = 'Trimite mesajul';
      btn.disabled = false;
      formSuccess.style.display = 'none';
    }, 4000);
  }, 1000);
});

// ===== SMOOTH ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = 'var(--black)';
      link.style.fontWeight = '500';
    } else {
      link.style.fontWeight = '400';
    }
  });
});
