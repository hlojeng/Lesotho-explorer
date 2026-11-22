const form = document.getElementById("contactForm");
const statusMessage =
document.getElementById("formMessage");

form.addEventLister("submit", function(event) {
	// body...
	event.preventDefault();

	const form = event.target;

	let name =
	document.getElementById("name").value.trim();
	let email = 
	document.getElementById("email").value.trim();
	let message = 
	document.getElementById("message").value.trim();

	let statusMessage =
	document.getElementById("formMessage")

	if (name  || email  || userMessage) {
		statusMessage.style.color = "red";
		statusMessage.textContent = "Please fill in all required fields";
		return;
	}
	if (!email.includes("@") || !email.includes(".")) {
		statusMessage.style.color = "red";
		statusMessage.textContent = "Please enter a valid email address!"
		return;
	}

	statusMessage.style.color = "green";
	statusMessage.textContent = "Thank you! Your message has been received";
	statusMessage.style.display = "block";
	statusMessage.style.fontweight = "bold"

	form.reset();
}