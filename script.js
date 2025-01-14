const body = document.querySelector('body');
const headerButton = document.querySelector('#headerButton');
const gridContainer = document.querySelector('#container');

// add EventListener for button to reate new grid
headerButton.addEventListener('click', function setDimension(event){
    const gridDimension = getDimension();

    // if there is old squares in container of grid, remove all squares.
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // add new squares in container
    addNewSquares(gridDimension)
    // add hover function for grid
    addHoverfunction();
})

// retrieve the dimension of the new grid
function getDimension(){
    do {
        // prompt a window for user to input the value of dimension
        let dimension = prompt(`Please enter your dimension for new grid. The range for dimension is an interger between 1 to 100`);

        // check whether the "Cancel" button is clicked.
        if(dimension === null){
            alert("You should enter an interger.");
        }
        else{
            // Make sure the input of user is an interger and the integer is in the legal range
            check = validateInput(dimension);
            if(check){
                 return Number(dimension);
            }
            else{
                alert(`Please make sure your input is an integer between 1 to 100.`); 
            }
        } 
    } while(true);
}

// Valid whether the input is an interger and whether the integer is from 1 to 100 
function validateInput(dimension){
    dimension = Number(dimension);
    if(Number.isInteger(dimension) && dimension > 0 && dimension <= 100){
        return true;
    }
    else{
        return false;
    }
}

// add squares in container of new grid
function addNewSquares(gridDimension){
    // generate th whole grid in container
    for (let i=1 ; i <= gridDimension ; i++){
        // add rows in grid cobtainer to include squares
        let gridRow = document.createElement('div'); 
        gridRow.setAttribute("class", "rows");
        gridContainer.appendChild(gridRow);

        // add squares in rows
        for (let j=1 ; j <=gridDimension ; j++){
            let gridSquare = document.createElement('div'); 
            gridSquare.classList.add("squares");
            gridRow.appendChild(gridSquare);
        }
    }
}

// add EventListner for each square in container of new grid
function addHoverfunction(){

    // add EventListner on element in class "squares" to make hover effect
    const gridSquare = document.querySelectorAll(".squares");

    // change the class type of squares in grid based on the position of mouse.
    gridSquare.forEach((square) => {

        const footerBlack = document.querySelector("#footerBlack");
        const footerRandom = document.querySelector("#footerRandom");

        // the default color for hover effect is black
        let squareColor = "black";
        // the default transparency for hover effect is 0
        let squareOpacity = 0;

        // choose color effect when hovering
        chooseColor(square, footerBlack, footerRandom, squareColor, squareOpacity);
    })
}

function chooseColor(square, footerBlack, footerRandom, squareColor, squareOpacity){
    let colorChoice = "black";

    // if you click "Black", squares will gradually be colored black
    footerBlack.addEventListener("click", event => {
        colorChoice = "black";
    });

    // if you click "Random", squares will gradually be colored random color
    footerRandom.addEventListener("click", event => {
        colorChoice = "random";
    });

    // if mouse hover on square, it will change color based on the button you clicked in footer
    square.addEventListener("mouseover", event => {
        // impelemnt a progressive darkening effect where each hover interaction will darken the square by 10% with "opacity" value
        // stop increasing opacity value when it arrives 1
        if(squareOpacity < 1)  {
            squareOpacity += 0.1;
        }

        // square will be colored black 
        if (colorChoice == "black"){
            squareColor = "black";
        }
        // square will be colored random color
        else if(colorChoice == "random"){
            squareColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
        }
        square.setAttribute("style", `background: ${squareColor}; opacity: ${squareOpacity};`);
    });
}

// randomize 3 different values in rgb with this function
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
