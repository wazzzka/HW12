function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
  }
}

function getProductNumber() {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number'));
  } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));

  return productNumber;
}

function getProductAmount(maxValue) {
  const productToBuy = products[productNumber - 1];
  let productAmount;
  do {
    productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
  } while (productAmount < 1 || productAmount > maxValue || isNaN(productAmount));

  return productAmount;
}

function calculatePrice() {
  return productToBuy.price * productAmount;
}

function calculateDiscountPrice(price) {
  return price - price * discount;
}

function showFinalPrice(price, isDiscountAvailable) {
  if (isDiscountAvailable) {
    console.log(`Congrats! You get discount. Your final price is ${finalPrice}`)
  } else {
    console.log(`The final price is ${price}`);
  }
}


const discount = 0.2;
const discountStartsFrom = 10000;

showProducts();

const productNumber = getProductNumber();
const productToBuy = products[productNumber - 1];
const productAmount = getProductAmount(productToBuy.availability);
const price = calculatePrice();
const isDiscountAvailable = price >= discountStartsFrom;
const finalPrice = isDiscountAvailable ? calculateDiscountPrice(price) : price;

showFinalPrice(finalPrice, isDiscountAvailable);