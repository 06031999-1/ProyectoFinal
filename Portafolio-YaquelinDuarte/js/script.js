// Scroll suave + resalte de sección activa + año en footer + menú móvil

// Año actual en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Resaltar enlace activo según la sección visible
const links = document.querySelectorAll('.nav-link');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));

const makeActive = (id) => {
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) makeActive(entry.target.id);
  });
}, { threshold: 0.6 });

sections.forEach(sec => sec && observer.observe(sec));

// Menú hamburguesa (móvil)
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger?.addEventListener('click', () => menu.classList.toggle('open'));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
