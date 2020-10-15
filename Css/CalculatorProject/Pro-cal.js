// targeting elements in HTML from JS

var allButtons = document.querySelectorAll('.button');

var screen = document.querySelector('.display');
console.log(screen.innerHTML)



function addAllEventListeners(arr){
 
 // looping  through array
  for(var i = 0; i < arr.length; i++){
    // if the value is equal to '=' or equal to 'C'
    if(arr[i].value === '=' || arr[i].value === 'C') {
      // the click value runs the calculate function
      arr[i].addEventListener('click', calculate);
       //  if the value is equal to '+/-' 
    } else if(arr[i].value === "+/-") {
        // the click value runs the pos_to_neg function
      arr[i].addEventListener('click', pos_to_neg);
    } else {
      arr[i].addEventListener('click', inputChange);
    }

  }
}
addAllEventListeners(allButtons);

function inputChange(event){
  console.log(event.target.alt)
   if (event.target.alt === 'DEL'){
 screen.innerHTML = screen.innerHTML.slice(0, -1);  
  }else{
  screen.innerHTML += event.target.value
} 

}




function calculate(event) {
  // current clicked buttons value
  var clickedButtonValue = event.target.value;
  console.log(clickedButtonValue)
  
  if (clickedButtonValue === '=' && screen.innerHTML  !== '') {
    // check if the display is not empty then only do the calculation
      // calculate and show the answer to display
       myEval(screen.innerHTML)
     // screen.innerHTML  = eval(screen.innerHTML );
      // if the C button is click and the display if not empty
  }else if (clickedButtonValue === 'C' ) {
       //display screen show cleared screen
      screen.innerHTML = "";
  }
}
function myEval(str){
   

   var operator = str.match(/[^0-9 \.]/g);
// split on the operator and evaluate using the resulting array ['9', '+', '8']
  var nums = str.split(operator)
  var firstNum = Number(nums[0]) 
  var secondNum = Number(nums[1])

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
  }
}
 
function pos_to_neg(event){ 
  var clickedButtonValue = event.target.value;
  var toNum = Number(screen.innerHTML);
  if(toNum < 0 ){
    screen.innerHTML = Math.abs(toNum) 
  } else if(toNum > 0 ){
    screen.innerHTML = -toNum
  }
   return clickedButtonValue = (screen.innerHTML)
}
