//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// function invert(array) {
//     if (array.length === 0) {
//       return [];
//     } return array.map( x => x === 0 ? 0 : -x) 
//   }
  

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// function fakeBin(x){
//     var arr = [];
//     x = x+"";
//     x.split("").join(",");
//     for(var i = 0;i<x.length;i++){
//     if(x[i] < 5){
//     arr.push(0);
//     }
//     else{
//     arr.push(1);
//     }
//     }
//     return arr.join("");
//     }

//     console.log(fakeBin('1,2,3,4,5,7,8,9,10'))


// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// function monkeyCount(n) {
//     var monkey = [];
//     for (i = 1; i <= n; i++) {
//       monkey.push(i);
//     }
//     return monkey;
//   }

//   console.log(monkeyCount(10))

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines 
//whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// function isIsogram(str){
    
//     str = str.toLowerCase();
//     for(i = 0; i < str.length; ++i) {
//       for(j = i + 1; j < str.length; ++j) {
//         if(str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;       
// }
//     console.log(isIsogram('Mississippi'))
//     console.log(isIsogram('Samuel'))



// Write function avg which calculates average of numbers in given list.



// function find_average(array) {
//     return array.reduce((a, b) => (a + b)) / array.length;
//   }
// console.log(find_average([1,2,3,4]))