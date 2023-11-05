function checkUserName(e) {
  console.log(e.target.value.length);
  if (e.target.value.length === 4) {
    console.log('A trecut validarea');
  } else {
    e.target.classList.add('error');
  }
}

function checkNumberCase(caracter) {
  if (isNaN(caracter * 1)) {
    return false;
  }
  return true;
}

function checkUpperCase(caracter) {
  // c => C => c === C
  // C => C => C === C
  return !checkNumberCase(caracter) && caracter === caracter.toUpperCase();
}
function checkLowerCase(caracter) {
  return !checkNumberCase(caracter) && caracter === caracter.toLowerCase();
}

function checkPassword(e) {
  let hasNumber = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  const passwordValue = e.target.value;

  for (let i = 0; i < passwordValue.length; i++) {
    hasNumber = checkNumberCase(passwordValue[i]);
    if (hasNumber) {
      break;
    }
  }

  for (let i = 0; i < passwordValue.length; i++) {
    hasLowerCase = checkLowerCase(passwordValue[i]);
    if (hasLowerCase) {
      break;
    }
  }

  for (let i = 0; i < passwordValue.length; i++) {
    hasUpperCase = checkUpperCase(passwordValue[i]);
    if (hasUpperCase) {
      break;
    }
  }

  if (hasNumber && hasUpperCase && hasLowerCase) {
    e.target.classList.remove('error');
    console.log('A trecut validarea');
  } else {
    e.target.classList.add('error');
  }
  console.log(passwordValue);
}
function checkConfirmPassword(e) {
  const passwordInput = document.querySelector('#password');
  const paswordValue = passwordInput.value;
  console.log(e.target.value === paswordValue);
  if (e.target.value === paswordValue) {
    e.target.classList.remove('error');
    console.log('A trecut validarea');
  } else {
    e.target.classList.add('error');
  }
}

const userNameInput = document.querySelector('#userName');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const signUpButton = document.querySelector('#signUpButton')

userNameInput.addEventListener('blur', checkUserName);
passwordInput.addEventListener('blur', checkPassword);
confirmPasswordInput.addEventListener('input', checkConfirmPassword);

localStorage.getItem("users")
const listUsers = JSON.parse(localStorage.getItem("users"))


signUpButton.addEventListener('click', () => {

  e.preventDefault();
  location.href = "login.html";

})