/*
//function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
    return 2037 - birthYear;

}
console.log(age1);
//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);
*/

//function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1991);
// console.log(age3);
//
// const yearsUntilRetirement = (birthYear,firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991,'Piotr'));
// console.log(yearsUntilRetirement(1980,'Bob'));
//
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//     const applePices = cutFruitPieces(apples);
//     const orangePices = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePices} apples and ${orangePices} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        return  retirement;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1970,'Jonas'));