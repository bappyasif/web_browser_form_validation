let email = document.querySelector("#e-mail");
let emailError = document.querySelector("#em-error");

let country = document.querySelector("#country");
let countryError = document.querySelector("#cn-error");

let zipCode = document.querySelector("#zip-code");
let zipError = document.querySelector("#zc-error");

let passCode = document.querySelector("#pass-code");
let passwordError = document.querySelector("#pc-error");

let confirmPassword = document.querySelector("#code-confirm");
let confirmError = document.querySelector("#cc-error");

let button = document.querySelector("button");
button.addEventListener("click", evt => {
    evt.preventDefault();
    handleFormEachInput();
});

let form = document.querySelector("form");
form.addEventListener("input", handleFormEachInput);

function handleFormEachInput() {
    // console.log(email.validity.valid, country.validity.valid);
    let validEmail = email.validity.valid;
    let validCountry = country.validity.valid;
    let validZip = zipCode.validity.valid;
    let validPassword = passCode.validity.valid;
    let validConfirm = confirmPassword.validity.valid;

    // evt.preventDefault();

    if(validEmail && validCountry && validZip && validPassword && validConfirm) {
        // evt.preventDefault();
        alert("High 5!!");
        removeInputs([email, country, zipCode, passCode, confirmPassword]);
    } else {
        // evt.preventDefault();
        errorMessage(email, emailError);
        errorMessage(country, countryError);
        errorMessage(zipCode, zipError);
        errorMessage(passCode, passwordError);
        errorMessage(confirmPassword, confirmError);
    }
}

function removeInputs(nodes) {
    [...nodes].forEach(node=>node.value = "");
}

function removeMessage(node, errorSpan) {
    node.setCustomValidity("");
    errorSpan.textContent = "";
    errorSpan.classList.remove("error-active");
}

function errorMessage(node, errorSpan) {
    if(node.validity.valueMissing) {
        node.setCustomValidity("Can't be left empty");
        errorSpan.textContent = node.validationMessage;
    } else if(node.validity.typeMismatch) {
        node.setCustomValidity("please enter correct type");
        errorSpan.textContent = node.validationMessage;
    } else if(node.validity.patternMismatch) {
        node.setCustomValidity("please match expected pattern");
        errorSpan.textContent = node.validationMessage;
    } else if(node.validity.tooShort) {
        node.setCustomValidity("it's way too short");
        errorSpan.textContent = node.validationMessage;
    } else if(node.validity.tooLong) {
        node.setCustomValidity("it's way too long");
        errorSpan.textContent = node.validationMessage;
    } else {
        removeMessage(node, errorSpan);
    }
    errorSpan.classList.add("error-active");
    // setTimeout(() => removeMessage(errorSpan), 4400);
}



/**
 * 
 * 
 form.addEventListener("input", evt => {
    // console.log(email.validity, country.validity);
    let validEmail = email.validity.valid;
    let validCountry = country.validity.valid;
    let validZip = zipCode.validity.valid;
    let validPassword = passCode.validity.valid;
    let validConfirm = confirmPassword.validity.valid;

    if(validEmail && validCountry && validZip && validPassword && validConfirm) {
        // evt.preventDefault();
    } else {
        evt.preventDefault();
        errorMessage(email, emailError);
        errorMessage(country, countryError);
        errorMessage(zipCode, zipError);
        errorMessage(passCode, passwordError);
        errorMessage(confirmPassword, confirmError);
    }
});

function removeMessage(errorSpan) {
    errorSpan.textContent = "";
}

function errorMessage(node, errorSpan) {
    if(node.validity.valueMissing) {
        errorSpan.textContent = "Can't be left empty";
    } else if(node.validity.typeMismatch) {
        errorSpan.textContent = "please enter correct type";
    } else if(node.validity.patternMismatch) {
        errorSpan.textContent = "please match expected pattern";
    } else if(node.validity.tooShort) {
        errorSpan.textContent = "it's way too short";
    } else if(node.validity.tooLong) {
        errorSpan.textContent = "it's way too long";
    } else {
        removeMessage(errorSpan);
    }
    // setTimeout(() => removeMessage(errorSpan), 4400);
}
 */