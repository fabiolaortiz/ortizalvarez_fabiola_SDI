/*
 Fabiola Ortiz-Alvarez
 SDI Section #1
 April 23, 2015
 Assignment: Conditionals Assignment
 */

var totalCheck1 = prompt('Please enter the total amount of the check:');

//Validate for blanks on prompt
//if(totalCheck === "" || isNan(totalCheck)){
  //  alert('You have entered a blank or a letter. Please enter a number.')
    //totalCheck = prompt('Please enter the total amount of the check:')
//}

var qualityOfService1 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

if(qualityOfService1 === 'Good' || qualityOfService1 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService1 === 'Regular' || qualityOfService1 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService1 === 'Bad' || qualityOfService1 === 'bad'){
    alert('We recommend a 15% of tip.')
};

var amountTip1 = prompt('Please enter the percentage of tip:');

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


alert('The check total is \uFF04' + totalCheck1 +' and the amount of tip given is \uFF04' + amountTip1 + ' for a total of \uFF04' + totalPaid1);



var totalCheck2 = prompt('Please enter the total amount of the second check scenario:');

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

var amountTip2 = prompt('Please enter the percentage of tip for the second scenario:');

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


alert('The check total is \uFF04' + totalCheck2 +' and the amount of tip given is \uFF04' + amountTip2 + ' for a total of \uFF04' + totalPaid2);



var totalCheck3 = prompt('Please enter the total amount of the third check scenario:');

//Validate for blanks on prompt
//if(totalCheck === "" || isNan(totalCheck)){
//  alert('You have entered a blank or a letter. Please enter a number.')
//totalCheck = prompt('Please enter the total amount of the check:')
//}

var qualityOfService3 = prompt('Please select how was the service:', ['Good','Regular','Bad']);

if(qualityOfService3 === 'Good' || qualityOfService3 === 'good'){
    alert('We recommend a 35% of tip.')
}else if(qualityOfService3 === 'Regular' || qualityOfService3 === 'regular'){
    alert('We recommend a 25% of tip.')
}else if(qualityOfService3 === 'Bad' || qualityOfService3 === 'bad'){
    alert('We recommend a 15% of tip.')
};

var amountTip3 = prompt('Please enter the percentage of tip:');

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

alert('The check total is \uFF04' + totalCheck3 +' and the amount of tip given is \uFF04' + amountTip3 + ' for a total of \uFF04' + totalPaid3);

