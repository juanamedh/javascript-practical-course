const salariesCol = colombia.map(
    function(person) {
        return person.salary;
    }
);

const salariesColSorted = salariesCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

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

function salariesMedian(list) {
    const half = parseInt(list.lenght / 2);
    
    if (isPair(list.lenght)) {
        const personHalf1 = list[half - 1];
        const personHalf2 = list[half];

        const median = computeArithmeticAverage([personHalf1, personHalf2]);
        return median;
    } else {
        const personHalf = list[half];
        return personHalf;
    }
};

console.log(
    salariesMedian(salariesColSorted)
    );