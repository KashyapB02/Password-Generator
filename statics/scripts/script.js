console.log("Hello, JavaScript");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+=|";

const passwordText = document.getElementById("passwordText");
const passwordCopyBtn = document.getElementById("passwordCopyBtn");
const passwordLength = document.getElementById("passwordLength");
const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numbersCheckbox = document.getElementById("numbersCheckbox");
const symbolCheckbox = document.getElementById("symbolCheckbox");
const passwordGeneratorForm = document.getElementById("passwordGeneratorForm");
const checkboxes = document.querySelectorAll("input[type=\"checkbox\"]");
const modal = document.getElementById("main__modal");
const modalContainer = document.getElementById("main__modal__container");
const modalMessage = document.getElementById("main__modal__container__messageText");
const modalCloseBtn = document.getElementById("main__modal__closeBtn");

modalContainer.onclick = function (e) {
    e.stopPropagation();
}

const getPasswordCharacters = (characterType) => {
    return characterType[Math.floor(Math.random() * (characterType.length))];
}

const getCharacter = () => {
    const passwordArray = [];
    if (uppercaseCheckbox.checked) {
        passwordArray.push(getPasswordCharacters(upperLetters))
    }

    if (lowercaseCheckbox.checked) {
        passwordArray.push(getPasswordCharacters(lowerLetters))
    }

    if (numbersCheckbox.checked) {
        passwordArray.push(getPasswordCharacters(numbers))
    }

    if (symbolCheckbox.checked) {
        passwordArray.push(getPasswordCharacters(symbols))
    }

    if (passwordArray.length === 0) {
        return "";
    }

    let character = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    return character;
}

const generatePassword = () => {
    const passLength = passwordLength.value;
    let password = "";

    for (let i = 0; i < passLength; i++) {
        const character = getCharacter();
        password += character;
    }

    passwordText.innerText = password;
    if (passwordText.classList.contains("textSelectDisabled")) {
        passwordText.classList.remove("textSelectDisabled");
    }
}

const activateModal = (message) => {
    modalMessage.innerText = message;
    modal.classList.remove("modalClosed");

    modal.onclick = function () {
        modal.classList.add("modalClosed");
    }

    modalCloseBtn.onclick = function () {
        modal.classList.add("modalClosed");
    }
}

passwordCopyBtn.onclick = function () {
    const textarea = document.createElement("textarea");
    let password = passwordText.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();

    if (document.execCommand("copy")) {
        passwordCopyBtn.innerText = "COPIED"
        passwordCopyBtn.setAttribute("disabled", "");
    } else {
        alert("Error");
    }

    textarea.remove();
}

passwordGeneratorForm.onsubmit = (e) => {
    e.preventDefault();
    let emptyCheckboxes = true;

    if (passwordLength.value === "") {
        activateModal("Password length cannot be empty.");
        return;
    }

    for (let elements of checkboxes) {
        if (elements.checked) {
            emptyCheckboxes = false;
            break;
        }
    }

    if (emptyCheckboxes) {
        activateModal("Please check atleast one checkbox to generate password.");
        return;
    }

    if ((parseInt(passwordLength.value) < 6) || (parseInt(passwordLength.value) > 16)) {
        passwordLength.value = "8";
        activateModal("Password length must be between 6 to 16.\n(Default value is 8)");
        return;
    }

    passwordCopyBtn.innerText = "COPY";
    passwordCopyBtn.style.display = "block";
    passwordCopyBtn.removeAttribute("disabled");
    generatePassword();
}