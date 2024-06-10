


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



     function myFunction() {
            let new_grid = prompt('How many squares per side do you want? Please enter a number <= 100:');
            new_grid = parseInt(new_grid, 10);
        
            if (isNaN(new_grid) || new_grid > 100) {
                alert("Input a number below or equal to 100!");
            } else {
                // Clear any existing grid
                let gridContainer = document.getElementById("myGrid");
                gridContainer.removeChild(gridItems)
        
                // Create new grid
                for (let i = 0; i < new_grid; i++) {
                    for (let j = 0; j < new_grid; j++) {
                        let square = document.createElement("div");
                        square.classList.add("grid-square");
                        square.addEventListener("click", function() {
                            alert("Square clicked!");
                        });
                        gridContainer.appendChild(square);
                    }
                   
                }
            }
        }


        let square = document.getElementsByClassName('grid-square');
        for (let i = 0; i < square.length; i++) {
            square[i].addEventListener("mouseover", function() {
                this.style.background = "#ffd66b";
            });
        } 
        */

  
    
  

