const root = document.documentElement;
const button = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  button.textContent = savedTheme === "dark" ? "☀" : "☾";
}

button.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  button.textContent = newTheme === "dark" ? "☀" : "☾";
});
