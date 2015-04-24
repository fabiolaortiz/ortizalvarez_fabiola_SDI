/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 23, 2015
 Assignment: Conditionals Assignment
 */

var totalCheck = prompt('Please enter the total amount of the check:');

//Validate for blanks on prompt
//if(totalCheck === "" || isNan(totalCheck)){
  //  alert('You have entered a blank or a letter. Please enter a number.')
    //totalCheck = prompt('Please enter the total amount of the check:')
//}

var qualityOfService1 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

if(qualityOfService1 === 'Good' || qualityOfService1 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService1 === 'Regular' || qualityOfService1 === 'Regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService1 === 'Bad' || qualityOfService1 === 'bad'){
    alert('We recommend a 15% of tip.')
};

var amountTip = prompt('Please enter the percentage of tip:');

//Calculating amount of tip by multiplying check total by percentage of tip
amountTip *= totalCheck;
//Calculating amount to be paid by sum of amount of tip plus total check
totalCheck += amountTip;


var totalCheck1 = prompt('Please enter the total amount of the check:');

//Validate for blanks on prompt
//if(totalCheck === "" || isNan(totalCheck)){
//  alert('You have entered a blank or a letter. Please enter a number.')
//totalCheck = prompt('Please enter the total amount of the check:')
//}


var qualityOfService2 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

if(qualityOfService2 === 'Good' || qualityOfService2 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService2 === 'Regular' || qualityOfService2 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService2 === 'Bad' || qualityOfService2 === 'bad'){
    alert('We recommend a 15% of tip.')
};

var amountTip1 = prompt('Please enter the percentage of tip:');

//Calculating amount of tip by multiplying check total by percentage of tip
amountTip1 *= totalCheck1;
//Calculating amount to be paid by sum of amount of tip plus total check
totalCheck1 += amountTip1;


var totalCheck2 = prompt('Please enter the total amount of the check:');

//Validate for blanks on prompt
//if(totalCheck === "" || isNan(totalCheck)){
//  alert('You have entered a blank or a letter. Please enter a number.')
//totalCheck = prompt('Please enter the total amount of the check:')
//}


var qualityOfService3 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

if(qualityOfService3 === 'Good' || qualityOfService3 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService3 === 'Regular' || qualityOfService3 === 'Regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService3 === 'Bad' || qualityOfService3 === 'bad'){
    alert('We recommend a 15% of tip.')
};

var amountTip2 = prompt('Please enter the percentage of tip:');

//Calculating amount of tip by multiplying check total by percentage of tip
amountTip2 *= totalCheck2;
//Calculating amount to be paid by sum of amount of tip plus total check
totalCheck2 += amountTip2;
