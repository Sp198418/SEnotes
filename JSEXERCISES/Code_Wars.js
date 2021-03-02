
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

//Write a function that returns an array of numbers, fizz, & buzz, counting up to a given number
//Given 15 return [1,2, fizz, 4, buzz,fizz]

// function countGame(n)  {
//     var count = 0
//     var arr = [];
//    for (var i =0; i <n;i++){
//        if(i %5 ==0 && i % 3){
//            arr.push('FizzBuzz');
//        }else if (i % 5 ==0){
//            arr.push('Buzz');
//        }else if (i % 3 ==0){
//            arr.push('Fizz');
//        }else{
//            arr.push(i);
//        }
//    }
//    return arr;

// }

// console.log(countGame(15))

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// function likes(names) {
//     if(names.length === 0){
//         return 'no one likes this';
//     } else if (names.length === 1){
//         return `${names[0]} likes this`;
//     } else if (names.length === 2){
//         return `${names[0]} and ${names[1]} like this`
//     }else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;

//     }else if (names.length > 3){
//         return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }

// }


//   console.log(likes(["Max", "John", "Mark", "Sam","Jack", "Luke"]))
//   console.log(likes(["Max", "John"]))
//   console.log(likes(["Max"]))


// Write a function that takes a string of braces, and determines if the order of the braces is valid. 
// It should return true if the string is valid, and false if it's invalid.

// function validBraces(braces){

//     for(let i = 0; i < braces.length;i++){
//         if(brace[i] == '(' || braces[i] == '[' || braces[i] == '{'){

//         }
//     } 
//   }

//   console.log(validBraces( "()" )) // true
// console.log(validBraces( "[(])" )) // false

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// function towerBuilder(nFloors) {
//   let Floors = [];
//   let brick = "*";
//   let spacer = " ";

//   for(let i =0; i < nFloors;i++){
//       if (nFloors == 0)
//   }

// }


// console.log(towerBuilder(3), ["  *  "," *** ","*****"]);



// function getVillainName(birthday){
// let Month = birthday.getMonth()
// let Day = birthday.getDate() +''
// Day = Day.slice(-1)

//   const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
//   const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

//   return 'The ' + m[Month] + ' ' + d[Day]

// }


// console.log(getVillainName(new Date("May 3")))


// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.


// const removeConsecutiveDuplicates = s => {
//    let removeWord = s.split(' ')
//    let acc = []

//    for (let i = 0; i < removeWord.length; i++ ){


//          if (removeWord[i] !== removeWord[i + 1] ){
//            acc.push(removeWord[i])
//          }
//    }
//    return acc.join(" ")

// }

// console.log((removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')))

// - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.

// function maps(x) {
//   let double = [];
//   for (let i = 0; i < x.length; i++) {
//     double.push(x[i] * 2);
//   }
//   return double;
// }

// console.log(maps([4,5,2]))

// Prefizzbuzz workout

// function preFizz(n) {

//   var output = [];

//   for (let i = 1; i <= n; i++) {
//     output.push(i);
//   }
//   return output;
// }
// console.log(preFizz(4))

// Function 3 - multiplying two numbers

// function multiply(x, y){
// return (x * y);
// }
// console.log(multiply(5, 10))

// Is he gonna survive?

// function hero(bullets, dragons){
//    return bullets >= 2 * dragons;
// }

// console.log(hero(100, 40))

// FIXME:BUGFIX

// var replaceDots = function(str) {
//    var str= 'one.two.three'
//    return str.replace(/[.]/g, '-');
//  }
// function getDrinkByProfession(param)
// {
// param = param.toUpperCase();
// console.log(param);
// if(param == "JABRONI")
// {
// return "Patron Tequila";
// }else if( param == "SCHOOL COUNSELOR")
// {
// return "Anything with Alcohol";
// }else if(param == "PROGRAMMER")
// {
// return "Hipster Craft Beer";
// }else if(param == "BIKE GANG MEMBER")
// {
// return  "Moonshine" ;
// }else if(param == "POLITICIAN")
// {
// return  "Your tax dollars" ;
// }else if(param == "RAPPER")
// {
// return  "Cristal" ;
// }else if(param == 'PUNDIT')
// {
// return "Beer";
// }else if(param == "PUG")
// {
// return "Beer";
// }else
// {
// return "Beer";
// }
// }

// console.log(getDrinkByProfession("programmer"))

// function peopleWithAgeDrink(old) {
//     if (old < 14){
//         return 'drink toddy';
//     } else if(old < 18){
//         return 'drink coke';
//     }else if(old < 21 ){
//         return 'drink beer';
//     }else if(old >= 21){
//         return 'drink whisky';
//     }
//   };

//   console.log(peopleWithAgeDrink(55))

//Checl exam

function checkExam(array1, array2) {
    var score = 0;
      
      for (var i = 0; i < array1.length; i++){
      
        if (array1[i] == array2[i]) {
        
        score += 4;
        
        }
        
        else if (array2[i] === ""){
    
          score += 0
      
        }
        
         
        else {
        
        score -= 1
        
        }
    
      
      }
      
      if (score < 0) {
      
        score = 0
        
      }  
     
     return score
     
    }

    console.log(checkExam(["a", "b", "b", "c"], ["a", "b", "a", ""]  )) = 7