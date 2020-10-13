// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, and Java), "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell, Lua) or "¥" (Rust).


// function bonusTime(salary, bonus) {
//     if(bonus === true){
//         return '£' + salary * 10;
//     }else if (bonus === false)
//         return '£' + salary
//     }

// console.log(bonusTime(100, true))


// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// function DNAtoRNA(dna) {
//     return dna.split("G").join("S");
//   }

//   console.log(DNAtoRNA('GCAT' + ' PACK'))


// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. 
// When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, 
// you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// String.prototype.toJadenCase = function () {
//     var quoteString = [];
//     var Capwords = this.toLowerCase().split(' ');
    
//     for (var i = 0; i < Capwords.length; i++) {
//         word = Capwords[i];
//         quoteString.push(word[0].toUpperCase() + word.slice(1));
//     }
//     return quoteString.join(" ");

// }

// console.log( "If a book store never runs out of a certain book, does that mean that nobody reads it, or everybody reads it".toJadenCase() );

// // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// function filter_list(l) {
//     var test;
//     var num = [];
//     for(i = 0; i < l.length; i++) {
//       test = typeof l[i];
//       if(test == "string"){
//         num.push(i);
//       }
//     }
//     for(i = 0; i < num.length; i++) {
      