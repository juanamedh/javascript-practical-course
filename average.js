
function computeArithmeticAverage(list) {
    let additionList = 0;
    for (let i = 0; i < list.length; i++) {
    additionList = additionList + list[i];
    }

    const averageList = additionList / list.length;
    
    return averageList;
}