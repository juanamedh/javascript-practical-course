function computeArithmeticAverage(list) {
    const additionList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const averageList = additionList / list.length;
    return averageList;
}

const list1 = [
    100,
    200,
    500,
    400000000,
];

const halfList1 = parseInt(list1.length / 2);

function isPair(numberX) {
    if (numberX % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let median;

if (isPair(list1.length)) {
    const element1 = list1[halfList1 - 1];
    const element2 = list1[halfList1];

    const averageElemenmts1and2 = computeArithmeticAverage([
        element1,
        element2,
    ]);

    median = averageElemenmts1and2;
} else {
    median = list1[halfList1];
                      
}