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


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.


// function solution(number) {
//     //define sum set it to 0
//     let sum = 0;
//     //irerate from 1 to given number
//     //if the current number is multiple of 3 or 5 add to sum
//     for (let i = 1; i < number; i++) {
//         if( i % 3 == 0 || i % 5 == 0) {
//             sum += i
//         }
//     }
//     return sum

// }

// console.log(solution(10))

//  Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
//  Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// let toys = ['Hot Wheels', 'Drone', 'Doll'] 
//  function(spinWords){
//     coolToys = arr.filter => 
//     let fullString =  spinWords.length >= 5
//     return fullString.reverse()
    

//  }
//  console.log(['Hot Wheels', 'Drone', 'Doll'])


//  Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//  It should remove all values from list a, which are present in list b.


// function arrayDiff(a, b) {

// // loop through each element of array "a"
//   for (let i = (a.length - 1); i >= 0; i--) {
//     // for each element of array "a", loop through each element of array "b"
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//          // if true, remove the element in array "a" at index "i" and only remove that "1" element
//          a.splice(i, 1);
//        }
//      }
//    }
//    return a
   
//    }

// console.log(arrayDiff([1,2,2,2,3,5],[2,5]))


// Complete the solution so that it reverses the string passed into it.

function solution(str){
    let backwards = str.split("");

 return backwards.reverse().join("")
}

console.log(solution('PARTYPACK'))


// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
   let winner1 = "Player 1 Won!"
   let winner2 = "Player 2 Won!"
   let tie = "Draw"

    if(p1 == 'rock' && p2 == 'scissors'){
     return  winner1 

    }else if(p1== 'scissors' && p2 == 'paper'){
     return winner1

     } else if(p1== 'paper' && p2 == 'rock'){
      return winner1

    }else if(p2== 'scissors' && p1 == 'paper'){
     return winner2

     } else if(p2== 'paper' && p1 == 'rock'){
      return winner2

      } else if (p2 == 'rock' && p1 == 'scissors'){
      return winner2

      } else if{
          return tie
      }
    
};