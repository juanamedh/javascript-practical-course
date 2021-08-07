const originalPrice = 100;
const discount = 15;

// const discountedPricePercentage = 100 - discount;
// const discountedPrice = (originalPrice * discountedPricePercentage)/100;

function calculateDiscountedPrice(price, discount) {
    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage)/100;
    
    return discountedPrice;
}

// console.log({
//     originalPrice,
//     discount,
//     discountedPricePercentage,
//     discountedPrice,
// });