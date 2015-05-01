/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 30, 2015
 Assignment: Functions Assignment
 */

var itemPrice = prompt("Let's calculate the discount on your item!\nssPlease enter the item price:");

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


//var totalAmt = function(discount, price, ){

//}





var secondDiscount = prompt("Would you like to calculate another amount of discount?\nAnswer yes or no.");

while(secondDiscount==="yes" || secondDiscount==='Yes' || secondDiscount==="no" || secondDiscount==="No"){
    if(secondDiscount==="yes" || secondDiscount==='Yes'){
        var itemPrice2 = prompt("Please enter the item price:");
        validatePrompts(itemPrice2);
        var discountAmt2 = prompt("Please enter a discount amount:");
        validatePrompts(discountAmt2);
        break;
    }else if(secondDiscount==="no" || secondDiscount==="No"){
        alert("Thank you for using the discount calculator. Have a wonderful day!");
        break;
    }
};




//function calculateDiscount (itemPrice, discountAmount, ){

//}