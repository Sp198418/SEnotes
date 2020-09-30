// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// function isDivisible(n, x, y) {
//     return (n % x) + (n % y) == 0;
//   }

//   console.log(isDivisible(10,2,5))

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// 348597 => [7,9,5,8,4,3]

// function digitize(n) {
//     var initialArray = (""+n).split('');
//     var reversedArray = [];
//     for (var i = initialArray.length - 1; i >= 0; i--) {
//       reversedArray[i] = parseInt(initialArray.shift(),10);
//     }
//     return reversedArray;
//   }
  
//   console.log(digitize(348597));


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.



// function abbrevName(name){
//     var nam = name.split(' ');
//     return (nam[0][0]+'.' + nam[1][0]).toUpperCase();
//   }
// console.log(abbrevName('Patrick Mahomes'))


// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:


// var haystack = [2,34,'needle',5,7,8,9]

// function findNeedle(haystack) {
//     return 'found the needle at position ' + haystack.indexOf('needle');
//   }
//   console.log(findNeedle(haystack))


// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time*0.5);
//   }

//   console.log(litres(3))