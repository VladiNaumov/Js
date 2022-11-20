'use strict'
const field = document.querySelector('.field');
const cellSize = 100;

const empty = {
    top: 0,
    left: 0
};

const cells = [];
cells.push(empty);

// 
function move(index){
   const cell = cells[index];

   // Этот метод Math.abs() возвращает абсолютное значение числа, 
   // то есть иными словами - если число неотрицательное, то его и возвращает, 
   // а если отрицательное - отбрасывает знак "минус".

    const leftDiff = Math.abs (empty.left - cell.left);
    const topDiff = Math.abs (empty.top - cell.top);

    // вычисление соседней клетки
    if(leftDiff + topDiff > 1){
        return;
    }

    
    cell.element.style.left = `${empty.left * cellSize}px`;
    cell.element.style.top =  `${empty.top * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;

    empty.left = cell.left;
    empty.top = cell.top;

    cell.left = emptyLeft;
    cell.top = emptyTop;
}

for(let i = 1; i <= 15; i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.innerHTML = i;

    // позиция ячейки слева
    const left = i % 4;
    // позиция ячейки вниз
    const top = (i - left) / 4;

    cells.push({
        left: left,
        top: top,
        element: cell
    });
    

    cell.style.left = `${left * cellSize}px`;
    cell.style.top =  `${top * cellSize}px`;

    // Метод append позволяет вставить в конец какого-либо элемента другой элемент.
    field.append(cell);

    // назначения обработчика событий
    cell.addEventListener('click', () => {
        move(i);
    });
}
   
