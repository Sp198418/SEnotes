//Q1: Create a loop that greets us 5 times!
//      - The console should similar to the following:
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//          - Hi!
//function greet(){
//    for(var i = 0; i < 5; i++){
 //       console.log('Hi!');
//    }
 //       return 'Done'
// }

//console.log(greet());

// Q2: Create a loop which logs the index. Try and use a template literal to produce the result.
//      - The console should similar to the following:
//          - Loop Count: 1
//          - Loop Count: 2
//          - Loop Count: 3
//          - Etc.. based on the max value parameter
//var num = [8, 5, 6]
//function times(arr){
  //   for(var i = 0; i < arr.length; i++){
       
  //   var output = num.indexOf(arr[i])

  //    console.log(output)
  //  }
  //       return 'end'
  //   }

  //    console.log(times(num))




// Q3: Loop over the following array and console.log the current index value
  //    var hero = ['Zeus', 'Hades', 'Hermies', 'Poseidon']
//      - The console should similar to the following:
//          -   Zeus
//          -   Hades
//          -   Hermies
//          -   Poseidon
//   function Super(arr){
            
 // for(var i = 0; i < arr.length; i++){
  //      var output = arr[i]
   //  console.log(output)
   //     }

   //}

  // console.log(Super(hero));



// Q4: Loop over an array of strings and return a new array of single letter strings
    // Input:    ['As', 'Soon', 'As', 'Possible']
    // Output: ['A','S','A','P']
 //var commad =  ['As', 'Soon', 'As', 'Possible']

   // function word(arr){
    //    var capWords = [];
    
    //    for(var i = 0; i < arr.length; i++){
      //      var ele = arr[i];
    
      //      var first = ele[0]
            
    
       //     var capitalized = first 
    
       //     capWords.push(capitalized);
      //  }
    
     //   return capWords;
   // } 
    
  //  console.log(word(commad));
    


// Q5: Loop over an array and log to the CLI an array where each word has its second letter capitalized
    // - Input:    ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];
    // - Output: ['APple', 'BAnana', 'ORange', 'PEach', 'STrawberry', 'PLum'];
//var fruittree = ['Apple', 'Banana', 'Orange', 'Peach', 'Strawberry', 'Plum'];

//function capsec(arr){
 //   var capWords = [];

  //  for(var i = 0; i < arr.length; i++){
   //     var ele = arr[i];

  //      var first = ele[1]
   //     var Seclet = first.toUpperCase();
        

    //    var capitalized = first + Seclet
//
  //      capWords.push(capitalized);
  //  }
//
  //  return capWords;
//} 

//console.log(capsec(fruittree));



// Q6: Loop over an array of names and log the first and last initial of each person
    // - Input:    ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]
    // - Output: ['SE', 'RL', 'SPL', 'WPL']

    //var names = ['Shamika Earle', 'Ramsey Lewis', 'Samuel Pierre Louis', 'Wilson Pierre Louis' ]

   // function name(arr){
     //    for(var i = 0; i < arr.length; i++){
           
        //  var output = arr[i]
          
       //   var first = output.unshift('SE')
       //   var second = output.splice(1, 1, 'RL')
       //   var thrid = output.splice(2, 1, 'SPL')
       //   var fourth = output.splice(3, 1, 'WPL')
         
         
        //  var capitalized = first + second + thrid + fourth
          
      //      console.log(capitalized)
       // }
       //      return 'end'
       // }
   
        // console.log(name(names))