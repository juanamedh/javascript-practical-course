function computeArithmeticAverage(list) {
    const additionList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const averageList = additionList / list.length;
    return averageList;
}

function isPair(numberX) {
    if (numberX % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function sortList (list) {
    list = list.sort(function(a,b) {
        return a - b;
    });
    return list;
}

const list1 = [
    100,
    200,
    500,
    800,
    400000000,
];

function computeArithmeticMedian (list) {
    list = sortList(list);
    const halfList = parseInt(list.length / 2);

    let median;
    
    if (isPair(list.length)) {
        const element1 = list[halfList - 1];
        const element2 = list[halfList];
    
        const averageElemenmts1and2 = computeArithmeticAverage([
            element1,
            element2,
        ]);
    
        median = averageElemenmts1and2;
    } else {
        median = list[halfList];
                          
    }
    return median;
}

