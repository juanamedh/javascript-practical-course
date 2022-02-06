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

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let discount;
    
    switch(couponValue) {
        case coupons[0]:
            discount = 15;
        break;
        case coupons[1]:
            discount = 30;
        break;
        case coupons[2]:
            discount = 50;
        break;
    }

    const discountedPrice = calculateDiscountedPrice(priceValue, couponValue);
    
    const finalPrice = document.getElementById("FinalPrice");
    finalPrice.innerText = "The Discounted price is: $"  + discountedPrice;
}

// console.log({
//     originalPrice,
//     discount,
//     discountedPricePercentage,
//     discountedPrice,
// });