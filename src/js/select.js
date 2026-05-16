export function initSelect() {
  const selects = document.querySelectorAll(".c-select");

  if (!selects.length) return;

  selects.forEach((select) => {
    const trigger = select.querySelector(".c-select__trigger");

    const title = select.querySelector(".c-select__title");

    const menu = select.querySelector(".c-select__menu");

    const options = select.querySelectorAll(".c-select__option");

    const input = select.querySelector(".c-select__input");

    // OPEN MENU
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll(".c-select__menu").forEach((menuItem) => {
        if (menuItem !== menu) {
          menuItem.classList.remove("is-open");
        }
      });

      menu.classList.toggle("is-open");
    });

    // SELECT OPTION
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const value = option.dataset.value;

        const label = option.textContent;

        title.textContent = label;

        input.value = value;

        input.dispatchEvent(new Event("change"));

        menu.classList.remove("is-open");
      });
    });
  });

  // OUTSIDE CLICK
  document.addEventListener("click", () => {
    document.querySelectorAll(".c-select__menu").forEach((menu) => {
      menu.classList.remove("is-open");
    });
  });
}
