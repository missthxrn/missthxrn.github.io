const header = document.querySelector('.site-header');
const toggle = document.getElementById('navToggle');
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

/* ---------- Theme toggle (light / dark) ---------- */
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀' : '☾';
}

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next);
});

/* ---------- Mobile nav ---------- */
toggle.addEventListener('click', () => {
  header.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => header.classList.remove('open'));
});

/* ---------- Cursor star trail ---------- */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasHover = window.matchMedia('(hover: hover)').matches;

if (!prefersReducedMotion && hasHover) {
  const symbols = ['✶', '✦', '✧'];
  const colors = ['#6C4AB6', '#7FA98A', '#E3A6B0'];
  let lastSpawn = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn < 45) return; // throttle
    lastSpawn = now;

    const star = document.createElement('span');
    star.className = 'cursor-star';
    star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    star.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
    star.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;

    document.body.appendChild(star);
    star.addEventListener('animationend', () => star.remove());
  });
}
