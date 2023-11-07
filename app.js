const colorButton = document.getElementById('color-button');
const page = document.body;

//colors
const redClr = 'red';
const blueClr = 'blue';

//initial state
let currentColor = 'red'; // 'red' or 'blue'



colorButton.addEventListener('click', (event) => {
console.log ("user clicked the button") ;
console.log (event); 
if (currentColor === 'red'){
   page.style.backgroundColor = redClr;
   currentColor = 'blue';

}
else {
   page.style.backgroundColor = blueClr;
   currentColor = 'red';
}


});




