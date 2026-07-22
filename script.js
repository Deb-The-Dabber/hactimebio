// script.js
// Add JavaScript here when you want to make the page interactive.
console.log('Hack-A-Time Bio page loaded');
// Reveal each <li> as it scrolls into view, staggered slightly
// so items appear one after another instead of all at once.

document.addEventListener('DOMContentLoaded', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = document.querySelectorAll('.body li');

    if (prefersReducedMotion) {
        items.forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                setTimeout(() => {
                    el.style.opacity = 1;
                    el.style.transform = 'none';
                }, i * 80); // stagger: 80ms between each item
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.2 });

    items.forEach(el => observer.observe(el));
});