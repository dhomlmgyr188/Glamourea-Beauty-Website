export function initBooking() {
  const bookingDate = document.getElementById("date");

  const today = new Date().toISOString().split("T")[0];

  bookingDate.value = today;

  bookingDate.min = today;
  
}
