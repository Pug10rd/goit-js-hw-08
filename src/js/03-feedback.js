import throttle from 'lodash.throttle';

const formInput = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY = "feedback-form-state";

formInput.addEventListener('input', throttle(emailFieldInput, 500));

formInput.addEventListener('submit', formSubmit);

dataFieldSaved();

function emailFieldInput() {

    const { elements: { email, message } } = formInput;
    const userData = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
    
}

function dataFieldSaved() {
    const { elements: { email, message } } = formInput;
    const saveData = localStorage.getItem(LOCALSTORAGE_KEY);
    const storedData = JSON.parse(saveData);

    if (saveData) {
        email.value = storedData.email;
        message.value = storedData.message;
    }
}

function formSubmit(e) {
    const result = localStorage.getItem(LOCALSTORAGE_KEY);
    console.log(result);
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}