const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue - 1;
});

plusButton.addEventListener('click', event => {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  inputField.value = currentValue + 1;
});

const xx99MarkI = document.querySelector('.xx99MarkI');

xx99MarkI.addEventListener('click', () => {
    location.href = "prodHeadphones2.html"; 
})

const HeadphonesXX59 = document.querySelector('.HeadphonesXX59');

HeadphonesXX59.addEventListener('click', () => {
    location.href = "prodHeadphones3.html"; 
})

const zx9Speaker = document.querySelector('.zx9Speaker');

zx9Speaker.addEventListener('click', () => {
    location.href = "prodSpeakers1.html"; 
})


const buttonAddToCart = document.querySelector('.buttonAddToCart')

buttonAddToCart.addEventListener('click', event => {
 console.log(event.currentTarget.id);
 const description = document.querySelector('.description')
 const title = description.querySelector('h1').innerHTML
 console.log(title)
 const input = description.querySelector('#input')
 input.value
 console.log( input.value)
 const price = description.querySelector('span').innerHTML
 console.log(price)
 


 const itemLocalStorage = localStorage.getItem("CartProducts")
 console.log(itemLocalStorage)
 const product1 = {
  title: title,
  numberProduct: input.value,
  price: price,

 } 

 if (itemLocalStorage === null) {
  localStorage.setItem('CartProducts', JSON.stringify([product1]))
 } else {
  const newProduct = JSON.parse(itemLocalStorage)
  console.log(itemLocalStorage)
  newProduct.push(product1);
  //se adauga elementul in localStorage
  localStorage.setItem('CartProducts', JSON.stringify(newProduct))
 }
 
 
 localStorage.setItem(event.currentTarget.id, JSON.stringify(product1))

})


localStorage.getItem('CartProducts')
const newArray = JSON.parse(localStorage.getItem('CartProducts'))
console.log(newArray)
newArray.forEach(product=> {
  console.log(product.title)
});