const coupons = [
    "Nice_bargain",
    "Sweet_deal",
    "SUCH_A_STEAL",
];

function calculateDiscountedPrice(price, discount) {
    const discountedPricePercentage = 100 - discount;
    const discountedPrice = (price * discountedPricePercentage)/100;
    
    return discountedPrice;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const discountedPrice = calculateDiscountedPrice(priceValue, discountValue);
    
    const finalPrice = document.getElementById("FinalPrice");
    finalPrice.innerText = "The Discounted price is: $"  + discountedPrice;
}

// console.log({
//     originalPrice,
//     discount,
//     discountedPricePercentage,
//     discountedPrice,
// });