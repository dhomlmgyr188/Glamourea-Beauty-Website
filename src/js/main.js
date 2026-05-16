// Import our custom CSS
import "../sass/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import js form another files
import { initFormSteps } from "./form-steps.js";
import { initModal } from "./modal.js";
import { initPasswordToggle } from "./toggle-password.js";
import { initNavbar } from "./navbar.js";
import { initBooking } from "./booking.js";
import { initTextareaCounter } from "./textarea-counter.js";
import { initRadioToggle } from "./radio-toggle.js";
import { initUploadPreview } from "./upload-preview.js";
import { initSelect } from "./select.js";
import { initPhoneSelect } from "./phone-select.js";


document.addEventListener("DOMContentLoaded", () => {
  initFormSteps();
  initModal();
  initPasswordToggle();
  initNavbar();
  initBooking();
  initTextareaCounter();
  initRadioToggle();
  initUploadPreview();
  initSelect();
  initPhoneSelect();
});