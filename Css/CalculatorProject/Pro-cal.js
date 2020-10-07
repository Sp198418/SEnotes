

var allButtons = document.querySelectorAll('.button');

var screen = document.querySelector('.display');
console.log(screen.innerHTML)


function inputChange(event){
  console.log(event.target.value)
  screen.innerHTML += event.target.value
}

function addAllEventListeners(arr){

  
    for(var i = 0; i < arr.length; i++){
  
      arr[i].addEventListener('click', inputChange);
    }
  }
  addAllEventListeners(allButtons);


 var str = '2 + 2'

 function operater(equals){
  var arr = equals.split('')
  var val1 = parseInt(arr[0])
  var num = arr[1]
  var val2 = parseInt(arr[2])

  if(num === "+"){
    return val1 + val2
  }else if(num ==="-") {
    return val1 - val2
  }
 }
   

