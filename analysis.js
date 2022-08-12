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