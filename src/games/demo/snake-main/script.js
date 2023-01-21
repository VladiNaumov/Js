var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
	
	var direction = "right"
	
	function getRand(min, max){
		return Math.floor(Math.random() * (max - min) + min);
	}
	
	var drawBackground = function(){
		ctx.fillStyle = "lightsalmon"
		ctx.fillRect(0, 0, 400, 400)
	}
	
	var stop = function(){
		cancelAnimationFrame(myReq)
		
		ctx.fillStyle = "gray"
		ctx.font = "60px Arial"
		ctx.fillText("Game over", 40, 200)
		
		stop = true
	}
	
	class Cell{
		constructor(row, col){
			this.row = row
			this.col = col
		}
	}
	
	class Apple{
		constructor(row, col){
			this.row = row
			this.col = col
		}
		
		drawApple(){
			ctx.fillStyle = "red"
			
			ctx.beginPath()
			ctx.arc((this.col - 1) * 10 + 5, (this.row - 1) * 10 + 5, 5, 0, 6.28, false)
			ctx.fill()
		}
		
		moveApple(){
			this.row = getRand(1, 41)
			this.col = getRand(1, 41)
		}
	}
	
	var apple = new Apple(15, 30)
	//apple.moveApple()
	
	class Snake{
		constructor(){
			this.body = [new Cell(20, 19), new Cell(20, 20), new Cell(20, 21)]
		}
		
		drawSnake(){
			ctx.fillStyle = "green"
			
			for (var i = 0; i < this.body.length; i++){
				ctx.fillRect((this.body[i].col - 1) * 10, (this.body[i].row - 1) * 10, 10, 10)
			}
		}
		
		moveSnake(){
			
			if (this.body[this.body.length - 1].row === apple.row
			&& this.body[this.body.length - 1].col === apple.col){
				apple.moveApple()
			}else{
				this.body.shift()
			}
			
			switch(direction){
				case "right":
				this.body.push(new Cell(this.body[this.body.length - 1].row, this.body[this.body.length - 1].col + 1))
				break
				
				case "up":
				this.body.push(new Cell(this.body[this.body.length - 1].row - 1, this.body[this.body.length - 1].col))
				break
				
				case "left":
				this.body.push(new Cell(this.body[this.body.length - 1].row, this.body[this.body.length - 1].col - 1))
				break
				
				case "down":
				this.body.push(new Cell(this.body[this.body.length - 1].row + 1, this.body[this.body.length - 1].col))
				break
			}		
		}

		checkCollision(){
			if(this.body[this.body.length - 1].row > 40
			|| this.body[this.body.length - 1].row < 1
			|| this.body[this.body.length - 1].col > 40
			|| this.body[this.body.length - 1].col < 1){
				stop()
			}
			
			for (var i = 0; i < this.body.length - 1; i++){
				if (this.body[i].row === this.body[this.body.length - 1].row
				&& this.body[i].col === this.body[this.body.length - 1].col){
					stop()
				}
			}
		}
	}
	
	var snake = new Snake()
	
	var count = 0
	
	var render = function(){
		if (stop === true){return}
		
		count++
	
		if (count % 10 === 0){
			drawBackground()
			snake.drawSnake()
			snake.moveSnake()
			snake.checkCollision()
			apple.drawApple()
		}
		
		myReq = requestAnimationFrame(render)
	}
	render()

	addEventListener("keydown", function(event){
		if (event.keyCode === 37 && direction !== "right"){
			direction = "left"
		}
		
		if (event.keyCode === 38 && direction !== "down"){
			direction = "up"
		}
		
		if (event.keyCode === 39 && direction !== "left"){
			direction = "right"
		}
		
		if (event.keyCode === 40 && direction !== "up"){
			direction = "down"
		}
	})
