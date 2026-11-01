// enquiry.js
// Checks the enquiry form, then shows a response about cost and availability

const form = document.getElementById("enquiryForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const typeInput = document.getElementById("type");
const guestsInput = document.getElementById("guests");
const dateInput = document.getElementById("date");
const messageInput = document.getElementById("message");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const typeError = document.getElementById("typeError");
const guestsError = document.getElementById("guestsError");
const dateError = document.getElementById("dateError");
const methodError = document.getElementById("methodError");
const messageError = document.getElementById("messageError");
const termsError = document.getElementById("termsError");

const responseBox = document.getElementById("response");


// shows a message under a field and puts a red border on the field
function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add("error-input");
}

// removes the message and the red border
function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.classList.remove("error-input");
}

// works out how many days there are from today to the chosen date
function daysUntil(dateText) {
    const chosen = new Date(dateText + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((chosen - today) / 86400000);
}


form.addEventListener("submit", function (event) {
    // the form is handled here, so the page must not reload
    event.preventDefault();

    let isValid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const type = typeInput.value;
    const guests = Number(guestsInput.value);
    const message = messageInput.value.trim();
    const selectedMethod = document.querySelector('input[name="contactMethod"]:checked');

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

    // phone: 10 digits and it must start with 0
    if (phone === "") {
        showError(phoneInput, phoneError, "Phone number is required");
        isValid = false;
    } else if (phone.length !== 10 || isNaN(phone) || phone.charAt(0) !== "0") {
        showError(phoneInput, phoneError, "Enter 10 digits with no spaces, starting with 0");
        isValid = false;
    } else {
        clearError(phoneInput, phoneError);
    }

    // type of enquiry
    if (type === "") {
        showError(typeInput, typeError, "Please choose the type of enquiry");
        isValid = false;
    } else {
        clearError(typeInput, typeError);
    }

    // number of people and date are only needed for cakes and catering
    if (type === "custom-cake" || type === "catering") {

        if (guestsInput.value === "") {
            showError(guestsInput, guestsError, "Number of people is required");
            isValid = false;
        } else if (guests < 1 || guests > 500 || guests !== Math.round(guests)) {
            showError(guestsInput, guestsError, "Enter a whole number from 1 to 500");
            isValid = false;
        } else {
            clearError(guestsInput, guestsError);
        }

        if (dateInput.value === "") {
            showError(dateInput, dateError, "Please choose the date you need the order");
            isValid = false;
        } else if (daysUntil(dateInput.value) < 0) {
            showError(dateInput, dateError, "The date cannot be in the past");
            isValid = false;
        } else {
            clearError(dateInput, dateError);
        }

    } else {
        clearError(guestsInput, guestsError);
        clearError(dateInput, dateError);
    }

    // contact method (radio buttons)
    if (!selectedMethod) {
        methodError.textContent = "Choose how we should contact you";
        isValid = false;
    } else {
        methodError.textContent = "";
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

    // checkbox
    if (!termsInput.checked) {
        showError(termsInput, termsError, "You must agree to be contacted");
        isValid = false;
    } else {
        clearError(termsInput, termsError);
    }

    // if everything is correct, work out the response
    if (isValid) {
        let orderName = "general enquiry";
        let pricePerPerson = 0;
        let noticeDays = 0;

        if (type === "custom-cake") {
            orderName = "custom cake";
            pricePerPerson = 40;
            noticeDays = 3;
        } else if (type === "catering") {
            orderName = "catering order";
            pricePerPerson = 85;
            noticeDays = 7;
        }

        const method = selectedMethod.value.toLowerCase();
        let response = "Thank you, " + name + ". We received your " + orderName + " enquiry.";

        if (type === "general") {
            response = response + "\nA member of our team will reply by " + method + " within one working day.";
        } else if (daysUntil(dateInput.value) >= noticeDays) {
            const cost = guests * pricePerPerson;
            response = response + "\nAvailability: yes, we can do this on " + dateInput.value + ".";
            response = response + "\nEstimated cost: R" + cost + " for " + guests + " people (R" + pricePerPerson + " per person).";
            response = response + "\nWe will confirm the final price by " + method + " within one working day.";
        } else {
            response = response + "\nAvailability: sorry, a " + orderName + " needs at least " + noticeDays + " days notice.";
            response = response + "\nPlease choose a date that is at least " + noticeDays + " days from today and send the form again.";
        }

        responseBox.textContent = response;
        responseBox.hidden = false;
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

guestsInput.addEventListener("input", function () {
    clearError(guestsInput, guestsError);
});

dateInput.addEventListener("input", function () {
    clearError(dateInput, dateError);
});

messageInput.addEventListener("input", function () {
    clearError(messageInput, messageError);
});

termsInput.addEventListener("input", function () {
    clearError(termsInput, termsError);
});

const radios = document.querySelectorAll('input[name="contactMethod"]');
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
        methodError.textContent = "";
    });
}