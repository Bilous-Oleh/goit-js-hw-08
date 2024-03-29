import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const feedbackForm = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(handleInputForm, 500));
formEl.addEventListener('submit', handleSubmitForm);

fillForm();

function handleInputForm(event) {
  event.preventDefault();

  const { name, value } = event.target;

  feedbackForm[name] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbackForm));
}

function handleSubmitForm(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);

  console.log(feedbackForm);
}

function fillForm() {
  const savedForm = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (savedForm) {
    formEl.email.value = savedForm.email;
    formEl.message.value = savedForm.message;
  }
}
