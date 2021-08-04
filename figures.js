// Square's code
console.group("Square's");
const squareSide = 5;
console.log("The sides of the square are: " + squareSide + "cm");

function squarePerimeter(side) {
    return side * 4;
}
//console.log("The perimeter of teh square is: " + squarePerimeter + "cm");

function squareArea(side){
    return side ** 2;
}
//console.log("The area of the square is: " + squareArea + "cm^2");
console.groupEnd();

// Triangle's code
console.group("Triangle's");
// const triangleSide1 = 6;
// const triangleSide2 = 6;
// const triangleBase = 4;
// console.log(
//     "The sides of my triangle are: " 
//     + triangleSide1 
//     + "cm, " 
//     + triangleSide2 
//     + "cm, " 
//     + triangleBase 
//     + "cm"
// );

// const triangleHeight = 5.5;
// console.log("The tiangle's height is: " + triangleHeight + "cm");
function trianglePerimeter(triangleBase, triangleSide1, triangleSide2){
    return triangleBase + triangleSide1 + triangleSide2;
}
// console.log("The triangle's perimeter is: " + trianglePerimeter + "cm");
function triangleArea(triangleHeight, triangleBase){
    return (triangleBase * triangleHeight) / 2;
}
// console.log("The triangle's area is: " + triangleArea + "cm");

console.groupEnd();

// Circle's code
console.group("Circle's");
// Radius
// function circleRadius(radius)
// console.log("The circle's radius is: " + circleRadius + "cm");
// Diameter
function circleDiameter(radius){
    return radius * 2;
}
// console.log("The circle's diameter is: " + circleDiameter + "cm");
//PI
const PI = Math.PI;
console.log("PI number is considered as: " + PI);
//Perimeter
function circlePerimeter(radius){
    const diameter = circleDiameter(radius);
    return diameter * PI;
}
// console.log("The circle's perimeter is: " + circleDiameter);
// Area
function circleArea(radius){
    return (radius ** 2) * PI;
}
// console.log("The circle's area is: " + circleArea + "cm^2");

console.groupEnd();


// Here we interact with HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("SquareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}
function calculateSquareArea() {
    const input = document.getElementById("SquareInput")
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}