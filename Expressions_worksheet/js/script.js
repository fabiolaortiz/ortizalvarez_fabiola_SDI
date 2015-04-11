//Fabiola Ortiz-Alvarez
//April 11, 2015
//Assignment: Expression Worksheet

//Calculate dog's years
//Asking for dog age and saving it in a variable
var dogAge = prompt('Enter your dog age:');
//Calculating dog's age in dog years by multiplying it by 7
var dogHumanYears = dogAge * 7;

//Displays information to the user
alert('Sparky is ' + dogAge + ' human years old which is ' + dogHumanYears + ' in dog years.');


//Calculate how much pizza a group of people eats
//Asking information and storing it in variables
var pizzaOrdered = prompt('Please enter the quantity of pizzas ordered:');
var pizzaSlices = prompt('Please enter the quantity of slices each pizza contains:');
var qtyPeople = prompt('Please enter the quantity of people:');

//Multiplying slices per pizza by quantity of pizzas ordered and dividing it by quantity of people
var slicesPerPerson = pizzaSlices * pizzaOrdered / qtyPeople

//Displays how many slices each person ate
alert('Each person ate ' + slicesPerPerson + ' slices of pizza at the party.');

