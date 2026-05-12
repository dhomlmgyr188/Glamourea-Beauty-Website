// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

//import js form another files
import { initFormSteps } from "./form-steps.js";
import { initModal } from "./modal.js";
import { initTogglePassword } from "./toggle-password.js";
import { initNavbar } from "./navbar.js";
import { initSelect } from "./select.js";

document.addEventListener("DOMContentLoaded", () => {
  initFormSteps();
  initModal();
  initTogglePassword();
  initNavbar();
  initSelect();
});