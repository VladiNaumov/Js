var canvas = document.getElementById("canvas")
	var ctx = canvas.getContext("2d")
		
	var drawBackground = function(){
		ctx.fillStyle = "skyblue"
		ctx.fillRect(0, 0, 400, 440)
		
		ctx.fillStyle = "green"
		ctx.fillRect(0, 440, 400, 20)
		
		ctx.fillStyle = "chocolate"
		ctx.fillRect(0, 460, 400, 40)

		ctx.fillStyle = "yellow"
		ctx.beginPath()
		ctx.arc(350, 50, 30, 0, 6.28, false)
		ctx.fill()
	}

	var man = new Image()
	man.src = "twoFrames.png"
	
	var count = 0
	var switchFrame = 1
	
	var drawMan = function(){
	
		count += 1
		
		if (count === 100){
			count = 10
		}
		
		if (count % 10 === 0){
			switchFrame *= -1
		}
	
		if (switchFrame === 1){
			ctx.drawImage(man, 0, 0, 60, 80, 70, 360, 60, 80)
		}else{
			ctx.drawImage(man, 60, 0, 60, 80, 70, 360, 60, 80)
		}		
	}
	
	var render = function(){		

		drawBackground()
		drawMan()
		
		requestAnimationFrame(render)
	}
	render()	