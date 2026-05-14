export function initBooking() {
  const bookingDate = document.getElementById("date");
  if (!bookingDate) return;
  const today = new Date().toISOString().split("T")[0];

  bookingDate.value = today;

  bookingDate.min = today;

}
