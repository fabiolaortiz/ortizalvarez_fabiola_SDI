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
        return price;
    }
};

var discountAmt = prompt("Please enter the discount amount in percentage:");

validatePrompts(discountAmt);


var totalAmt = function(discount, price, item){
    discount /= 100;
    var totalSavings = price * discount;
    var finalAmount = price * (discount + 1);
    return [item,price,totalSavings,finalAmount];
};


var firstAmount = totalAmt(discountAmt,itemPrice,itemName);

console.log("The price for the " + firstAmount[0] + " is \uFF04" + firstAmount[1] + " and the total amount is \uFF04" + firstAmount[3].toFixed(2) + ".\nThe total savings was of \uFF04" + firstAmount[2].toFixed(2) + ".");

var secondDiscount = prompt("Would you like to calculate another amount of discount?\nAnswer yes or no.");

while(secondDiscount==="yes" || secondDiscount==='Yes' || secondDiscount==="no" || secondDiscount==="No"){
    if(secondDiscount==="yes" || secondDiscount==='Yes'){
        var itemName2 = prompt("What is the item?");
        var itemPrice2 = prompt("Please enter the item price:");
        validatePrompts(itemPrice2);
        var discountAmt2 = prompt("Please enter a discount amount:");
        validatePrompts(discountAmt2);
        var secondAmount = totalAmt(discountAmt2,itemPrice2,itemName2);
        console.log("The price for the " + secondAmount[0] + " is \uFF04" + secondAmount[1] + " and the total amount is \uFF04" + secondAmount[3].toFixed(2) + ".\nThe total savings was of \uFF04" + secondAmount[2].toFixed(2) + ".");
        break;
    }else if(secondDiscount==="no" || secondDiscount==="No"){
        alert("Thank you for using the discount calculator. Have a wonderful day!");
        break;
    }
};

//Test values where as follows, for item price 10 dollars, for discount amount 25% and a book for item type. The results where a total amount of $12.50 with a savings of $2.50.