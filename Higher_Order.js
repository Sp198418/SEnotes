// Higher order functions
        // .filter()
        // .reduce()      
        // .map()
  
    

// filter questions
// Level 0
    // given an array of numbers filter out any that are larger than 10
    // let num = [8, 4, 6, 24,94]

    // let largerNums = num.filter(function(n){return n > 10})
    // console.log(largerNums)
// Level 1
    // given an array of numbers filter out any that are divisible by 3
    //    let num = [2,1,18,30]
    //    let dividedNums = num.filter(function(n){return n%3==0})
    //     console.log(dividedNums)
    // given an array of numbers filter out any that are even
    //   let evennum = [2, 8, 1, 3]
    //   let doubleNums = evennum.filter(function(n){return n%2==0})
    // console.log(doubleNums)
// Level 2
    // given an array of strings, filter out any that are longer than 4 chars
        //  let toys = ['Ball', 'Drone', 'Doll'] 
        //  coolToys = toys.filter(function(n){
        //      return n.length < 5
        //  })
        //  console.log(coolToys)


    // given an array of arrays, filter out any that are shorter than 10 elements
            //  let arr = [[video game, Soccer, basketball], [apple, banana, grape, orange,watermelon], , [1,2,3,4,5,6,7,8,9,10,11]]

            //  Newarr = arr.filter(function(n){return n.length >= 10})
            //  console.log(Newarr)
// // Level 3
//     // given an array of objects, filter out any that dont have a key called 'firstName'
//     let arrOfObjs = [{test:'test'}, {name:'test'}, {test:'test'}, {firstName:'Jess'}];
//     let noFistName = arrOfObjs.filter(function(obj){return !obj['firstName']});
//     // console.log(noFistName);
// // reduce questions 
// // level 0:
//     // given an array of numbers add them all together
//     let sum = arrOfNums.reduce(function(a,n){return a + n})
//     // console.log(sum);
// // level 1:
//     // given an array of numbers, multiply them all together
//     let mult = arrOfNums.reduce(function(a,n){return a * n})
//     // console.log(mult);
// // level 2:
//     // given an array of strings, concatiante them together 
//     let concat = arrOfStrs.reduce(function(a,str){return a + str})
//     // console.log(concat);
// // level 3: 
//     // given an array of arrays make them all into one array 
//     arrOfArrs = [[1,2,3,4], [0,1,2,3,4,5], ['a','b','c','d','e','f'], ['g']]; // [1,2,3,4,0,1,2,3,4,5,'a','b','c','d','e','f','g']
//     let oneArr = arrOfArrs.reduce(function(a, c){return a + ',' + c }).split(',');
//     // console.log(oneArr);
// // level 5:
//     // given an array of strings, remove any vowels and concatenate them together 
//     let concatNoVowels = arrOfStrs.reduce(function(a, str){return a + str.replace(/[AEIOU]/ig, '')}, '');
//     console.log(concatNoVowels);

// // map questions
// // level 0:
//     // given an array of numbers, return a new array with all numbers multiplied by 2
//     let double = arrOfNums.map(function(num){return num*2});
//     // console.log(double);

// // level 1:
//     // given an array of numbers, return a new array with all numbers increased by 1
//     let plus1 = arrOfNums.map(function(num){return num+1});
//     // console.log(plus1);
// // level 2:
//     // given an array of strings, return a new array with all strings as capitals
//     let caps = arrOfStrs.map(function(str){return str.toUpperCase()});
//     // console.log(caps);
