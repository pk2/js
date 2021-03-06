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
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores ????

GOOD LUCK ????
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
// const  friend1 = 'Michael';
// const  friend2 = 'Steven';
// const  friend3 = 'Peter';
//
// const friends = ['Michael','Steven','Peter'];
// console.log(friends);
// const y = new Array(1999, 2000, 2001, 2020);
// console.log(y);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);
//
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice'];
//
//
// const firstName = 'Jonas';
//
//
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991,friends];
// console.log(jonas);
// console.log(jonas.length);
//
// const  calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const years = [1990,1967,2002,2010,2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1,age2,age3);
//
// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[years.length - 1])];
// console.log(ages);


// const friends = ['Michael','Steven','Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);
// friends.unshift('John');
// console.log(friends);
//
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);
//
// friends.shift();
// console.log(friends);
// console.log(friends.lastIndexOf('Steven'));
// console.log(friends.lastIndexOf('Bob'));
//
// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('23'));
//
// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) ????

GOOD LUCK ????
*/
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
// const total = [calcTip(bills[0])+tips[0], calcTip(bills[1])+tips[1],calcTip(bills[2])+tips[2]];
// console.log(tips, total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
//
// console.log(jonas);
// //
// // console.log(jonas.lastName);
// // console.log(jonas['lastName']);
//
// const nameKey ='Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
//
// // const interestedIn = prompt('test');


// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,
//     //
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }
//
//     // calcAge: function () {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function (){
//         return `${this.firstName} is ${this.calcAge()} old ${this.job}, and ${this.hasDriverLicense ? "has" : "has not"} driver's license`;
//     }
// };
//
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.getSummary());
// console.log(jonas['calcAge'](1991));

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK ????
*/

// const mark = {
//     name: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     bmi: 0,
//     calcBMI: function () {
//          this.bmi = this.mass / (this.height * this.height);
//          return this.bmi;
//     }
// };
// const john = {
//     name: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     bmi: 0,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };
// console.log((mark.calcBMI() > john.calcBMI() ? `${mark.name}'s (${mark.bmi})` : `${john.name}'s (${john.bmi})`) + `is higher than ` + (mark.calcBMI() < john.calcBMI() ? `${mark.name}'s (${mark.bmi})` : `${john.name}'s (${john.bmi})`));

// for (let rep = 1; rep <= 10 ; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael','Peter','Steven']
// ];
//
// for (let array = 0; array < jonasArray.length; array++) {
//     console.log(jonasArray[array]);
// }

//
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`====== Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise: ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);
// while (dice != 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays ????

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK ????
*/

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     total.push(bills[i]+tips[i]);
// }
//
// console.log(bills, tips, total);
//
// const calcAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum/arr.length;
// }
// console.log(calcAverage(total));
// console.log(calcAverage(tips));


///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17??C in 1 days ... 21??C in 2 days ... 23??C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const maxTemp = [12, 5, -5, 0, 4]
function printForecast(arr){
    let output = "... ";
    for (let i = 0; i < arr.length; i++) {
        output += `${arr[i]} C in ${i + 1 } days ... `
    }
    return output;
}

console.log(printForecast(maxTemp));