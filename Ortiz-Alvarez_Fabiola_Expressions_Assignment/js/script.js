//Fabiola Ortiz-Alvarez
//April 15, 2015
//Assignment: Expression Assignment

//Obtain user input for calculation
var principal = prompt('Please enter amount of loan:');
var interest = prompt('Please enter the interest rate in percentage:');
var months = prompt('Please enter the loan length in months:');

//Perform calculation
interest /= 100;
interest /= 12;
var monthlyPmts = principal * (interest / (1 - Math.pow((1 + interest),-months)));

console.log(monthlyPmts);