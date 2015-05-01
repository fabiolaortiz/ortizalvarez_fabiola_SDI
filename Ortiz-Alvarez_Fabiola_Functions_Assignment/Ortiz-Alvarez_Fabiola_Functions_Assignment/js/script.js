/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 30, 2015
 Assignment: Functions Assignment
 */

//Defining a variable for the type of item.
var itemName = prompt("Let's calculate the discount on your item!\nWhat is the item?");

//Defining a variable for the total price of the item.
var itemPrice = prompt("Please enter the item price:");

//Calling the validation function
validatePrompts(itemPrice);

//Creating a function to validate prompts from blanks and letters.
function validatePrompts(price) {
    while (price === "" || isNaN(price)) {
        if (price === "") {
            price = prompt("Please don't leave blank.\nPlease enter the item price:");
        } else if (isNaN(price)) {
            price = prompt("You have entered a letter.\nPlease enter the item price:");
        }
        return price;
    }
};

//Defining a variable for the amount of discount.
var discountAmt = prompt("Please enter the discount amount in percentage:");

//Calling the validation function.
validatePrompts(discountAmt);

//Creating an anonymous function for the calculation of the discount.
var totalAmt = function(discount, price, item){
    discount /= 100;
    var totalSavings = price * discount;
    var finalAmount = price * (discount + 1);
    return [item,price,totalSavings,finalAmount];
};

//Defining a variable for storing the returning array from the function of the calculation.
var firstAmount = totalAmt(discountAmt,itemPrice,itemName);

//Displaying a message to the console stating the amounts of discount, amount to pay and total savings.
console.log("The price for the " + firstAmount[0] + " is \uFF04" + firstAmount[1] + " and the total amount is \uFF04" + firstAmount[3].toFixed(2) + ".\nThe total savings was of \uFF04" + firstAmount[2].toFixed(2) + ".");

//Defining a variable for
var secondDiscount = prompt("Would you like to calculate another amount of discount?\nAnswer yes or no.");

//Creating a loop to get second information about the discount
while(secondDiscount==="yes" || secondDiscount==='Yes' || secondDiscount==="no" || secondDiscount==="No"){
    if(secondDiscount==="yes" || secondDiscount==='Yes'){

        //Defining a variable for the type of item.
        var itemName2 = prompt("What is the item?");

        //Defining a variable for the total price of the item.
        var itemPrice2 = prompt("Please enter the item price:");

        //Calling the validation function
        validatePrompts(itemPrice2);

        //Defining a variable for the amount of discount.
        var discountAmt2 = prompt("Please enter a discount amount:");

        //Calling the validation function
        validatePrompts(discountAmt2);

        //Defining a variable for storing the second returning array from the function of the calculation.
        var secondAmount = totalAmt(discountAmt2,itemPrice2,itemName2);

        //Displaying a message to the console stating the amounts of discount, amount to pay and total savings.
        console.log("The price for the " + secondAmount[0] + " is \uFF04" + secondAmount[1] + " and the total amount is \uFF04" + secondAmount[3].toFixed(2) + ".\nThe total savings was of \uFF04" + secondAmount[2].toFixed(2) + ".");
        break;
    }else if(secondDiscount==="no" || secondDiscount==="No"){

        //Displaying a message when the user only needs one calculation.
        alert("Thank you for using the discount calculator. Have a wonderful day!");
        break;
    }
};

//Test values where as follows, for item price 10 dollars, for discount amount 25% and a book for item type. The results where a total amount of $12.50 with a savings of $2.50.