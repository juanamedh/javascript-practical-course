const list1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const list1Count = {};

list1.map(
    function (element) {

        if(list1Count[element]) {
            list1Count[element] += 1;
        } else {
            list1Count[element] = 1
        }

    }
);