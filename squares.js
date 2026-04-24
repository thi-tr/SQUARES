let squareArea = document.querySelector("#squarearea");
// let squareArea = document.getElementById("#squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
//Make some variable for a really big zindex
for(let i = 0; i < squareCount; i++){
    //make a square
    let square = document.createElement("div");
    square.className = "square";
    square.style.left = parseInt(Math.random()*650)+"px";
    square.style.top = parseInt(Math.random()*250)+"px";
    square.style.backgroundColor = getRandomColor();
    //I can put a onclick and a function(this)
    //put it on the screen
    squareArea.append(square);
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
//Make a function to add 1 square
//Make sure that I set that as the onclick for the button

//Make a funciton that changes all the colors of all the squares
//make sure the button calls it
function changeColors(){
    //make an array
    let allSquares = document.querySelectorAll(".square");
    //for of loop or just dp a regular fpr loop with index
    //Change the color
}