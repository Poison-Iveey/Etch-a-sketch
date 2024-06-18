
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
            new_gridItem.setAttribute('data-darkness', 0); // Initialize darkness level
            gridContainer.appendChild(new_gridItem);
        }

        let new_squares = document.getElementsByClassName('new_items');
        for (let i = 0; i < new_squares.length; i++) {
            new_squares[i].addEventListener("mouseover", function() {
                this.style.background = getRandomColor();
            });
        }
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;// this are placeholders which allow embeding of the variables directly within the strings
    //If r, g, and b were 123, 45, and 67 respectively, the line return \rgb(${r}, ${g}, ${b})`;would produce the string"rgb(123, 45, 67)"`.
}

function darkenGrid() {
    let new_squares = document.getElementsByClassName('new_items');
    for (let i = 0; i < new_squares.length; i++) {
        let darkness = parseInt(new_squares[i].getAttribute('data-darkness'), 10);
        if (darkness < 10) {
            darkness++;
            new_squares[i].setAttribute('data-darkness', darkness);
            let shade = 255 - (darkness * 25.5);
            new_squares[i].style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
        }
    }
}


let button = document.getElementById('button');
button.addEventListener("click", myFunction);  

let darkenButton = document.getElementById('darkenButton');
 darkenButton.addEventListener("click", darkenGrid);




  

