	/* мы получаем узел нашего холста <canvas>, далее с помощью document.getContext() метода мы присваиваем ему контекст. 
	Имея узел элемента , вы всегда можете получить для рисования контекст при помощи метода getContext(). 
		
	var canvas = document.getElementById("canvas")
   	var ctx = canvas.getContext("2d") 
	*/
   
export default class Canvas {

    constructor( container ) {

        this.element = document.createElement( "canvas" );
        this.context = this.element.getContext( "2d" );

        this.element.width = 320;
        this.element.height = 400;

        container.appendChild( this.element );

    }

}