const themeToggle = document.querySelector("#theme-toggle");
const form = document.querySelector("[data-auth-form]");
const statusEl = document.querySelector("#auth-status");
const passwordToggles = [...document.querySelectorAll("[data-toggle-password]")];

function readSavedTheme() {
  try {
    return localStorage.getItem("chess-opening-theme") || "dark";
  } catch {
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem("chess-opening-theme", theme);
  } catch {
    // storage can be unavailable in private browsing modes
  }
}

function applyTheme(theme, persist = true) {
  const clean = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = clean;
  if (themeToggle) themeToggle.textContent = clean === "dark" ? "Light" : "Dark";
  if (persist) saveTheme(clean);
}

function setStatus(message, tone = "good") {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.classList.remove("good", "bad");
  statusEl.classList.add(tone);
}

function togglePasswords(event) {
  const button = event.currentTarget;
  const panel = button.closest(".auth-form");
  const inputs = [...panel.querySelectorAll('input[type="password"], input[data-password-visible="true"]')];
  const showing = button.dataset.showing === "true";

  inputs.forEach((input) => {
    input.type = showing ? "password" : "text";
    input.dataset.passwordVisible = showing ? "false" : "true";
  });
  button.textContent = showing ? "Show" : "Hide";
  button.dataset.showing = showing ? "false" : "true";
}

function handleSubmit(event) {
  event.preventDefault();
  if (!form) return;

  const data = new FormData(form);
  const mode = form.dataset.authForm;
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const password = String(data.get("password") || "");
  const confirmPassword = String(data.get("confirm-password") || "");

  if (mode === "signup" && password !== confirmPassword) {
    setStatus("Passwords do not match.", "bad");
    return;
  }

  try {
    if (mode === "signup") {
      localStorage.setItem("chess-opening-profile", JSON.stringify({ name, email }));
      localStorage.setItem("chess-opening-session", JSON.stringify({ email }));
      setStatus("Account created. Opening the trainer...");
    } else {
      localStorage.setItem("chess-opening-session", JSON.stringify({ email }));
      setStatus("Logged in. Opening the trainer...");
    }
  } catch {
    setStatus("Ready. Opening the trainer...");
  }

  window.setTimeout(() => {
    window.location.href = "board.html#practice";
  }, 650);
}

applyTheme(readSavedTheme(), false);
if (themeToggle) themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
passwordToggles.forEach((button) => button.addEventListener("click", togglePasswords));
if (form) form.addEventListener("submit", handleSubmit);
