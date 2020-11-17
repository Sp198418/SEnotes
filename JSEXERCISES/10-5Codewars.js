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


// function XO(str) {
//     var x = [];
//     var o = [];
//     for (var i = 0; i < str.length; i++) {
     
//         if (str[i].toLowerCase() === 'x') { 
//             x.push(str[i]); 
//         } else if (str[i].toLowerCase() === 'o') {
//             o.push(str[i]);
//         }
//     }
   
//     if (x.length == o.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(XO('xo'));
// console.log(XO('xxo'));
// console.log(XO('xoX'));
// console.log(XO('xoOX'));

// function findMissingLetter(arr){
//   var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var start = alpha.indexOf(arr[0]);//begin at of index of first letter
//   // loop through each letter input
//   for (var i = 0; i < arr.length; i++) {
//        // check if letters don't match
//     //    console.log(i)
//     if (alpha[start+i]!== arr[i]){

//         return alpha[start+i];//return letter
//     }
//   }
// }
//   console.log(findMissingLetter(['a','b','c','d','f']))//e
//   console.log((findMissingLetter(['O','Q','R','S'])))//P

// you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, 
// lowercase, numbers and special characters, as follows./[1-4]/g

// function solve(s){
//   var Upcount = 0
//   var Lowcount = 0
//   var Numcount = 0
//   var Specialcount = 0
 

//   for(var i =0; i < s.length;i++){

//     if(s[i].match(/[A-Z]/g)){
//       Upcount++;
//     }else if (s[i].match(/[a-z]/g)){
//       Lowcount++;
//     }else if (s[i].match(/[0-9]/g)){
//       Numcount++;
//     }else{
//       Specialcount++;
//     }
  
//   }
//  return [Upcount, Lowcount, Numcount, Specialcount];
// }

//  console.log(solve("Codewars@codewars123.com"))

