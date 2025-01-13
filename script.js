const body = document.querySelector('body');

// add grid cobtainer to include rows(consiisting of squares)
const gridContainer = document.createElement('div');
gridContainer.setAttribute("id", "container");

body.appendChild(gridContainer);

for (let i=1 ; i <= 16 ; i++){
    // add rows in grid cobtainer to include squares
    let gridRow = document.createElement('div'); 
    gridRow.setAttribute("class", "rows");
    gridContainer.appendChild(gridRow);

    // add squares in rows
    for (let j=1 ; j <=16 ; j++){
        let gridSquare = document.createElement('div'); 
        gridSquare.setAttribute("class", "squares");
        gridRow.appendChild(gridSquare);
    }
}

// hover effect method1: add EventListner on element in class "squares" */
const gridSquare = document.querySelectorAll(".squares");

gridSquare.forEach((square) => {
    square.addEventListener("mouseover", event => {
        square.setAttribute("style", "background: red;");
    });

    square.addEventListener("mouseout", event => {
        square.setAttribute("style", "background: white;");
    });
});
  