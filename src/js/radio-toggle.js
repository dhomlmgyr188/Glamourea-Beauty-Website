export function initRadioToggle() {
  const radios = document.querySelectorAll('input[name="hairType"]');

  const details = document.querySelector(".js-treatment-details");

  if (!radios.length || !details) return;

  // إخفاء بالبداية
  details.style.display = "none";

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (radio.value === "yes" && radio.checked) {
        details.style.display = "block";
      } else {
        details.style.display = "none";
      }
    });
  });
}
