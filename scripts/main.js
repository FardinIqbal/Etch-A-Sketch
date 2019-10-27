//Making Grid funciton
const grid = document.querySelector('.grid');
function makeGrid(rows){
    const grid = document.querySelector('.grid')
    for(i = 1; i <= rows; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for(j = 1; j <= rows; j ++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText = i*rows + j - rows;
            
            //chagne color
            cell.addEventListener('mouseenter', function(e){
                e.target.style.backgroundColor = 'purple';
            })
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
const resetButton = document.querySelector('#hide');
resetButton.addEventListener('click', function(e){
    for(i = 0; i <= 5; i++){
        let x = document.querySelector('.grid div');
        grid.removeChild(x);
    }
})
makeGrid(5);

