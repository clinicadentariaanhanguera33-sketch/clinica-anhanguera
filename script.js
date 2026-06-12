// animação scroll
const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

items.forEach(item => observer.observe(item));

// captura simples de formulário (simulado)
document.querySelector(".form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Em breve entraremos em contato com você!");
});