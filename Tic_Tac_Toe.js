// Restart Game Button
var restart = document.querySelector('#b');


// Grab all the squares
var squares = document.querySelectorAll("td");

var square1 = document.querySelector('#one');
var square2 = document.querySelector("#two");
var square3 = document.querySelector("#three");
var square4 = document.querySelector("#four");
var square5 = document.querySelector("#five");
var square6 = document.querySelector("#six");
var square7 = document.querySelector("#seven");
var square8 = document.querySelector("#eight");
var square9 = document.querySelector("#nine");


// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
      squares[i].textContent = '';
      squares[i].style.color = 'black';
  }

}
restart.addEventListener('click',clearBoard)

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}
function changeHeaderColor(x, y, z){
  if (square1.textContent === 'O' && square2.textContent === 'O' && square3.textContent === 'O'){
    square1.style.color = getRandomColor();
    square2.style.color = getRandomColor();
    square3.style.color = getRandomColor();
  }
  else if (square4.textContent === 'O' && square5.textContent === 'O' && square6.textContent === 'O'){
    square4.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square6.style.color = getRandomColor();
  }
  else if (square7.textContent === 'O' && square8.textContent === 'O' && square9.textContent === 'O'){
    square7.style.color = getRandomColor();
    square8.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square1.textContent === 'O' && square4.textContent === 'O' && square7.textContent === 'O'){
    square1.style.color = getRandomColor();
    square4.style.color = getRandomColor();
    square7.style.color = getRandomColor();
  }
  else if (square2.textContent === 'O' && square5.textContent === 'O' && square8.textContent === 'O'){
    square2.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square8.style.color = getRandomColor();
  }
  else if (square3.textContent === 'O' && square6.textContent === 'O' && square9.textContent === 'O'){
    square3.style.color = getRandomColor();
    square6.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square1.textContent === 'O' && square5.textContent === 'O' && square9.textContent === 'O'){
    square1.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square3.textContent === 'O' && square5.textContent === 'O' && square7.textContent === 'O'){
    square3.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square7.style.color = getRandomColor();
  }
  else if (square1.textContent === 'X' && square2.textContent === 'X' && square3.textContent === 'X'){
    square1.style.color = getRandomColor();
    square2.style.color = getRandomColor();
    square3.style.color = getRandomColor();
  }
  else if (square4.textContent === 'X' && square5.textContent === 'X' && square6.textContent === 'X'){
    square4.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square6.style.color = getRandomColor();
  }
  else if (square7.textContent === 'X' && square8.textContent === 'X' && square9.textContent === 'X'){
    square7.style.color = getRandomColor();
    square8.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square1.textContent === 'X' && square4.textContent === 'X' && square7.textContent === 'X'){
    square1.style.color = getRandomColor();
    square4.style.color = getRandomColor();
    square7.style.color = getRandomColor();
  }
  else if (square2.textContent === 'X' && square5.textContent === 'X' && square8.textContent === 'X'){
    square2.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square8.style.color = getRandomColor();
  }
  else if (square3.textContent === 'X' && square6.textContent === 'X' && square9.textContent === 'X'){
    square3.style.color = getRandomColor();
    square6.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square1.textContent === 'X' && square5.textContent === 'X' && square9.textContent === 'X'){
    square1.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square9.style.color = getRandomColor();
  }
  else if (square3.textContent === 'X' && square5.textContent === 'X' && square7.textContent === 'X'){
    square3.style.color = getRandomColor();
    square5.style.color = getRandomColor();
    square7.style.color = getRandomColor();
  }
  else{
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.color = 'black';
    }
  }
}

// Create a function that will check the square marker
function changeMarker(){

    if(this.textContent === ''){
      this.textContent = 'X';
      // console.log(marker)
    }else if (this.textContent === 'X') {
      this.textContent = 'O';
    }else {
      this.textContent = '';
    }
};
// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}

setInterval("changeHeaderColor(square1, square2, square3)",500);
