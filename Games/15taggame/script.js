	
    // получение элемета canvas который определён в .html
	var canvas = document.getElementById("canvas")
    // определение контекста рисования (мы рисуем в 2D по этому указываем в скобочках это),
    //позже данную ссылку ctx мы будем использовать для отрисовки всех объектов
	var ctx = canvas.getContext("2d")
	
	// массив где мы храним значения от 0 до 15
	var arr15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
	
	// перемешиваем зачения 10 раз для лучшего перемешивания
	for (var i = 0; i < 10; i++){
		arr15.sort(()=> Math.random() - 0.5)
	}	
	//console.log(arr15)
	
	// прорисовка одной кнопки (пятнашки)
	var drawSquare = function(x, y, val){
		
		// установка цвета области заливки
		ctx.fillStyle = "black"
		
		// установка области заливки 
		ctx.fillRect(x, y, 100, 100)
		
		// условие: если мы передаём значение "ноль", то кнопка отрисовывается белойб если значение "один" то кнопка синяяя
		if(val === 0){
			ctx.fillStyle = "white"
		}else{
			ctx.fillStyle = "teal"
		}
		// установка области заливки 
		ctx.fillRect(x + 5, y + 5, 90, 90)
		
		// выбор типа и размер шрифт
		ctx.font = "60px Arial"
		
		//установка цвета шрифта
		ctx.fillStyle = "white"
		
		// рисуем номер числа: если число до 9 то позиция числа по х35, y70, в других случаях х15, y70
		if(val < 10){
			ctx.fillText(val, x + 35, y + 70)
		}else{
			ctx.fillText(val, x + 15, y + 70)
		}
	}
	
	//drawSquare(200, 200, 4)
	
	// считываем порядковый номер ячейки от 0 до 15 и рисуем их в нужной позиции на экране
	var drawTag = function(pos, val){
		switch(pos){
			case 0:
				drawSquare(0, 0, val)
				break
				
			case 1:
				drawSquare(100, 0, val)
				break	
			
			case 2:
				drawSquare(200, 0, val)
				break
			
			case 3:
				drawSquare(300, 0, val)
				break

			case 4:
				drawSquare(0, 100, val)
				break
			
			case 5:
				drawSquare(100, 100, val)
				break
				
			case 6:
				drawSquare(200, 100, val)
				break
				
			case 7:
				drawSquare(300, 100, val)
				break
				
			case 8:
				drawSquare(0, 200, val)
				break
				
			case 9:
				drawSquare(100, 200, val)
				break
				
			case 10:
				drawSquare(200, 200, val)
				break
			
			case 11:
				drawSquare(300, 200, val)
				break
				
			case 12:
				drawSquare(0, 300, val)
				break
				
			case 13:
				drawSquare(100, 300, val)
				break
				
			case 14:
				drawSquare(200, 300, val)
				break
				
			case 15:
				drawSquare(300, 300, val)
				break
		}
	}
	
	// С массива "arr15" считываем циклом значения и рисуем их на экране 
	for (var i = 0; i <=15; i++){
		drawTag(i, arr15[i])		
	}
	
	//
	var checkPlace = function(evX){
		if (evX < 110){
			return 1
		}
		
		if (evX < 210){
			return 2
		}
		
		if (evX < 310){
			return 3
		}
		
		if (evX < 410){
			return 4
		}
	}	
	
	canvas.addEventListener("click", function(event){
		//console.log(event)
		
		if (event.clientY < 110){
			//console.log("row 1")
			
			var place = checkPlace(event.clientX)
			
			switch(place){
				case 1: 
					var clickPos = 0
					break
					
				case 2: 
					var clickPos = 1
					break
					
				case 3: 
					var clickPos = 2
					break
					
				case 4: 
					var clickPos = 3
					break
			}
		}
		
		if (event.clientY > 110 && event.clientY < 210){
			var place = checkPlace(event.clientX)
			
			switch(place){
				case 1: 
					var clickPos = 4
					break
					
				case 2: 
					var clickPos = 5
					break
					
				case 3: 
					var clickPos = 6
					break
					
				case 4: 
					var clickPos = 7
					break
			}
		}
		
		if (event.clientY > 210 && event.clientY < 310){
			var place = checkPlace(event.clientX)
			
			switch(place){
				case 1: 
					var clickPos = 8
					break
					
				case 2: 
					var clickPos = 9
					break
					
				case 3: 
					var clickPos = 10
					break
					
				case 4: 
					var clickPos = 11
					break
			}
		}
		
		if (event.clientY > 310 && event.clientY < 410){
			var place = checkPlace(event.clientX)
			
			switch(place){
				case 1: 
					var clickPos = 12
					break
					
				case 2: 
					var clickPos = 13
					break
					
				case 3: 
					var clickPos = 14
					break
					
				case 4: 
					var clickPos = 15
					break
			}
		}
		
		//console.log(clickPos)
		
		if (arr15[clickPos - 4] === 0){
			arr15[clickPos - 4] = arr15[clickPos]
			arr15[clickPos] = 0
			
			for (var i = 0; i <=15; i++){
				drawTag(i, arr15[i])		
			}
		}
		
		if (arr15[clickPos + 4] === 0){
			arr15[clickPos + 4] = arr15[clickPos]
			arr15[clickPos] = 0
			
			for (var i = 0; i <=15; i++){
				drawTag(i, arr15[i])		
			}
		}
		
		if (arr15[clickPos + 1] === 0 && clickPos !== 3
			&& clickPos !== 7 && clickPos !== 11){
			arr15[clickPos + 1] = arr15[clickPos]
			arr15[clickPos] = 0
			
			for (var i = 0; i <=15; i++){
				drawTag(i, arr15[i])		
			}
		}
		
		if (arr15[clickPos - 1] === 0 && clickPos !== 4
			&& clickPos !== 8 && clickPos !== 12){
			arr15[clickPos - 1] = arr15[clickPos]
			arr15[clickPos] = 0
			
			for (var i = 0; i <=15; i++){
				drawTag(i, arr15[i])		
			}
		}		
	})	

