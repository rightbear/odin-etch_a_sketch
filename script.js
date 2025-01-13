
const body = document.querySelector('body');

const gridContainer = document.createElement('div');
gridContainer.setAttribute("id", "container");

body.appendChild(gridContainer);

for (let i=1 ; i <= 16 ; i++){
    let gridRow = document.createElement('div'); 
    gridRow.setAttribute("class", "rows");
    gridContainer.appendChild(gridRow);

    for (let j=1 ; j <=16 ; j++){
        let gridElement = document.createElement('elements'); 
        gridElement.setAttribute("class", "elements");
        gridRow.appendChild(gridElement);
    }
}