/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 30, 2015
 Assignment: Functions Assignment
 */

var itemName = prompt("Let's calculate the discount on your item!\nWhat is the item?");

var itemPrice = prompt("Please enter the item price:");

validatePrompts(itemPrice);

function validatePrompts(price) {
    while (price === "" || isNaN(price)) {
        if (price === "") {
            price = prompt("Please don't leave blank.\nPlease enter the item price:");
        } else if (isNaN(price)) {
            price = prompt("You have entered a letter.\nPlease enter the item price:");
        }
    }
};

var discountAmt = prompt("Please enter the discount amount in percentage:");

validatePrompts(discountAmt);


var totalAmt = function(discount, price, item){
    discount /= 100;
    var totalSavings = price * discount;
    var finalAmount = price * (discount + 1);
    var messageFinal = console.log("The price for the " + item + " is \uFF04" + price + " and the total amount is \uFF04" + finalAmount.toFixed(2) + ".\nThe total savings was of \uFF04" + totalSavings.toFixed(2) + ".");
};

totalAmt(discountAmt,itemPrice,itemName);


var secondDiscount = prompt("Would you like to calculate another amount of discount?\nAnswer yes or no.");

while(secondDiscount==="yes" || secondDiscount==='Yes' || secondDiscount==="no" || secondDiscount==="No"){
    if(secondDiscount==="yes" || secondDiscount==='Yes'){
        var itemName2 = prompt("What is the item?");
        var itemPrice2 = prompt("Please enter the item price:");
        validatePrompts(itemPrice2);
        var discountAmt2 = prompt("Please enter a discount amount:");
        validatePrompts(discountAmt2);
        totalAmt(discountAmt2,itemPrice2,itemName2);
        break;
    }else if(secondDiscount==="no" || secondDiscount==="No"){
        alert("Thank you for using the discount calculator. Have a wonderful day!");
        break;
    }
};



//function calculateDiscount (itemPrice, discountAmount, ){

//}