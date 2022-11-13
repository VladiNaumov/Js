var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")	
	
	var area = new Image()
	area.src = "img/area.png"
	
	var r = 135
	var g = 206
	var b = 250
	
	var changeColor = false
	var shot = false
	var pressBall = false
	
	var sliceX = 0	
	var tg = 0
	var bigSide = 0
	var spreadSpeed = 1	

	var drawArea = function(){
		ctx.drawImage(area, 0, 0)
	}
	
	class Ball{
		constructor(x, y, rad){
			this.x = x
			this.y = y
			this.rad = rad			
			this.speedRad = 0.09
		}
		
		drawBall(){			
			if (shot === true){
				
				if (this.rad < 8 && this.y > 40){
					stop()
				}
				
				if (this.x > 187 && this.x < 213 && this.y < 10
				&& this.rad < 15){
					stop()
				}
				
				if (this.x > sliceX){
					this.x -= (this.x - sliceX)/40
				}else{
					this.x += (sliceX - this.x)/40
				}
				
				this.y -= (r/120) * spreadSpeed
				this.rad -= this.speedRad * (r/220)
			}
			
			if (changeColor === true && r < 408){
				r +=2
			}
			
			if (changeColor === true && g > 67){
				g -=2
			}
			
			if (changeColor === true && b > 16){
				b -=3
			}
			
			ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
			
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.rad, 0, 6.28, false)
			ctx.fill()
		}
	}
	
	var ball = new Ball(100, 470, 30)
	
	var stop = function(){
		cancelAnimationFrame(myReq)
		
		stop = true
	}
	
	var render = function(){		
		if (stop === true){ return }
	
		drawArea()
		ball.drawBall()
	
		myReq = requestAnimationFrame(render)
	}
	render()
	
	var moveBall = function(event){
		if (event.clientY > 470){
			ball.x = event.clientX
		}
	}
	
	canvas.addEventListener("mousedown", function(event){
		if (event.clientX > ball.x - 30 && event.clientX < ball.x + 30
		&& event.clientY > 440 && event.clientY < 500){
			pressBall = true
			changeColor = true
			
			canvas.addEventListener("mousemove", moveBall)
		}
	})
	
	canvas.addEventListener("mouseup", function(event){
		if (event.clientX > ball.x - 30 && event.clientX < ball.x + 30
		&& event.clientY > 440 && event.clientY < 500){
			pressBall = false
			changeColor = false
			
			r = 135
			g = 206
			b = 250
			
			canvas.removeEventListener("mousemove", moveBall)
			
		}else if (pressBall === true){
			shot = true
			changeColor = false
			
			spreadSpeed = (ball.y - event.clientY) * 0.01
			
			tg = (ball.x - event.clientX) / (ball.y - event.clientY)
			
			if (tg < 0){
				tg *= -1
			}
			
			bigSide = tg * ball.y
			
			if (ball.x > event.clientX){
				sliceX = ball.x - bigSide
			}else{
				sliceX = ball.x + bigSide
			}
			
			canvas.removeEventListener("mousemove", moveBall)
		}		
	})	