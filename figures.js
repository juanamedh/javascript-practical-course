// Square's code
console.group("Square's");
const squareSide = 5;
console.log("The sides of the square are: " + squareSide + "cm");

const squarePerimeter = squareSide * 4;
console.log("The perimeter of teh square is: " + squarePerimeter + "cm");

const squareArea = squareSide ** 2;
console.log("The area of the square is: " + squareArea + "cm^2");
console.groupEnd();

// Triangle's code
console.group("Triangle's");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
console.log(
    "The sides of my triangle are: " 
    + triangleSide1 
    + "cm, " 
    + triangleSide2 
    + "cm, " 
    + triangleBase 
    + "cm"
);

const triangleHeight = 5.5;
console.log("The tiangle's height is: " + triangleHeight + "cm");
const trianglePerimeter = triangleBase + triangleSide1 + triangleSide2;
console.log("The triangle's perimeter is: " + trianglePerimeter + "cm");
const triangleArea = (triangleHeight * triangleBase) / 2;
console.log("The triangle's area is: " + triangleArea + "cm");

console.groupEnd();

// Circle's code
console.group("Circle's");
// Radius
const circleRadius = 4;
console.log("The circle's radius is: " + circleRadius + "cm");
// Diameter
const circleDiameter = circleRadius * 2;
console.log("The circle's diameter is: " + circleDiameter + "cm");
//PI
const PI = Math.PI;
console.log("PI number is considered as: " + PI);
//Perimeter
const circlePerimeter = circleDiameter * PI;
console.log("The circle's perimeter is: " + circleDiameter);
// Area
const circleArea = (circleRadius ** 2) * PI;
console.log("The circle's area is: " + circleArea + "cm^2");

console.groupEnd();