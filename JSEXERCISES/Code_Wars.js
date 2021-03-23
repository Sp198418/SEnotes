
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

// function checkExam(array1, array2) {
//     var score = 0;

//       for (var i = 0; i < array1.length; i++){

//         if (array1[i] == array2[i]) {

//         score += 4;

//         }

//         else if (array2[i] === ""){

//           score += 0

//         }


//         else {

//         score -= 1

//         }


//       }

//       if (score < 0) {

//         score = 0

//       }  

//      return score

//     }

//     console.log(checkExam(["a", "b", "b", "c"], ["a", "b", "a", ""]  )) = 7


// function detect(comment) {

//     var str = "Can someone explain";

//        return comment.startsWith(str);

//     }


// console.log(detect('Can someone explain'))


////4 

// Remove all even integers

// function removeEven(arr) {
//     var odds = []
//     for (let number of arr) {
//         if (number % 2 != 0 ) // check if the item in the list is not even
//          odds.push(number)  // if it isn't even append it to the empty array
//     }
//     return odds
// }

// console.log(removeEven([3, 5, 6, 45, 4, 63]))


// Check for balanced parentheses

// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {

//         // If character is an opening brace add it to a stack
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//         else {
//             let last = stack.pop();

//             //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//             if (str[i] !== map[last]) {return false};
//         }
//     }
//     // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//         if (stack.length !== 0) {return false};

//     return true;
// }

// console.log(isMatchingBrackets("(){}")); // returns true


// // Queue: Generate Binary Numbers from 1 to n


// module.exports = class Queue {

//     constructor() {
//         this.items = [];
//         this.front = null;
//         this.back = null;

//     }



//     isEmpty() {
//         return this.items.length == 0;
//     }

//     getFront() {
//         if (this.items.length != 0) {
//             return this.items[0];
//         } else
//             return null;
//     }

//     size() {
//         return this.items.length;
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }



//     dequeue() {
//         if (this.items.length == 0) {
//             return null;
//         } else {
//             return this.items.shift();

//         }
//     }
// }


// // Linked List: Reverse Linked List

// "use strict";
// const Node = require('./Node.js');

// module.exports = class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   //Insertion At Head  
//   insertAtHead(newData) {
//     let tempNode = new Node(newData);
//     tempNode.nextElement = this.head;
//     this.head = tempNode;
//     return this; //returning the updated list
//   }

//   isEmpty() {
//     return (this.head == null);
//   }

//   //function to print the linked list
//   printList() {
//     if (this.isEmpty()) {
//       console.log("Empty List");
//       return false;
//     } else {
//       let temp = this.head;
//       while (temp != null) {
//         process.stdout.write(String(temp.data));
//         process.stdout.write(" -> ");
//         temp = temp.nextElement;
//       }
//       console.log("null");
//       return true;
//     }
//   }

//   getHead() {
//     return this.head;
//   }
//   setHead(newHead) {
//     this.head = newHead;
//     return this;
//   }
//   getListStr() {
//     if (this.isEmpty()) {
//       console.log("Empty List");
//       return "null";
//     } else {
//       let st = "";
//       let temp = this.head
//       while (temp != null) {
//         st += String(temp.data);
//         st += " -> ";
//         temp = temp.nextElement;
//       }
//       st += "null";
//       return st;
//     }
//   }
//   insertAtTail(newData) {
//     //Creating a new Node with data as newData
//     let node = new Node(newData);

//     //check for case when list is empty
//     if (this.isEmpty()) {
//       //Needs to Insert the new node at Head
//       this.head = node;
//       return this;
//     }

//     //Start from head
//     let currentNode = this.head;

//     //Iterate to the last element
//     while (currentNode.nextElement != null) {
//       currentNode = currentNode.nextElement;
//     }

//     //Make new node the nextElement of last node of list
//     currentNode.nextElement = node;
//     return this;
//   }
//   search(value) {
//     //Start from the first element
//     let currentNode = this.head;

//     //Traverse the list until you find the value or reach the end
//     while (currentNode != null) {
//       if (currentNode.data == value) {
//         return true; //value found
//       }
//       currentNode = currentNode.nextElement
//     }
//     return false; //value not found
//   }
//   deleteAtHead() {
//     //if list is empty, do nothing
//     if (this.isEmpty()) {
//       return this;
//     }
//     //Get the head and first element of the list
//     let firstElement = this.head;

//     //If list is not empty, link head to the nextElement of firstElement
//     this.head = firstElement.nextElement;

//     return this;
//   }
//   deleteVal(value) {
//     let deleted = null; //True or False
//     //Write code here

//     //if list is empty return false
//     if (this.isEmpty()) {
//       return false;
//     }

//     //else get pointer to head
//     let currentNode = this.head;
//     // if first node's is the node to be deleted, delete it and return true
//     if (currentNode.data == value) {
//       this.head = currentNode.nextElement;
//       return true;
//     }

//     // else traverse the list
//     while (currentNode.nextElement != null) {
//       // if a node whose next node has the value as data, is found, delete it from the list and return true
//       if (currentNode.nextElement.data == value) {
//         currentNode.nextElement = currentNode.nextElement.nextElement;
//         return true;
//       }
//       currentNode = currentNode.nextElement;
//     }
//     //else node was not found, return false
//     deleted = false;
//     return deleted;
//   }
//   deleteAtTail() {
//     // check for the case when linked list is empty
//     if (this.isEmpty()) {
//       return this;
//     }
//     //if linked list is not empty, get the pointer to first node
//     let firstNode = this.head;
//     //check for the corner case when linked list has only one element
//     if (firstNode.nextElement == null) {
//       this.deleteAtHead();
//       return this;
//     }
//     //otherwise traverse to reach second last node
//     while (firstNode.nextElement.nextElement != null) {
//       firstNode = firstNode.nextElement;
//     }
//     //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
//     firstNode.nextElement = null;
//     return this;
//   }
// }

let num = [1,2,3,5,6,7]
// Find the missing number

let ans = []
//  num.forEach((n, i) => {
 
//   if(n-1 !== i){
//     console.log('hit')
//    ans.push (i + 1);
//    return
//   }
// } )

num.forEach((n, i) => n-1 !== i ? ans.push(i + 1): null )

console.log(ans[0])