/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 23, 2015
 Assignment: Conditionals Assignment
 */

//Telling the user what is the program about
alert('Welcome to your personal Tips calculator. We are going to calculate three different scenarios.');

//Creating prompt for total amount of check
var totalCheck1 = prompt('Please enter the total amount of the check:');

//Validate for blanks and numbers on prompt
if(totalCheck1 === "" || isNan(totalCheck1)){
    alert('You have entered a blank or a letter. Please enter a number.')
    totalCheck1 = prompt('Please enter the total amount of the check:')
};

//Creating prompt for quality of service
var qualityOfService1 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

//Validate for blanks and numbers on prompt
if(qualityOfService1 === "" || isNan(qualityOfService1)){
    alert('You have entered a blank or a letter. Please enter a number.')
    qualityOfService1 = prompt('Please select how was the service:', ['Good','Regular','Bad'])
};


//Recommending quantity of tips depending on the service
if(qualityOfService1 === 'Good' || qualityOfService1 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService1 === 'Regular' || qualityOfService1 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService1 === 'Bad' || qualityOfService1 === 'bad'){
    alert('We recommend a 15% of tip.')
};

//Creating prompt for amount of tip to give
var amountTip1 = prompt('Please enter the percentage of tip:');

//Validate for blanks and numbers on prompt
if(amountTip1 === "" || isNan(amountTip1)){
    alert('You have entered a blank or a letter. Please enter a number.')
    amountTip1 = prompt('Please enter the percentage of tip:')
};

//Commenting on quantity of percentage of tip to be given depending on service quality
if (amountTip1 >= 15 && qualityOfService1 === 'Bad' || qualityOfService1 === 'bad'){
    alert('That tip is more than ok.')
}else if(amountTip1 >= 25 && qualityOfService1 === 'Regular' || qualityOfService1 === 'regular'){
    alert('That tip is well received.')
}else if(amountTip1 < 35 && qualityOfService1 === 'Good' || qualityOfService1 === 'good'){
    alert('That tip can be better!')
};

//Calculating amount of tip by multiplying check total by percentage of tip divided by 100
amountTip1 = (amountTip1/100) * totalCheck1;
//Calculating amount to be paid by sum of amount of tip plus total check
var totalPaid1 = Number(totalCheck1) + Number(amountTip1);

//Displaying results to user
alert('The check total is \uFF04' + totalCheck1 +' and the amount of tip given is \uFF04' + amountTip1 + ' for a total of \uFF04' + totalPaid1);
console.log('The check total is \uFF04' + totalCheck1 +' and the amount of tip given is \uFF04' + amountTip1 + ' for a total of \uFF04' + totalPaid1);

//Creating prompt for total amount of check
var totalCheck2 = prompt('Please enter the total amount of the second check scenario:');

//Validate for blanks and numbers on prompt
if(totalCheck2 === "" || isNan(totalCheck2)){
    alert('You have entered a blank or a letter. Please enter a number.')
    totalCheck2 = prompt('Please enter the total amount of the check:')
};

//Creating prompt for quality of service
var qualityOfService2 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

//Validate for blanks and numbers on prompt
if(qualityOfService2 === "" || isNan(qualityOfService2)){
    alert('You have entered a blank or a letter. Please enter a number.')
    qualityOfService2 = prompt('Please select how was the service:', ['Good','Regular','Bad'])
};

//Recommending quantity of tips depending on the service
if(qualityOfService2 === 'Good' || qualityOfService2 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService2 === 'Regular' || qualityOfService2 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService2 === 'Bad' || qualityOfService2 === 'bad'){
    alert('We recommend a 15% of tip.')
};

//Creating prompt for amount of tip to give
var amountTip2 = prompt('Please enter the percentage of tip for the second scenario:');

//Validate for blanks and numbers on prompt
if(amountTip2 === "" || isNan(amountTip2)){
    alert('You have entered a blank or a letter. Please enter a number.')
    amountTip2 = prompt('Please enter the percentage of tip:')
};

//Commenting on quantity of percentage of tip to be given depending on service quality
if (amountTip2 > 15 && qualityOfService2 === 'Bad' || qualityOfService2 === 'bad'){
    alert('That tip is more than ok.')
}else if(amountTip2 >= 25 && qualityOfService2 === 'Regular' || qualityOfService2 === 'regular'){
    alert('That tip is well received.')
}else if(amountTip2 < 35 && qualityOfService2 === 'Good' || qualityOfService2 === 'good'){
    alert('That tip can be better!')
};

//Calculating amount of tip by multiplying check total by percentage of tip divided by 100
amountTip2 = (amountTip2/100) * totalCheck2;
//Calculating amount to be paid by sum of amount of tip plus total check
var totalPaid2 = Number(totalCheck2) + Number(amountTip2);

//Displaying results to user
alert('The check total is \uFF04' + totalCheck2 +' and the amount of tip given is \uFF04' + amountTip2 + ' for a total of \uFF04' + totalPaid2);
console.log('The check total is \uFF04' + totalCheck2 +' and the amount of tip given is \uFF04' + amountTip2 + ' for a total of \uFF04' + totalPaid2);

//Creating prompt for total amount of check
var totalCheck3 = prompt('Please enter the total amount of the third check scenario:');

//Validate for blanks and numbers on prompt
if(totalCheck3 === "" || isNan(totalCheck3)){
    alert('You have entered a blank or a letter. Please enter a number.')
    totalCheck3 = prompt('Please enter the total amount of the check:')
};

//Creating prompt for quality of service
var qualityOfService3 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

//Validate for blanks and numbers on prompt
if(qualityOfService3 === "" || isNan(qualityOfService3)){
    alert('You have entered a blank or a letter. Please enter a number.')
    qualityOfService3 = prompt('Please select how was the service:', ['Good','Regular','Bad'])
};

//Recommending quantity of tips depending on the service
if(qualityOfService3 === 'Good' || qualityOfService3 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService3 === 'Regular' || qualityOfService3 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService3 === 'Bad' || qualityOfService3 === 'bad'){
    alert('We recommend a 15% of tip.')
};

//Creating prompt for amount of tip to give
var amountTip3 = prompt('Please enter the percentage of tip:');

//Validate for blanks and numbers on prompt
if(amountTip3 === "" || isNan(amountTip3)){
    alert('You have entered a blank or a letter. Please enter a number.')
    amountTip3 = prompt('Please enter the percentage of tip:')
};

//Commenting on quantity of percentage of tip to be given depending on service quality
if (amountTip3 >= 15 && qualityOfService3 === 'Bad' || qualityOfService3 === 'bad'){
    alert('That tip is more than ok.')
}else if(amountTip3 >= 25 && qualityOfService3 === 'Regular' || qualityOfService3 === 'regular'){
    alert('That tip is well received.')
}else if(amountTip3 < 35 && qualityOfService3 === 'Good' || qualityOfService3 === 'good'){
    alert('That tip can be better!')
};

//Calculating amount of tip by multiplying check total by percentage of tip divided by 100
amountTip3 = (amountTip3/100) * totalCheck3;
//Calculating amount to be paid by sum of amount of tip plus total check
var totalPaid3 = Number(totalCheck3) + Number(amountTip3);

//Displaying results to user
alert('The check total is \uFF04' + totalCheck3 +' and the amount of tip given is \uFF04' + amountTip3 + ' for a total of \uFF04' + totalPaid3);
console.log('The check total is \uFF04' + totalCheck3 +' and the amount of tip given is \uFF04' + amountTip3 + ' for a total of \uFF04' + totalPaid3);

/*
Test results where 10 for total check 15 for tip and good service, resulting in a total of 11.50 to be paid.
 */