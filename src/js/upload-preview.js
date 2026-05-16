export function initUploadPreview() {
  const uploads = document.querySelectorAll(".c-upload");

  if (!uploads.length) return;

  uploads.forEach((upload) => {
    const input = upload.querySelector(".c-upload__input");

    const image = upload.querySelector(".c-upload__image");

    const removeButton = upload.querySelector(".c-upload__remove");

    if (!input || !image || !removeButton) return;

    // UPLOAD IMAGE
    input.addEventListener("change", () => {
      const file = input.files[0];

      if (!file) return;

      const imageURL = URL.createObjectURL(file);

      image.src = imageURL;

      upload.classList.add("is-uploaded");
    });

    // REMOVE IMAGE
    removeButton.addEventListener("click", () => {
      input.value = "";

      image.src = "";

      upload.classList.remove("is-uploaded");
    });
  });
}
