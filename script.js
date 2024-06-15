
let gridContainer = document.getElementById("myGrid");

for (let i = 0; i < 256; i++){   // to loop from 0 to 255 making it 256 grids in total
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);}



let gridItems = document.getElementsByClassName('grid-item');
    for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].addEventListener("mouseover", function() {
                this.style.background = "#ffd66b";
            });
        }



function myFunction(){
    let new_grid = prompt('How many squares per side do you want? Please enter a number <= 100:');
    new_grid = parseInt(new_grid, 10);

    if (isNaN(new_grid) || new_grid > 100) {
        alert("Input a number below or equal to 100!");
    } else {
        let gridContainer = document.getElementById("myGrid");
        gridContainer.innerHTML = ''; // Clear the existing grid

        let gridItemSize = 600 / new_grid; // Calculate the size of each item to ensure it fits into the container perfectly

        for (let i = 0; i < new_grid * new_grid; i++) {
            let new_gridItem = document.createElement('div');
            new_gridItem.className = 'new_items';
            new_gridItem.style.width = `${gridItemSize}px`;
            new_gridItem.style.height = `${gridItemSize}px`;
            gridContainer.appendChild(new_gridItem);
        }

        let new_squares = document.getElementsByClassName('new_items');
        for (let i = 0; i < new_squares.length; i++) {
            new_squares[i].addEventListener("mouseover", function() {
                this.style.background = "#ffd66b";
            });
        }
    }
}

let button = document.getElementById('button');
button.addEventListener("click", myFunction);  
  

