const body = document.querySelector('body');

// add button to set the dimension for new grid in container 
const queryButton = document.createElement('button');
queryButton.textContent = "Create Grid";
queryButton.setAttribute("id", "queryButton")
body.appendChild(queryButton);

// add grid cobtainer to include rows(consiisting of squares)
const gridContainer = document.createElement('div');
gridContainer.setAttribute("id", "container");
body.appendChild(gridContainer);

// add EventListener for button to reate new grid
queryButton.addEventListener('click', function setDimension(event){
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
            gridSquare.classList.add("withoutHover");
            gridRow.appendChild(gridSquare);
        }
    }
}

// add EventListner for each square in container of new grid
function addHoverfunction(){
    // hover effect method1: add EventListner on element in class "squares"
    const gridSquare = document.querySelectorAll(".squares");

    // change the class type of squares in grid based on the position if mouse.
    gridSquare.forEach((square) => {
        // if mouse hover on square, it will change color to red
        square.addEventListener("mouseover", event => {
            square.classList.remove("withoutHover");
            square.classList.add("withHover");
        });

        // if mouse leave the square, it will will back to white
        /*
        square.addEventListener("mouseout", event => {
            square.classList.remove("withHover");
            square.classList.add("withoutHover");
        });
        */
    })
}
