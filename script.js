
const rows = 16;
const columns = 16;


const gridContainer = document.getElementById("myGrid");
for (let i = 1; i < 257; i++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
        
      }
    

// In the above, i have specified the grid’s number of rows and columns. 
//then use a nested loop to create grid items dynamically. 
//Each grid item is an <div> element with the class “grid-item.”
