//Helpers
function isPair(number) {
    return (number % 2 === 0);
};

function computeArithmeticAverage(list) {
    const additionList = list.reduce(
        function(accumulatedValue = 0, newElement) {
            return accumulatedValue + newElement;
        }
    );
    const averageList = additionList / list.length;
    return averageList;
};

const salariesCol = colombia.map(
    function(person) {
        return person.salary;
    }
);


//Median Calculator
function salariesMedian(list) {
    const half = parseInt(list.length / 2);

    if (isPair(list.length)) {
        const personHalf1 = list[half - 1];
        const personHalf2 = list[half];

        const median = computeArithmeticAverage([personHalf1, personHalf2]);
        return median;
    } else {
        const median = list[half];
        return median;
   }
};

//General Median
const salariesColSorted = salariesCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const generalMedianCol = salariesMedian(salariesColSorted);

// Top 10% Median
const spliceStart = parseInt((salariesColSorted.length / 100) * 90);
const spliceCount = salariesColSorted.length - spliceStart;
const top10SalariesCol =  salariesColSorted.splice(
    spliceStart,
    spliceCount,
);
const top10MedianCol = salariesMedian(top10SalariesCol);

console.log({
    generalMedianCol,
    top10MedianCol,
});