export function initModal() {
  const modal = document.getElementById("modal");
  const openButton = document.getElementById("openModal");
  const closeButtons = document.querySelectorAll(".js-close-modal");
  const overlay = document.querySelector(".c-modal__overlay");

  if (!modal || !openButton || !overlay) return;

  openButton.addEventListener("click", () => {
    modal.classList.add("active");
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });

  overlay.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("active");
    }
  });
}