export function initPasswordToggle() {
  const buttons = document.querySelectorAll(".c-btn__toggle-password");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const wrapper = button.closest(".c-inputs--toggle-password");
      if (!wrapper) return;

      const input = wrapper.querySelector("input");
      const icon = button.querySelector("i");

      if (!input) return;

      const isPassword = input.type === "password";

      // toggle type
      input.type = isPassword ? "text" : "password";

      // toggle icon
      icon.classList.toggle("fa-eye");
      icon.classList.toggle("fa-eye-slash");

      // aria
      button.setAttribute(
        "aria-label",
        isPassword ? "إخفاء كلمة السر" : "إظهار كلمة السر",
      );
    });
  });
}
