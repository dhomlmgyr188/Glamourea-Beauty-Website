export function initTogglePassword() {
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest(".c-btn__toggle-password");
  if (!toggleBtn) return;

  const group = toggleBtn.closest(".c-form__group--password");
  if (!group) return;

  const input = group.querySelector("input");
  if (!input) return;

  const isPassword = input.type === "password";

  input.type = isPassword ? "text" : "password";

  toggleBtn.innerHTML = isPassword
    ? '<i class="fa-regular fa-eye-slash"></i>'
    : '<i class="fa-regular fa-eye"></i>';
});
}
