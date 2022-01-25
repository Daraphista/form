import "./style.css";

const content = document.querySelector("#content");
content.innerHTML = `
  <form action="">
    <label for="mail">
      <input type="email" id="mail" name="mail">
      <span class="error"></span>
    </label>
    <label for="country">
      <input type="text" id="country" name="country" pattern="[Pp]hilippines">
      <span class="error"></span>
    </label>
    <label for="zip-code">
      <input type="text" id="zip-code" name="zip-code" minlength="4" maxlength="5" pattern="^[0-9]*$">
      <span class="error"></span>
    </label>
    <label for="password">
      <input type="password" id="password" name="password" minlength="8">
      <span class="error"></span>
    </label>
    <label for="password-confirmation">
      <input type="password" id="password-confirmation" name="password-confirmation">
      <span class="error"></span>
    </label>
    <button>submit</button>
  </form>
`;

const form = document.querySelector("form");

const inputs = Array.from(document.querySelectorAll("input"));

const email = document.querySelector("#mail");
const emailError = document.querySelector("#mail + span.error");

const country = document.querySelector("#country");
const countryError = document.querySelector("#country + span.error");

const zipCode = document.querySelector("#zip-code");
const zipCodeError = document.querySelector("#zip-code + span.error");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#password + span.error");

const passwordConfirmation = document.querySelector("#password-confirmation");
const passwordConfirmationError = document.querySelector(
  "#password-confirmation + span.error"
);

const showError = (element, elementError, type) => {
  if (element.validity.valueMissing) {
    elementError.textContent = "Field cannot be empty";
  } else if (
    element.validity.typeMismatch ||
    element.validity.patternMismatch
  ) {
    elementError.textContent = `Please input a valid ${type}`;
  } else if (element.validity.tooShort) {
    elementError.textContent = `${type} should be at least ${element.minLength} characters long`;
  }

  emailError.className = "error active";
};

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    email.style.backgroundColor = "red";
    showError(email, emailError, "E-mail");
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else if (country.input != /[Pp]hilippines/) {
    console.log("lmao mali");
    country.style.backgroundColor = "red";
    countryError.textContent = "That's not a country";
    countryError.className = "error active";
  }
});

zipCode.addEventListener("input", (e) => {
  if (zipCode.validity.valid) {
    zipCodeError.textContent = "";
    zipCodeError.className = "error";
  } else {
    // if (zipCode.value != /^[0-9]*%/)
    showError(zipCode, zipCodeError, "Zip code");
  }
});

password.addEventListener("input", (e) => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError(password, passwordError, "password");
  }
});

passwordConfirmation.addEventListener("input", (e) => {
  if (passwordConfirmation.value == password.value) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationError.className = "error";
  } else {
    passwordConfirmationError.textContent = "This doesn't match your password";
    passwordConfirmationError.className = "error active";
  }
});

form.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault();
  if (inputs.every(() => true)) {
    alert("High Five!");
  }
});
