
// отображение очков
let scoreBlock;

//наши очки внутри игы
let score = 0;

//настройки игры 
const config = {
	step: 0, //пропускает игровой цикл
	maxStep: 6, //пропускает ировой цикл
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
	maxTails: 3 //количество ячеек
}

// хранит координаты ягод
let berry = {
	x: 0,
	y: 0
} 


let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");
drawScore();

// игровой цикл
function gameLoop() {

	requestAnimationFrame( gameLoop );
	
	if ( ++config.step < config.maxStep) {
		return;
	}
	config.step = 0;

	// контролирование скорости отрисовки на экране
	context.clearRect(0, 0, canvas.width, canvas.height);

// вызывает очистку и отрисовку змейки и ягоды
	drawBerry(); //змейка
	drawSnake(); //ягода
}

// для вызова игрового цикла (он будет работать бесконечно)        
requestAnimationFrame( gameLoop );

// отрисовка змейки 
function drawSnake() {
	snake.x += snake.dx; ///координаты змейки по х
	snake.y += snake.dy; // координаты змейки по y

	collisionBorder();

	// todo бордер
	snake.tails.unshift( { x: snake.x, y: snake.y } );

	
	if ( snake.tails.length > snake.maxTails ) {
		snake.tails.pop();
	}

// перебираем дчерние элементы змейки и отрисовываем их
	snake.tails.forEach( function(el, index){
		if (index == 0) {
			context.fillStyle = "#FA0556";
		} else {
			context.fillStyle = "#A00034";
		}
		// красим голову змейки в яркий красный цвет
		context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell );

		//проверяем координаты ягоды и змейки
		if ( el.x === berry.x && el.y === berry.y ) {
			snake.maxTails++; // если они совпадают то увеличиваем хвост змейки
			incScore(); // увеличиваем очки
			randomPositionBerry(); // отрисовываем новую ягоду
		}
		
		// проверка соприкосновения змейки с хвостом
		for( let i = index + 1; i < snake.tails.length; i++ ) {

			// если координаты совпалиб то запускаем игру заново
			if ( el.x == snake.tails[i].x && el.y == snake.tails[i].y ) {
				refreshGame(); // запуск игры заново
			}

		}

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

// когда змейка съедает саму себя мы обновляем это значение (чем и занимается данная функция)
function refreshGame() {
	score = 0;
	drawScore();

	snake.x = 160;
	snake.y = 160;
	snake.tails = [];
	snake.maxTails = 3;
	snake.dx = config.sizeCell;
	snake.dy = 0;

	randomPositionBerry();
}

// отрисовка ягоды
function drawBerry() {
	context.beginPath();
	context.fillStyle = "#A00034";
	context.arc( berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2 ), config.sizeBerry, 0, 2 * Math.PI );
	context.fill();
}

// рандомное значение появление ягоды
function randomPositionBerry() {
	berry.x = getRandomInt( 0, canvas.width / config.sizeCell ) * config.sizeCell;
	berry.y = getRandomInt( 0, canvas.height / config.sizeCell ) * config.sizeCell;
}

// увеличивает количество очков на еденицу
function incScore() {
	score++;
	drawScore();
}

// отображение значения на странице
function drawScore() {
	scoreBlock.innerHTML = score;
}

// функция рандом принимает значение чисел и возвращает рандомное значение в заданнном диапозоне
function getRandomInt(min, max) {
	return Math.floor( Math.random() * (max - min) + min );
}

// упарвление змейки 
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