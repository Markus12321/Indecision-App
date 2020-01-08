//arrow functions are anonymous
//regular es5 functions can be named

//regular es5 function
//function can be accessed by it's function name
function squareNamed(x){
    return x*x*x;
}

//anonymous es5 function assigned to square const
const square = function(x){
    return x*x
}

//arrow functions are always anon
//anon function assigned to function squareArrow
const squareArrow = (x) => x*x

console.log(squareNamed(5))
console.log(square(8))
console.log(squareArrow(9))


//getFirstName

const getFullName = (fullName) => fullName.split(' ')[0];

console.log(getFullName('Markus Hellestveit'))