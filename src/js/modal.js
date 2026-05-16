export function initModal() {
  const openButtons = document.querySelectorAll(".js-open-modal");
  const closeButtons = document.querySelectorAll(".js-close-modal");

  function closeModal(modal) {
    modal.classList.remove("active");
  }

  function openModal(modal) {
    modal.classList.add("active");
  }

  // OPEN
  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;
      const modal = document.getElementById(modalId);

      if (!modal) return;

      openModal(modal);
    });
  });

  // CLOSE (button)
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".c-modal");
      if (!modal) return;

      closeModal(modal);
    });
  });

  // CLOSE (overlay)
  document.addEventListener("click", (e) => {
    const overlay = e.target.closest(".c-modal__overlay");

    if (!overlay) return;

    const modal = overlay.closest(".c-modal");
    if (modal) closeModal(modal);
  });

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;

    document.querySelectorAll(".c-modal.active").forEach((modal) => {
      closeModal(modal);
    });
  });
}