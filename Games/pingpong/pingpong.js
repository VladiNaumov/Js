	
	// получение элемета canvas который определён в .html
	var canvas = document.getElementById("canvas")
    // определение контекста рисования (мы рисуем в 2D по этому указываем в скобочках это),
    //позже данную ссылку ctx мы будем использовать для отрисовки всех объектов
	var ctx = canvas.getContext("2d")
	
	// переменные для отслеживания нажатие клавиши влево или вправо
	var okLeft = false		
	var okRight = false	
	
	// отрисовка фона
	var drawRect = function(){
		// установка цвета области заливки
		ctx.fillStyle = "khaki"
		// установка области заливки 
		ctx.fillRect(0, 0, 400, 500)		
	}
	
	// функция для отрисовки мячика
	var circle = function(x, y){
		// ctx.fillStyle -задаем цвет
		ctx.fillStyle = "brown"
		// ctx.beginPath() -отрисовки дуги
		ctx.beginPath()
		// передаём координаты окружностиб радиус окружности в радианах
		ctx.arc(x, y, 10, 0, 6.28, false)
		// ctx.fill() -выполняющий заливку
		ctx.fill()
	}
	
	// функция для остановки анимации
	var stop = function(){
		// функция вызова анимации
		cancelAnimationFrame(myReq)
		
		// рисуем слово GAME OVER
		ctx.font = "60px Arial"
		ctx.fillStyle = "red"
		ctx.fillText("Game over", 40, 200)
		stop = true
	}
	
	// платформа
	class Platform{
		constructor(x, y){
			this.x = x
			this.y = y
		}
		
		// это метод отрисовывает платформу в игре
		drawPlatform(){
			// движение платформы в лево
			if(okLeft === true && this.x > 0) 
			{
				this.x -=5
			}
			
			//движение платформы вправо
			if(okRight === true && this.x < 300) 
			{
				this.x +=5
			}
			
			// заливка цветом
			ctx.fillStyle = "teal"
			// координаты платформы и её размер
			ctx.fillRect(this.x, this.y, 100, 20)
		}
	}

			
	// мяч
	class Ball {
		constructor(x, y){
			this.x = x
			this.y = y
		}
		
		//
		addX = 2
		//
		addY = -3
		
		// метод отрисовки шарика
		drawBall(){
			circle(this.x, this.y)
			this.x +=this.addX
			this.y +=this.addY
			
			// что бы шарик отскакивал от стены
			if (this.x + 10 > 400){				
				this.addX = - this.addX				
			}
			
			// что бы шарик отскакивал от стены
			if (this.x - 10 < 0){
				this.addX = -this.addX
			}
			
			// что бы шарик отскакивал от стены
			if (this.y - 10 < 0){				
				this.addY = - this.addY				
			}
			
			// отскакивание шарика от самой плотформы
			if (this.y + 10 === 480 && this.x + 10 > myPlatf.x && this.x - 10 < myPlatf.x + 100){
				this.addY = - this.addY
			}	
			
			// проверка что шарик не попал на платформу и нужно остановить игру
			if (this.y - 10 > 500){
				stop()
			}
		}
	}
	
	// создаём экземпляр класса Platform
	var myPlatf = new Platform(150, 480)
	// создаём экземпляр класса Ball	
	var myBall = new Ball(200, 470)		
	
	// основная функция для запуска игры
	var render = function(){	
		if (stop === true)
		{
			return
		}
		
		drawRect()
		myPlatf.drawPlatform()
		myBall.drawBall()
		
		// requestAnimationFrame() -специальная функция для отрисовки анимаций
		myReq = requestAnimationFrame(render)
	}
	
	// функция запуска игры
	render()
	
	
	/* УПРАВЛЕНИЕ КЛАВИАТУРОЙ */
	
	addEventListener("keydown", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = true
		}
		
		if (newDirect === 39){
			okRight = true
		}
	})
	
	addEventListener("keyup", function(event){
		var newDirect = event.keyCode
		if (newDirect === 37){
			okLeft = false
		}
		
		if (newDirect === 39){
			okRight = false
		}
	})