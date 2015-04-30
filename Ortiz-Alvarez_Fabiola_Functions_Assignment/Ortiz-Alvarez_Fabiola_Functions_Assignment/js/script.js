/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 30, 2015
 Assignment: Functions Assignment
 */

var itemPrice = prompt("Let's calculate the discount on your item!\nPlease enter the item price:");

while (itemPrice === "" || isNaN(itemPrice)) {
    if (itemPrice === "") {
        itemPrice = prompt("Please don't leave blank.\nPlease enter the item price:")
    } else if (isNaN(itemPrice)){
        itemPrice = prompt("You have entered a letter.\nPlease enter the item price:")
        }
};