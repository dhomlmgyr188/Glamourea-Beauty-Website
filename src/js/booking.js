import { initDatePicker } from "./date-picker.js";
import { initTimeSlots } from "./time-slots.js";
import { initBookingServices } from "./booking-services.js";

export function initBooking() {
  initDatePicker();
  initTimeSlots();
  initBookingServices();
}