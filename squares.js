let squareArea = document.querySelector("#squarearea");
// let squareArea = document.getElementById("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
//Make some variable for a really big zindex
for(let i = 0; i < squareCount; i++){
    addSquare(); //adds a square for every i in squareCount
}

function getRandomColor(){
    //Make a color string?
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters.charAt(parseInt(Math.random()*letters.length));
    }
    //return that string
    return color;
}

//adds a square when 'Add Square' button is clicked
function addSquare(){
    //make a square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    //put it on the screen
    squareArea.append(square);
}

//changes color of all existing squares
function changeColors(){
    let allSquares = document.querySelectorAll(".square");
    //loop through each square and randomize the color
    for(let square of allSquares){
        square.style.backgroundColor = getRandomColor();
    }
}