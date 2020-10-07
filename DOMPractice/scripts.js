var body = document.querySelector('body');
var picture = document.querySelector('img');
var allButtons = document.querySelectorAll('button');

body.setAttribute('style', 'background-color: red');

picture.setAttribute('src', 'https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/prq9m5uhhmjjtfnlay6b.jpg')
picture.setAttribute('height', '200%')


var newText = document.createElement('h1');
var newPara = document.createElement('P')

newText.innerHTML = 'Hello World';
newPara.innerHTML = "This is a new P element";

body.appendChild(newText);
body.appendChild(newPara);


function inputChange(event){
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerHTML);

    var char = event.target.innerHTML;

   var screen= document.querySelector('#screen');

   screen.innerHTML += char;

}

function addAllEventListeners(arr){
 for(var i = 0; i< arr.length; i++){
     arr[i].add   EventListener('click', inputChange);
 }
}
addAllEventListeners(allButtons);