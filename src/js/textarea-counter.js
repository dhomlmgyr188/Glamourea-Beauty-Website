export function initTextareaCounter() {
  const textareas = document.querySelectorAll(".c-textarea");

  if (!textareas.length) return;

  textareas.forEach((textarea) => {
    const wrapper = textarea.closest(".c-textareas");

    if (!wrapper) return;

    const countEl = wrapper.querySelector(".c-textarea__count");

    const maxEl = wrapper.querySelector(".c-textarea__max");

    const maxLength = textarea.maxLength;

    // SET MAX VALUE
    if (maxEl) {
      maxEl.textContent = maxLength;
    }

    // UPDATE COUNTER
    function updateCounter() {
      const currentLength = textarea.value.length;

      if (countEl) {
        countEl.textContent = currentLength;
      }
    }

    // INPUT EVENT
    textarea.addEventListener("input", updateCounter);

    // INITIAL UPDATE
    updateCounter();
  });
}
