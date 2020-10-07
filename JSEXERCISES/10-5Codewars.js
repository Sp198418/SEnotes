// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.


//  function countPositivesSumNegatives(input) {

//     if (input == null || input.length < 1){
//          return [];
//      }
// //     var newArray = [0, 0];
    
    
//     for (var i = 0; i < input.length; i++){
    
//       if (input[i] > 0)
//         {
//         newArray[0] += 1;
//         }
    
//       else {
//         newArray[1] += input[i];
//       }
    
//       }
//     return newArray;
//     }


// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:


function XO(str) {
    var x = [];
    var o = [];
    for (var i = 0; i < str.length; i++) {
     
        if (str[i].toLowerCase() === 'x') { 
            x.push(str[i]); 
        } else if (str[i].toLowerCase() === 'o') {
            o.push(str[i]);
        }
    }
   
    if (x.length == o.length) {
        return true;
    } else {
        return false;
    }
}
console.log(XO('xo'));
console.log(XO('xxo'));
console.log(XO('xoX'));
console.log(XO('xoOX'));