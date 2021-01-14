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

// you live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, 
// so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- 
// everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
// so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
   if(walk.length != 10) return false;
   let sums={'n':0, 's':0, 'e':0, 'w':0};
   for(let i=0; i<walk.length;i++){
       sums[walk[i]]++
   }
   return sums['n'] == sums['s'] && sums['w'] == sums['e'];
}

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));