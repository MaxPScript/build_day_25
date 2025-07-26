// Starter JS
console.log("App initialized");
// Set the target date (Builder's Day - adjust as needed)
const targetDate = new Date("2025-08-09T09:30:00").getTime();

function updateTimer() {
	const now = new Date().getTime();
	const distance = targetDate - now;

	// Calculate days, hours, minutes, seconds
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Update DOM
	document.getElementById("days").textContent = days
		.toString()
		.padStart(2, "0");
	document.getElementById("hours").textContent = Math.floor(hours)
		.toString()
		.padStart(2, "0");
	document.getElementById("minutes").textContent = Math.floor(minutes)
		.toString()
		.padStart(2, "0");
	document.getElementById("seconds").textContent = Math.floor(seconds)
		.toString()
		.padStart(2, "0");

	// Stop timer when reached
	if (distance < 0) {
		clearInterval(timerInterval);
		document.querySelector(".timer").innerHTML =
			"<span>Event started! 🎉</span>";
	}
}

// Update every second
const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Initial call
