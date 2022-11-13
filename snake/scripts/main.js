
// отображение очков
let scoreBlock;

//наши очки внутри игы
let score = 0;

let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");


//настройки игры 
const config = {
	step: 0, //пропускает игровой цикл
	maxStep: 6, //пропускает игровой цикл
	sizeCell: 16, //размер игровой ячейки
	sizeBerry: 16 / 4 //размер одной ягоды
}

// игровой персонаж змейка
const snake = {
	x: 160, // координаты змейки
	y: 160, //координаты змейки
	dx: config.sizeCell, //скорость по вертикалу
	dy: 0, //скорость по горизонталу
	tails: [], //массив ячеек под контролем нашей змейки
	maxTails: 7 //количество ячеек (длина змейки)
}


// отображение отображение очков на странице
function drawScore() {
	++score
	scoreBlock.innerHTML = score;
}


// отрисовка змейки 
function drawSnake() {
	
	snake.x += snake.dx; ///координаты змейки по х
	snake.y += snake.dy; // координаты змейки по y

	collisionBorder();
	
	// отрисовываем змейку в координатах 
	snake.tails.unshift( { x: snake.x, y: snake.y } );

	
	// следим за длинной змейки 
	if ( snake.tails.length > snake.maxTails ) 
	{
		snake.tails.pop();
	}
	

	// перебираем дчерние элементы змейки и отрисовываем их
	snake.tails.forEach( function(el, index){
		
		
		// Чтобы установить цвет/градиент заливки, используется свойство fillStyle.
		if (index == 0) {
		  // красим голову змейки в ... цвет
			context.fillStyle = "#c0e619 ";
		} else {
			context.fillStyle = "#227552";
		}
		
	// Метод fillRect() рисует "залитый" прямоугольник. Цвет заливки, по умолчанию, черный. 
	   context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell );

	} );
}



// определение коллизий (определение когда змейка подошла к краю игрового пространства)
function collisionBorder() {
	if (snake.x < 0) {
		snake.x = canvas.width - config.sizeCell;
	} else if ( snake.x >= canvas.width ) {
		snake.x = 0;
	}

	if (snake.y < 0) {
		snake.y = canvas.height - config.sizeCell;
	} else if ( snake.y >= canvas.height ) {
		snake.y = 0;
	}
}

// управление змейки 
document.addEventListener("keydown", function (e) {
	// e.code управление спомощью клавиатуры направление змейки 
	if ( e.code == "ArrowUp" ) {
		snake.dy = -config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "ArrowLeft" ) {
		snake.dx = -config.sizeCell;
		snake.dy = 0;
	} else if ( e.code == "ArrowDown" ) {
		snake.dy = config.sizeCell;
		snake.dx = 0;
	} else if ( e.code == "ArrowRight" ) {
		snake.dx = config.sizeCell;
		snake.dy = 0;
	}
});


// игровой цикл
function gameLoop() {
	
	requestAnimationFrame( gameLoop );
	
	// drawScore();
	
	if ( ++config.step < config.maxStep) {
		return;
	}
	config.step = 0;

	// контролирование скорости отрисовки на экране
	context.clearRect(0, 0, canvas.width, canvas.height);

	// вызывает очистку и отрисовку змейки
	drawSnake();  //змейка
}


// для вызова игрового цикла (он будет работать бесконечно) 
requestAnimationFrame( gameLoop );	



