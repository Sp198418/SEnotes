
//   Write a function called repeat_str which repeats the given string src exactly count times
  
// function repeatStr (n, s) {
//     var output = '';
//     for(var i=0; i<n; i++){
//       output +=s;
//     }
//     return output;
//   }


// We need a function that can transform a number into a string.


// function numberToString(num) {
    
//     return num.toString()
//   }
//   console.log(numberToString(55))

// Complete the solution so that it reverses the string passed into it

// function solution(str){
//       let reverseString = '';
//       for (var i = str.length-1; i >= 0; i--) {
//         reverseString += str[i];
//       }
//       return reverseString;
//     }
//     console.log(solution('Apple'))


// Given an array of integers your solution should find the smallest integer.

// var args = [5, 6, 3, 34]

// function findSmallestInt(args) {
    
//     var smallInt = args[0];
    
//     for(var i =0; i < args.length; i++){
    
//     if(args[i] <= smallInt){
//     	smallInt = args[i];
//     	}
    
//     } 
//         return (smallInt)
// }

// console.log(findSmallestInt(args))