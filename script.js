function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form--message--error");
    messageElement.class.list.add('form__message--${type}');
}

function setInputError(inoutElement, message) {
    inputElement.classList.add("form__input--error", "form--input--error");
    inoutElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError() {
    inputElement.classList.remove('form__input--error');
    inputElement.parentElement.querySelector(".form__input-error-message").textContent ="";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login");
    const createAccount = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

        setFormMessage(loginForm, "success", "You're logged in!");
    });
    
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e =>{
        e.preventDefault();

        setFormMEssage(loginForm, "error", "invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value < 10) {
                setInputError(inputELement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e =>{
            clearInputError(inputELement);
        });
    });
});