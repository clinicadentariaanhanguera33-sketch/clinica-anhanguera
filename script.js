// script.js - Interatividade Premium para Clínica Anhanguera

document.addEventListener('DOMContentLoaded', () => {

    // 1. Rolagem Suave para links internos
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Verifica se o link começa com # para garantir que é interno
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Efeito de "Fade In" ao rolar a página
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 3. Header dinâmico
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.boxShadow = 'none';
            }
        }
    });
});

// Função do Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.style.display = 'block';
    }
}