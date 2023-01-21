	/* мы получаем узел нашего холста <canvas>, далее с помощью document.getContext() метода мы присваиваем ему контекст. 
	Имея узел элемента , вы всегда можете получить для рисования контекст при помощи метода getContext(). 
		
	var canvas = document.getElementById("canvas")
   	var ctx = canvas.getContext("2d") 
	*/
    
	
	// получение элемета id:canvas который определён в .html
	var canvas = document.getElementById("canvas")
    // определение контекста рисования (мы рисуем в 2D по этому указываем в скобочках это),
   	var ctx = canvas.getContext("2d")
	
	var lives = 5
	var okLeft = false		
	var okRight = false	
	
    // отрисовки объектов в игре
	var line = new Image()
	line.src = "img/line.png"
	line.X = 180
	line.Y = -140
	
    // отрисовки объектов в игре
	var line2 = new Image()
	line2.src = "img/line.png"
	line2.X = 180
	line2.Y = 160
	
    // отрисовки объектов в игре
	var myCar = new Image()
	myCar.src = "img/myCar.png"
	myCar.X = 50
	myCar.Y = 400

	// отрисовки объектов в игре
	var enemyCar1 = new Image()
	enemyCar1.src = "img/enCar1.png"
	enemyCar1.X = 50
	enemyCar1.Y = -150
	
    // отрисовки объектов в игре
	var enemyCar2 = new Image()
	enemyCar2.src = "img/enCar2.png"
	enemyCar2.X = 250
	enemyCar2.Y = -450

	// отрисовка серого прямоугольника
	function drawRect(){
		
		// ctx.fillStyle -задаёт цвет фона
		ctx.fillStyle = "Gray"
		
		// ctx.fillRect -заливаем прямоугольную область
		ctx.fillRect(0, 0, 400, 500)
	}
	
	// функция для отрисовке в крайне левом углу количество жизней
	function drawLives(){
		// ctx.fillStyle -задаёт цвет фона
		ctx.font = "30px Arial"
		// ctx.fillStyle -задаёт цвет фона
		ctx.fillStyle = "White"
		// ctx.fillText -заливаем текст
		ctx.fillText("Lives: " + lives, 235, 48)
	}
	
	// функция для отрисовки полосок которые "бегут" в низ
	function drawLines(){
		// ctx.drawImage - отрисовываю картинку (плоску) и передаю координаты 
		ctx.drawImage(line, line.X, line.Y)
		line.Y +=3
		
		if (line.Y > 500){
			line.Y = -140
		}
		
		ctx.drawImage(line2, line2.X, line2.Y)
		line2.Y +=3
		if (line2.Y > 500){
			line2.Y = -140
		}
	}
	
	// функция остановки игрового процессса и надпесь GAMEOVER
	function stop(){
		
		// cancelAnimationFrame -фунция для анимаций 
		cancelAnimationFrame(myReq)
		ctx.font = "60px Arial"
		ctx.fillStyle = "Red"
		ctx.fillText("Game over", 40, 200)
		stop = true
	}
	
	// функция для отрисовки машины
	function drawMyCar(){
		if(okLeft === true && myCar.X > 0) 
		{
			myCar.X -=5
		}
		if(okRight === true && myCar.X < 335) 
		{
			myCar.X +=5
		}
		
		// отрисовываем автомобиль (первый параметр передаем рисунок машины, второй и третий параметр -это координаты машины)
		ctx.drawImage(myCar, myCar.X, myCar.Y)
	}
	
	// функция для отрисовки машин противника
	function drawEnemyCar1(){
	
		if (enemyCar1.Y+100 > myCar.Y && enemyCar1.X+65 > myCar.X && enemyCar1.X < myCar.X+65){
			crash = true
			enemyCar1.Y = enemyCar2.Y - 300
			lives--
			if(lives <1){
				stop()
			}		
		}else{
			crash = false
		}	
	
		if (!crash){
			// отрисовка машины
			ctx.drawImage(enemyCar1, enemyCar1.X, enemyCar1.Y)
			enemyCar1.Y +=2
			if (enemyCar1.Y > 500){
				enemyCar1.Y = -100
				enemyCar1.X = Math.floor(Math.random()*335)
			}
		}
	}
	
	// функция для отрисовки машин противника
	function drawEnemyCar2(){
	
		if (enemyCar2.Y+100 > myCar.Y && enemyCar2.X+65 > myCar.X && enemyCar2.X < myCar.X+65){
			crash = true
			enemyCar2.Y = enemyCar1.Y - 300
			lives--
			if(lives <1){
				stop()
			}		
		}else{
			crash = false
		}	
	
		if (!crash){
			// отрисовка машины
			ctx.drawImage(enemyCar2, enemyCar2.X, enemyCar2.Y)
			enemyCar2.Y +=2
			if (enemyCar2.Y > 500){
				enemyCar2.Y = -100
				enemyCar2.X = Math.floor(Math.random()*335)
			}
		}
	}   
	
    // вызов функцийб т.е игровой процесс 
	function render(){
		
		// если переменная STOP равна true то игра завершается
		if (stop === true)
		{
			return
		}
	
		drawRect()
		drawLives()
		drawLines()
		drawMyCar()
		drawEnemyCar1()
		drawEnemyCar2()		
		
        // requestAnimationFrame() -специальная функция для отрисовки анимаций
		myReq = requestAnimationFrame(render)
	}

    // начало игрового процесса
	render()	
	
	
	/* ОБРАБОТЧИКИ СОБЫТИЙ НАЖАТИЯ КЛАВИШ */
	
	// функция addEventListener -обработчик нажатия клавишу
	addEventListener("keydown", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = true
		}
		
		if (newDirect === 39){
			okRight = true
		}
	})
	
	// функция addEventListener -обработчик нажатия клавишу
	addEventListener("keyup", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = false
		}
		
		if (newDirect === 39){
			okRight = false
		}
	})

