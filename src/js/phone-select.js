export function initPhoneSelect() {
  const wrappers = document.querySelectorAll(".js-phone-select");

  wrappers.forEach((wrapper) => {
    const trigger = wrapper.querySelector(".js-phone-trigger");
    const menu = wrapper.querySelector(".js-phone-menu");
    const options = wrapper.querySelectorAll(".js-phone-option");

    const flagEl = wrapper.querySelector(".js-phone-flag");
    const codeEl = wrapper.querySelector(".js-phone-code");
    const hiddenInput = wrapper.querySelector(".js-phone-input");

    // فتح/إغلاق
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      wrapper.classList.toggle("is-open");
    });

    // اختيار دولة
    options.forEach((option) => {
      option.addEventListener("click", () => {
        const code = option.dataset.code;
        const flag = option.querySelector("img").src;
        const text = option.textContent.trim();

        // تحديث UI
        flagEl.src = flag;
        codeEl.textContent = code;

        // hidden input
        hiddenInput.value = code;

        // إغلاق
        wrapper.classList.remove("is-open");
      });
    });
  });

  // إغلاق عند الضغط خارج
  document.addEventListener("click", () => {
    document
      .querySelectorAll(".js-phone-select")
      .forEach((el) => el.classList.remove("is-open"));
  });
}
