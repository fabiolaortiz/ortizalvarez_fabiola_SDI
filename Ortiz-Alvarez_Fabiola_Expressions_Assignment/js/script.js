/*
Fabiola Ortiz-Alvarez
SDI Section #1
April 15, 2015
Assignment: Expression Assignment
*/

//Obtain user input for calculation
var principal1 = prompt('Please enter amount of loan:');
var interest1 = prompt('Please enter the interest rate in percentage:');
var months1 = prompt('Please enter the loan length in months:');

//Perform calculation number 1
interestMonth1 = interest1 / 100;
interestMonth1 /= 12;
var monthlyPmts1 = principal1 * (interestMonth1 / (1 - Math.pow((1 + interestMonth1),-months1)));

var principal2 = prompt('Please enter amount of loan:');
var interest2 = prompt('Please enter the interest rate in percentage:');
var months2 = prompt('Please enter the loan length in months:');

//Perform calculation number 2
interestMonth2 = interest2 / 100;
interestMonth2 /= 12;
var monthlyPmts2 = principal2 * (interestMonth2 / (1 - Math.pow((1 + interestMonth2),-months2)));

var principal3 = prompt('Please enter amount of loan:');
var interest3 = prompt('Please enter the interest rate in percentage:');
var months3 = prompt('Please enter the loan length in months:');

//Perform calculation number 3
interestMonth3 = interest3 / 100;
interestMonth3 /= 12;
var monthlyPmts3 = principal3 * (interestMonth3 / (1 - Math.pow((1 + interestMonth3),-months3)));

var principal4 = prompt('Please enter amount of loan:');
var interest4 = prompt('Please enter the interest rate in percentage:');
var months4 = prompt('Please enter the loan length in months:');

//Perform calculation number 4
interestMonth4 = interest4 / 100;
interestMonth4 /= 12;
var monthlyPmts4 = principal4 * (interestMonth4 / (1 - Math.pow((1 + interestMonth4),-months4)));

// Creating array for the four different scenarios
var arrayLoan = new Array(4);
arrayLoan[0] = monthlyPmts1;
arrayLoan[1] = monthlyPmts2;
arrayLoan[2] = monthlyPmts3;
arrayLoan[3] = monthlyPmts4;

//Displaying monthly payments for each loan
console.log('Your monthly payment for the first scenario of \uFF04' + principal1 + ' and ' + interest1 + '\u0025 and ' + months1 + ' months is ' + arrayLoan[0]);
alert('Your monthly payment for the first scenario of \uFF04' + principal1 + ' and ' + interest1 + '\u0025 and ' + months1 + ' months is ' + arrayLoan[0]);

console.log('Your monthly payment for the second scenario of \uFF04' + principal2 + ' and ' + interest2 + '\u0025 and ' + months2 + ' months is ' + arrayLoan[1]);
alert('Your monthly payment for the second scenario of \uFF04' + principal3 + ' and ' + interest2 + '\u0025 and ' + months2 + ' months is ' + arrayLoan[1]);

console.log('Your monthly payment for the third scenario of \uFF04' + principal3 + ' and ' + interest3 + '\u0025 and ' + months3 + ' months is ' + arrayLoan[2]);
alert('Your monthly payment for the third scenario of \uFF04' + principal3 + ' and ' + interest3 + '\u0025 and ' + months3 + ' months is ' + arrayLoan[2]);

console.log('Your monthly payment for the fourth scenario of \uFF04' + principal4 + ' and ' + interest4 + '\u0025 and ' + months4 + ' months is ' + arrayLoan[3]);
alert('Your monthly payment for the fourth scenario of \uFF04' + principal4 + ' and ' + interest4 + '\u0025 and ' + months4 + ' months is ' + arrayLoan[3]);