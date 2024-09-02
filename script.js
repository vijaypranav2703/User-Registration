document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Form validation logic
    let isValid = true;

    // Name validation
    const name = document.getElementById("fullName").value;
    const nameError = document.getElementById("nameError");
    if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.style.display = "block";
        isValid = false;
    } else {
        nameError.style.display = "none";
    }

    // Email validation
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Phone validation
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");
    if (!/^[0-9]{10}$/.test(phone)) {
        phoneError.style.display = "block";
        isValid = false;
    } else {
        phoneError.style.display = "none";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password.length < 8) {
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (password !== confirmPassword) {
        confirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        confirmPasswordError.style.display = "none";
    }

    if (isValid) {
        // Show success animation
        document.querySelector(".container").style.display = "none";
        document.getElementById("success-animation").classList.remove("hidden");
        document.getElementById("success-animation").style.display = "block";
    }
});
