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


//Calculate how much pizza Sparky will get
//Asking information and storing it in variables
pizzaOrdered = prompt('Please enter the quantity of pizzas ordered:');
pizzaSlices = prompt('Please enter the quantity of slices each pizza contains:');
qtyPeople = prompt('Please enter the quantity of people:');

//Multiply slices by pizza ordered and then get the modulo by dividing by quantity of people
var sliceSparky = pizzaSlices * pizzaOrdered % qtyPeople;

//Displays how much pizza Sparky gets
alert('Sparky got ' + sliceSparky + ' slices of pizza.');


//Calculate average of a shopping bill
//Creating array with values
var groceryArray = [150,134,169,189,125];

//Calculating total amount by adding values in array and the average amount by dividing the total
var totalAmount = groceryArray[0] + groceryArray[1] + groceryArray[2] + groceryArray[3] + groceryArray[4];
var aveAmount = totalAmount/5;

//Displays the total amount and the average amount to the user
alert('You have spent a total of \uFF04' + totalAmount + ' on groceries over 5 weeks. \nThat is an average of \uFF04' + aveAmount + ' per week.');
