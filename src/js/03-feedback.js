import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input[name="email"]');
const inputMessage = document.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const handlerInput = throttle(() => {
    const formState = {
      email: inputEmail.value,
      message: inputMessage.value
    };
    localStorage.setItem(storageKey, JSON.stringify(formState));
  }, 500);

form.addEventListener('input', handlerInput);


window.addEventListener('DOMContentLoaded', function() {
    const savedFormState = localStorage.getItem(storageKey);
    if (savedFormState) {
      const formState = JSON.parse(savedFormState);
      inputEmail.value = formState.email || '';
      inputMessage.value = formState.message || '';
    }
  });

  function handlerSubmit(evt) {
    evt.preventDefault();
    console.log('Submit', {
      email: inputEmail.value,
      message: inputMessage.value
    });
    localStorage.removeItem(storageKey);
    inputEmail.value = '';
    inputMessage.value = '';
  }

  form.addEventListener('submit', handlerSubmit);
