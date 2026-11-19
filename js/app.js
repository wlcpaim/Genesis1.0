// Genesis1 0 — entrada da aplicação (módulos pequenos, sem globais)
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("menu");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initForm() {
  const form = document.querySelector(".form");
  if (!form) return;
  const status = form.querySelector(".form-status");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = String(new FormData(form).get("email") ?? "").trim();
    const valid = EMAIL_RE.test(email);
    status.classList.toggle("is-error", !valid);
    status.textContent = valid ? "Recebido! Entraremos em contato." : "Informe um e-mail válido.";
    if (valid) form.reset();
  });
}

function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = String(new Date().getFullYear()); });
}

try {
  initMenu();
  initForm();
  initYear();
} catch (error) {
  console.error("Falha ao iniciar a aplicação:", error);
}
