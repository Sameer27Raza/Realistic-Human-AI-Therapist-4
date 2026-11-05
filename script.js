
const form = document.querySelector(".form-container form");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function() {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
});
