const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const reveals = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), i * 80);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

reveals.forEach(el => observer.observe(el));