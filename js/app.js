const discount = 0.2;
const discountStartsFrom = 10000;

showProducts();

const productNumber = getNumericValue(products.length, 'Enter product number');
const productToBuy = products[productNumber - 1];
const productAmount = getNumericValue(productToBuy.availability, 'Enter amount of products you wanna buy');
const price = calculatePrice();
const isDiscountAvailable = price >= discountStartsFrom;
const finalPrice = isDiscountAvailable ? calculateDiscountPrice(price) : price;

showFinalPrice(finalPrice, isDiscountAvailable);