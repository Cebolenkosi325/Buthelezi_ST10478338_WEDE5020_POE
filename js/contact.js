// contact.js
// Checks the contact form, then puts the details into an email for the bakery

// the email address that receives the message
const recipient = "info@sunrisebakery.co.za";

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const typeInput = document.getElementById("type");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const typeError = document.getElementById("typeError");
const messageError = document.getElementById("messageError");

const responseBox = document.getElementById("response");
const thanksText = document.getElementById("thanksText");
const emailPreview = document.getElementById("emailPreview");
const sendLink = document.getElementById("sendLink");


function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("error-input");
}

function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("error-input");
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const type = typeInput.value;
    const message = messageInput.value.trim();

    // name
    if (name === "") {
        showError(nameInput, nameError, "Full name is required");
        isValid = false;
    } else if (name.length < 3) {
        showError(nameInput, nameError, "Name must have at least 3 characters");
        isValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    // email
    if (email === "") {
        showError(emailInput, emailError, "Email is required");
        isValid = false;
    } else if (!emailInput.checkValidity()) {
        showError(emailInput, emailError, "Enter a valid email address");
        isValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    // phone is optional, but if it is filled in it must be 10 digits starting with 0
    if (phone !== "" && (phone.length !== 10 || isNaN(phone) || phone.charAt(0) !== "0")) {
        showError(phoneInput, phoneError, "Enter 10 digits with no spaces, starting with 0");
        isValid = false;
    } else {
        clearError(phoneInput, phoneError);
    }

    // type of message
    if (type === "") {
        showError(typeInput, typeError, "Please choose the type of message");
        isValid = false;
    } else {
        clearError(typeInput, typeError);
    }

    // message
    if (message === "") {
        showError(messageInput, messageError, "Message is required");
        isValid = false;
    } else if (message.length < 10) {
        showError(messageInput, messageError, "Message must have at least 10 characters");
        isValid = false;
    } else if (message.length > 500) {
        showError(messageInput, messageError, "Message must be 500 characters or less");
        isValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    // if everything is correct, put the details into an email
    if (isValid) {
        let phoneText = phone;
        if (phone === "") {
            phoneText = "not given";
        }

        const subject = "Website message (" + type + ") from " + name;
        const body = "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone: " + phoneText + "\n" +
            "Message type: " + type + "\n\n" +
            message;

        const mailtoLink = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

        thanksText.textContent = "Thank you, " + name + ". Your email to " + recipient + " is ready to send.";
        emailPreview.textContent = "Subject: " + subject + "\n\n" + body;
        sendLink.href = mailtoLink;
        responseBox.hidden = false;

        // open the email app (the link above does the same if this does not work)
        window.location.href = mailtoLink;
    } else {
        responseBox.hidden = true;
    }
});


// remove an error as soon as the user starts fixing the field
nameInput.addEventListener("input", function () {
    clearError(nameInput, nameError);
});

emailInput.addEventListener("input", function () {
    clearError(emailInput, emailError);
});

phoneInput.addEventListener("input", function () {
    clearError(phoneInput, phoneError);
});

typeInput.addEventListener("input", function () {
    clearError(typeInput, typeError);
});

messageInput.addEventListener("input", function () {
    clearError(messageInput, messageError);
});