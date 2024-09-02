// Get references to the form and input elements from the DOM by their IDs
const form = document.getElementById("form");
const firstname_input = document.getElementById("firstname-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password");
const error_message = document.getElementById("error-message");

// Function to validate the signup form
// It takes the values from the inputs as parameters
function getSignupFormErrors(firstname, email, password, repeatPassword) {
    let errors = []; // Array to hold error messages

    // Check if the firstname is empty or null
    if (firstname === "" || firstname === null) {
        errors.push("Firstname can't be empty");                    // Add an error message
        firstname_input.parentElement.classList.add("incorrect");   // Add the 'incorrect' class to highlight the error
    }

    // Check if the email is empty or null
    if (email === "" || email === null) {
        errors.push("Email can't be empty");                        // Add an error message
        email_input.parentElement.classList.add("incorrect");       // Add the 'incorrect' class to highlight the error
    }

    // Check if the password is empty or null
    if (password === "" || password === null) {
        errors.push("Password can't be empty");                     // Add an error message
        password_input.parentElement.classList.add("incorrect");    // Add the 'incorrect' class to highlight the error
    }

    // Check if the password length is less than 8 characters
    if (password.length < 8) {
        errors.push("Password must have at least 8 characters");    // Add an error message
        password_input.parentElement.classList.add("incorrect");    // Add the 'incorrect' class to highlight the error
    }

    // Check if the password and repeat password do not match
    if (password !== repeatPassword) {
        errors.push("Password does not match repeated password");           // Add an error message
        password_input.parentElement.classList.add("incorrect");            // Add the 'incorrect' class to highlight the error
        repeat_password_input.parentElement.classList.add("incorrect");     // Add the 'incorrect' class to highlight the error
    }

    // Return the array of error messages
    return errors;
}

// Function to validate the login form
// It takes the email and password as parameters
function getLoginFormErrors(email, password) {
    let errors = []; // Array to hold error messages

    // Check if the email is empty or null
    if (email === "" || email === null) {
        errors.push("Email can't be empty");                        // Add an error message
        email_input.parentElement.classList.add("incorrect");       // Add the 'incorrect' class to highlight the error
    }

    // Check if the password is empty or null
    if (password === "" || password === null) {
        errors.push("Password can't be empty");                     // Add an error message
        password_input.parentElement.classList.add("incorrect");    // Add the 'incorrect' class to highlight the error
    }

    // Return the array of error messages
    return errors;
}

// Array of all input elements to attach 'input' event listeners
const allInputs = [firstname_input, email_input, password_input, repeat_password_input];

// Attach an event listener to each input element
allInputs.forEach((input) => {
    if (input) {  // Check if the input element exists
        input.addEventListener("input", () => {

            // If the input's parent element has the 'incorrect' class
            if (input.parentElement.classList.contains("incorrect")) {

                // Remove the 'incorrect' class to clear the error state
                input.parentElement.classList.remove("incorrect");

                // Clear the error message
                error_message.innerText = " ";
            }
        });
    } 
})

// Attach a 'submit' event listener to the form
form.addEventListener("submit", (evt) => {
    let errors = []; // Array to hold error messages

    // Check if firstname_input exists to determine if it's a signup form
    if (firstname_input) {
        // Validate the signup form
        errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value, repeat_password_input.value);
    }
    else {
        // Validate the login form
        errors = getLoginFormErrors(email_input.value, password_input.value);
    }

    // If there are errors, prevent the form from submitting and display the errors
    if (errors.length > 0) {
        evt.preventDefault();                           // Prevent form submission
        error_message.innerText = errors.join("\n ");    // Display the error messages by joining the error messages into a single string
    }
});