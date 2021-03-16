// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.

// function greet(name){
//     if(name === "Johnny")
//     return "Hello, my love!";
//     return "Hello, " + name + "!";
// }


// function points(games) {
//     let sum = 0
//     for(i = 0; i < games.length; i++) {
//         let currentGame= games[i]
//         let scores= currentGame.split(':')
//         if (scores[0] > scores[1] ) {
//             sum += 3
//         }else if (scores[0] === scores[1]) {
//             sum += 1
//         }
//     }
//     return sum 
// }

// //console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))
// console.log(points(['1:0','2:0','3:0','4:0','2:1','1:3','1:4','2:3','2:4','3:4']))


// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...


// function friend(friends) {
//     list = []
//     for(let i = 0; i < friends.length; i++) {
//         if (friends[i].length === 4 ){
//             list.push(friends[i])
//         }
//     }
//     return list
// }

// console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))


// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 
// If the number is prime return the string '(integer) is prime'

// function divisors(integer) {
  
// };

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// function order(words){
//     let arrayWords = words.split(' ');
//     let result = [];
    
//     for (let i = 0; i < arrayWords.length; i++){
//         let currentword = arrayWords[i];
//         let index = currentword.match(/[1-9]/) - 1;
//         result[index] = currentword;
           
//     }
    
//     return result;
// }

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"))


// our task is to remove all consecutive duplicate words from string, leaving only first words entries

// function removeConsecutiveDuplicateWords (s) {
    // evry time we are gonna check if the current elem is not gonna be the same with the next one/ if they are not the same we are gonna add them to our final str 
//     let arr = s.split(' ')
//     let finalStr = [];
//       for ( let i = 0; i < arr.length; i++) {
//            let elem = arr[i]
//            if ( elem !== arr[i+1]){
//              finalStr.push(elem)
//            } 
//          // check every element next to one and we will see how it works
          
//       }
//          return finalStr.join(' ') 
//   }
  
//  console.log(removeConsecutiveDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')) // // 'alpha beta gamma delta alpha beta gamma delta'

// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?


// function nbYear(p0, percent, aug, p) {
//   let year = 0;
//   let population = p0
//   while  (population < p) {
//   population += population * percent/100 + aug;
//   year ++;

//   }
//   return year
  
// }
// console.log(nbYear(1000, 2, 50, 1200))

function Node(data){
    this.data = data;
    this.next = null
}

function LinkedList(){
    this._length = 0;
    this.head = null;
}

LinkedList.prototype.add = function(val){
    var node = new Node(val);
    // if there is no head 
    // set node to head of list
    if (!this.head){
        this.head = node;
        this._length += 1;
        return node;
    }
    var current = this.head;
    while (current.next){
        current = current.next
    }
    current.next = node;
    this._length += 1;
    return node;
}

var sll = new LinkedList();
sll.add(10);
sll.add(12);
console.log(sll);
