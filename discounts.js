const originalPrice = 100;
const discount = 15;

const discountedPricePercentage = 100 - discount;
const discountedPrice = (originalPrice * discountedPricePercentage);

console.log({
    originalPrice,
    discount,
    discountedPricePercentage,
    discountedPrice,
});