

var allButtons = document.querySelectorAll('.button');

var screen = document.querySelector('.display');
console.log(screen.innerHTML)



function addAllEventListeners(arr){

  
  for(var i = 0; i < arr.length; i++){
    if(arr[i].value === '=' || arr[i].value === 'C' ) {
      arr[i].addEventListener('click', calculate);
    }else {
      arr[i].addEventListener('click', inputChange);
    }

  }
}
addAllEventListeners(allButtons);

function inputChange(event){
  console.log(event.target.value)
  screen.innerHTML += event.target.value
}

function calculate(event) {
  // current clicked buttons value
  var clickedButtonValue = event.target.value;
  
  if (clickedButtonValue === '=' && screen.innerHTML  !== '') {
    // check if the display is not empty then only do the calculation
      // calculate and show the answer to display
       myEval(screen.innerHTML)
     // screen.innerHTML  = eval(screen.innerHTML );
      // if the C button is click and the display if not empty
  }else if (clickedButtonValue === 'C' ) {
       //display screen show cleared screen
      screen.innerHTML = "";
  }else if (clickedButtonValue == '+/-') {
            myEval(screen.innerHTML)
  }
    
  }  
  
function myEval(str){
  // split on the operator and evaluate using the resulting array ['9', '+', '8']
   
   var operator = str.match(/[^0-9 \.]/g)
   console.log(operator, 'This is the opertor')
  var nums = str.split(operator)
  var firstNum = Number(nums[0]) 
  var secondNum = Number(nums[1])

  console.log(nums, 'nums',  operator, 'operator')
  if(operator == '+'){
    console.log(nums[0][1])
    screen.innerHTML = firstNum + secondNum
  }else if(operator == '-'){
    console.log(nums[0][1])
    screen.innerHTML = firstNum - secondNum
  }else if(operator == '÷'){
      console.log(nums[0][1])
    screen.innerHTML = firstNum / secondNum 
  }else if(operator == '×'){
    console.log(nums[0][1])
    screen.innerHTML = firstNum * secondNum 
  }else if (operator == '+/-'){
    console.log('We made it')

  }
}
 
// function pos_to_neg(num){

//   num > 0; num = -num
// }  
//   return Math.abs(num)
// }
