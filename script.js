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
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2,3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const yearsUntilRetirement = function (birthYear,firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return  retirement;
//     } else {
//         return -1;
//     }
//     //return `${firstName} retires in ${retirement} years`;
// }
//
// console.log(yearsUntilRetirement(1970,'Jonas'));
//

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
// const calcAverage = (score1, score2, score3 ) => (score1 + score2 + score3)/3;
// // const averageDolphins = calcAverage(44,23,71)
// // const averageKoalas = calcAverage(65,54,49)
// const averageDolphins = calcAverage(86,54,41)
// const averageKoalas = calcAverage(23,34,27)
// function checkWinner(averageDolphins,averageKoalas) {
//     if (averageDolphins >= 2 * averageKoalas) {
//         console.log(`Dolphins win (${averageDolphins} vs. ${averageKoalas})`);
//     } else if (averageKoalas >= 2 * averageDolphins) {
//         console.log(`Koalas win (${averageKoalas} vs. ${averageDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(averageDolphins,averageKoalas);

//Arrays
const  friend1 = 'Michael';
const  friend2 = 'Steven';
const  friend3 = 'Peter';

const friends = ['Michael','Steven','Peter'];
console.log(friends);
const y = new Array(1999, 2000, 2001, 2020);
console.log(y);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];


const firstName = 'Jonas';


const jonas = [firstName, 'Schmedtmann', 2037 - 1991,friends];
console.log(jonas);
console.log(jonas.length);

const  calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990,1967,2002,2010,2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1,age2,age3);

const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
console.log(ages);