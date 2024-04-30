const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

const infoMessages = {
    username: document.getElementById('username-info'),
    email: document.getElementById('email-info'),
    password: document.getElementById('password-info')
    // Add more info messages as needed
};

const errorMessages = {
    username: document.getElementById('username-error'),
    email: document.getElementById('email-error'),
    password: document.getElementById('password-error')
    // Add more error messages as needed
};

const validateUsername = () => {
    const usernameValue = usernameInput.value.trim();
    if (usernameValue === '') {
        errorMessages.username.textContent = 'Username is required';
        errorMessages.username.classList.remove('success')
        return false;
    } else if (!/^[a-zA-Z0-9]{6,}$/.test(usernameValue)) {
        errorMessages.username.textContent = 'Username is Invalid';
        errorMessages.username.classList.remove('success')
        return false;
    } else {
        errorMessages.username.textContent = 'Username is valid';
        errorMessages.username.classList.add('success')
        return true;
    }
};

const validateEmail = () => {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        errorMessages.email.textContent = 'Email is required';
        errorMessages.email.classList.remove('success')
        return false;
    } else if (!emailRegex.test(emailValue)) {
        errorMessages.email.textContent = 'Invalid email format';
        errorMessages.email.classList.remove('success')
        return false;
    } else {
        errorMessages.email.textContent = 'Email is valid';
        errorMessages.email.classList.add('success')
        return true;
    }
};

const validatePassword = () => {
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === '') {
        errorMessages.password.textContent = 'Password is required';
        errorMessages.password.classList.remove('success')
        return false;
    } else if (passwordValue.length < 8) {
        errorMessages.password.textContent = 'Password must be at least 8 characters long';
        errorMessages.password.classList.remove('success')
        return false;
    } else {
        errorMessages.password.textContent = 'Password is valid';
        errorMessages.password.classList.add('success')
        return true;
    }
};

const validateForm = () => {
    const isValidUsername = validateUsername();
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    // Add more validations as needed
    if (isValidUsername && isValidEmail && isValidPassword) {
        submitBtn.classList.add("btn-primary")
    }
    return isValidUsername && isValidEmail && isValidPassword;
};

form.addEventListener('input', () => {
    submitBtn.disabled = !validateForm();
});

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for demonstration purposes
    if (validateForm()) {
        // Form is valid, proceed with submission

        alert('Form submitted successfully!');
    }
});