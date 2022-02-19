
function computeArithmeticAverage(list) {
    // let additionList = 0;
    // for (let i = 0; i < list.length; i++) {
    // additionList = additionList + list[i];
    // }

    const additionList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );

    const averageList = additionList / list.length;

    return averageList;
}