const summary = document.querySelector('.summary')
const cartSummary = document.querySelector('.cartSummary');



localStorage.getItem('CartProducts')
const newArray = JSON.parse(localStorage.getItem('CartProducts'))
console.log(newArray)


for (let i = 0; i < newArray.length; i++) {
    const productSummary = document.createElement('div');
    summary.appendChild(productSummary);
    const titleProduct = document.createElement('h4')
    titleProduct.textContent = newArray[i].title;
    productSummary.appendChild(titleProduct);
    const priceProduct = document.createElement('p')
    priceProduct.textContent = "$" + newArray[i].price + "  x" + newArray[i].numberProduct;
    productSummary.appendChild(priceProduct)
    


}
const prices = newArray.map((product) => parseInt(product.price) * parseInt(product.numberProduct))
console.log(prices)
const total = prices.reduce((acc, curr) => acc + curr)
console.log('total: ', total)

const totalSummary = document.createElement('h4')
console.log(totalSummary)
totalSummary.textContent = 'TOTAL: ' + "$" + total;
cartSummary.appendChild(totalSummary);

const shipping = document.createElement('h4');
const priceShipping = 50;
shipping.textContent = "SHIPPING: $" + priceShipping;
cartSummary.appendChild(shipping)

const vat = document.createElement('h4');
const priceVat = 1079;
vat.textContent = "VAT (INCLUDED): $" + priceVat;
cartSummary.appendChild(vat);

const grandTotal = document.createElement('h4');
let totalCart = total + priceShipping + priceVat;
grandTotal.textContent = "GRAND TOTAL: $" + totalCart;
cartSummary.appendChild(grandTotal);

const buttonContinuePay = document.createElement('button')
buttonContinuePay.textContent = "CONTINUE & PAY";
cartSummary.appendChild(buttonContinuePay);

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const textModal = document.createElement('h1')
textModal.textContent = "THANK YOU FOR YOUR ORDER"
modal.appendChild(textModal);
const paragraphModal = document.createElement('p')
paragraphModal.textContent = "You will receive an email confirmation shortly."
modal.appendChild(paragraphModal);
const buttonBackHome = document.createElement("button")
buttonBackHome.textContent = 'BACK TO HOME';
modal.appendChild(buttonBackHome);

buttonContinuePay.addEventListener('click', () => {

    modal.style.display = "block";
    overlay.style.display = "block"

})

buttonBackHome.addEventListener ('click', () => {
    modal.style.display = "none";
    overlay.style.display = "none"
    localStorage.removeItem('CartProducts');
    location.href = "home.html"; 

})
const paymentDetails = document.querySelector('.payment-details');
const cardMoney = document.querySelector('#e-money');
const cashMoney = document.querySelector('#cash');

const cardDetails = document.querySelector('.cardDetails')
const cashDetails = document.querySelector('.cashDetails')

cardMoney.addEventListener('click', event => {
    
    if (event.target.checked) {
        cardDetails.style.display = 'block';
        cashDetails.style.display = 'none';
      } 
    
});

cashMoney.addEventListener('click', event => {
    
    if (event.target.checked) {
        cashDetails.style.display = 'block';
        cardDetails.style.display = 'none';
    }
    
});


