// Commented out describing solutionsM
// level 1
    // Q 1.1    
        // Write some code that extracts the end of the email address
        // Log that to the console 
            // example 
                // input:
                // creating an object and giving it key values
                // person = {
                //     fullName = 'Nic Leask',
                //     email = 'nic@gmail.com',
                // }
                // // output:
                // '@gmail.com'
                // setting the key value endOfEmail to the obj and using split to get the second part of the string
                let endOfEmail = person.email.split('@')[1];
                // console.log('@' + endOfEmail);

// level 2
    // Q 2.1
        // write a conditional statement which checks if the person is 5'11", shorter, or taller.
        // If the person is the same log, "Same height as Beckham"
        // If the person is taller log, "Taller than Beckham"
        // If the person is shorter log, "Shorter than Beckham"
            // hint there are 12 inches in a foot, you may want to convert the height into only inches
            // using a function with a param of str
            function heightConverter(str){
                // variable feet equal to foot value
                let feet = Number(str.split("'")[0]);
                // varialbe inches equal to the inches value using split
                let inches = Number(str.split("'")[1].slice(0, -1));
                // person.heightInInches is equal to converted height into to inches
                person.heightInInches = inches + (feet*12);
                console.log(person.heightInInches)
            }

            heightConverter(person.height);
            console.log(person.heightInInches);
        //   if statement generator outputs a string based on a <,> or === value 
            if(person.heightInInches > 71){
                console.log("Taller than Beckham");
            } else if (person.heightInInches === 71) {
                console.log("Same height as Beckham");
            } else if (person.heightInInches < 71) {
                console.log("Shorter than Beckham");
            }

    // Q 2.2
        // Create a function which takes in an object 
        // If the object doesn't have a specific key return 'No such value'.
        // If it does, return that key's value. 
        function hasValue(obj, str){
            // if statement set object and key value to undefined
            if(obj[str] !== undefined){
                // the function will output the given string value
                return `${person.fullName}, ${str}: ${obj[str]}`;
            } else {
                // if false the function will output (undefined) which is equal to the string undefined
                return `${person.fullName}, ${str}: no such value.`;
            }
        }

        console.log(hasValue(person, 'Nationality'))

// level 3
    // Q 3.1
        // Using the full name property, get the person's initials.
        // Create a new key called initials.
        // Set the value of this key to the person's initials.
            // Hint if you're getting stuck refer to last nights assignment in "SEInstructorNotes\Assignments\Day7Loops.js"

        function initialCreator(obj){
            // value set equal to the full split at each index
            let arrOfNames = obj.fullName.split(' ');
            // accumalator
            obj.initials = '';
            // for statement that runs arcoss the fullName
            for(let i = 0; i < arrOfNames.length; i++){
                // obj.initials equal to itself plus the first index
                obj.initials = obj.initials + arrOfNames[i][0];
            // } output the persons initials
            return obj.initials;            
        }

        console.log(initialCreator(person));
        //   function with param of person
        function initial(person){
            // variable nameSplt equal to string fullname split at each index
            var nameSplt = person['fullName'].split(' ');
            // accumlator
            var initials2 = '';
            // for statement that runs across the fullName string
            for(var j = 0; j < nameSplt.length; j++){
                //  takes the first letter out of the String
              var name = nameSplt[j];
              var initial = name[0];
                // variable initial2 is equal itself plus initial
              initials2 = initials2 + initial;
            // } outputs the initial of the String value
            return initials2;
        }
        console.log(initial(person));







/// CODE WARS QUESTIONS

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// let arrayOfSheep = [
//     true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
//   ];


// function countSheeps(arrayOfSheep) {
//     let sheepCounter = 0;
    
//       for( var i = 0; i <arrayOfSheep.length; i++) {
       
//         if(arrayOfSheep[i]=== true) {
//           sheepCounter++;
//         }
//       }
   
//       return sheepCounter;
//   }
//    console.log(countSheeps(arrayOfSheep))

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// function numberSum(N) {
//     var total = 0;
//       for(var i = 1; i <= N; i++){
//         total += i;
//       }
//       return total;
//   }
//   console.log(numberSum(3))

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers){
//     var sqNum = numbers.map(num=>num*num);
//     var addNum = sqNum.reduce((acc,curr)=> acc + curr);
//     console.log( addNum )
//   };
  
//   console.log(squareSum([1, 2, 2]));


// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2)
// {
//   if(operation == '+')return value1 + value2;
//   if(operation == '-')return value1 - value2;
//   if(operation == '*')return value1 * value2;
//   if(operation == '/')return value1 / value2;
// }

// console.log(basicOp('*', 2,2))

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time/2);
//   }

//   console.log(litres(2))

// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.Given a year, return the century it is in.

// function centuryFromYear(year) {

//     return Math.ceil(year/100)

// }

// console.log(centuryFromYear(2020))




