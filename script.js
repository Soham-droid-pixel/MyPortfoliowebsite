document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    }
});
  
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbwOOWphfpvDfKP_8QxViBCjx6qYcFKthuwisJcHj_8N_U0b1VU45HN2IbkX9vRdRwm7aA/exec", { // Replace with your Google Apps Script URL
        method: "POST",
        body: new URLSearchParams(formData),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded" // Ensures correct format
        }
    })
    .then(response => response.json()) // Parse JSON response
    .then(data => {
        document.getElementById("responseMessage").innerText = 
            data.status === "success" ? "Form submitted successfully!" : "Error submitting form.";
        if (data.status === "success") {
            document.getElementById("contactForm").reset(); // Reset form only on success
        }
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Network error. Try again.";
    });
});
document.getElementById('email-link').addEventListener('click', function() {
    window.location.href = 'mailto:sohamkalg@gmail.com';
});
