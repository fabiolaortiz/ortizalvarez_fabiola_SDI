//Fabiola Ortiz-Alvarez
//April 15, 2015
//Assignment: Expression Assignment

//Obtain user input for calculation
var principal1 = prompt('Please enter amount of loan:');
var interest1 = prompt('Please enter the interest rate in percentage:');
var months1 = prompt('Please enter the loan length in months:');

//Perform calculation number 1
interest1 /= 100;
interest1 /= 12;
var monthlyPmts1 = principal1 * (interest1 / (1 - Math.pow((1 + interest1),-months1)));

var principal2 = prompt('Please enter amount of loan:');
var interest2 = prompt('Please enter the interest rate in percentage:');
var months2 = prompt('Please enter the loan length in months:');

//Perform calculation number 2
interest2 /= 100;
interest2 /= 12;
var monthlyPmts2 = principal2 * (interest2 / (1 - Math.pow((1 + interest2),-months2)));

var principal3 = prompt('Please enter amount of loan:');
var interest3 = prompt('Please enter the interest rate in percentage:');
var months3 = prompt('Please enter the loan length in months:');

//Perform calculation number 3
interest3 /= 100;
interest3 /= 12;
var monthlyPmts3 = principal3 * (interest3 / (1 - Math.pow((1 + interest3),-months3)));

var principal4 = prompt('Please enter amount of loan:');
var interest4 = prompt('Please enter the interest rate in percentage:');
var months4 = prompt('Please enter the loan length in months:');

//Perform calculation number 4
interest4 /= 100;
interest4 /= 12;
var monthlyPmts4 = principal4 * (interest4 / (1 - Math.pow((1 + interest4),-months4)));

// Creating array for the four different scenarios
var arrayLoan = new Array(4);
arrayLoan[0] = monthlyPmts1;
arrayLoan[1] = monthlyPmts2;
arrayLoan[2] = monthlyPmts3;
arrayLoan[3] = monthlyPmts4;

//Displaying monthly payments for each loan
console.log('Your monthly payment is:' + arrayLoan);
