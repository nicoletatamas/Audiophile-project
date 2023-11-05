const listUsers = [
  {
    userName: 'nicoleta',
    password: '12345',
  },
  {
    userName: 'ana',
    password: '123456',
  },
  {
    userName: 'maria',
    password: '123457',
  },
];

localStorage.setItem('users', JSON.stringify(listUsers))

const buttonLogIn = document.querySelector('#submitButton')
const userNameInput = document.querySelector('#userName')
const passwordInput = document.querySelector('#password')

function logIn (e) {
  e.preventDefault();
  const userName = userNameInput.value;
  const password = passwordInput.value;

  const foundUser = listUsers.find((user) => {
    return user.userName === userName && user.password === password;
  });
    if (foundUser) {
      location.href = "home.html";
    } else {
      console.log('user nu exista')
    }
}

buttonLogIn.addEventListener('click', logIn)
 
