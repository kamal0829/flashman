const form = document.getElementById("bookingForm");
const summary = document.getElementById("summary");

const BASE_FARE = 600;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const from = document.getElementById("fromCity").value;
  const to = document.getElementById("toCity").value;
  const date = document.getElementById("journeyDate").value;
  const seats = Number(document.getElementById("seatCount").value);

  if (!from || !to || !date) {
    alert("Please fill all required fields.");
    return;
  }

  if (from === to) {
    alert("Source and destination must be different.");
    return;
  }

  const totalFare = seats * BASE_FARE;

  displaySummary(from, to, date, seats, totalFare);
});

function displaySummary(from, to, date, seats, fare) {
  summary.classList.remove("hidden");

  summary.innerHTML = `
    <h3>Booking Summary</h3>
    <p><strong>Route:</strong> ${from} → ${to}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Seats:</strong> ${seats}</p>
    <p><strong>Total Fare:</strong> ₹${fare}</p>
    <p style="color:green;font-weight:600;">✔ Seats Available</p>
  `;
}
