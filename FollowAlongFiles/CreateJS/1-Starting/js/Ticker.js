window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a red rectangle
	var shape = new createjs.Shape();
	
	//Fill 
	shape.graphics.beginFill("red");
	
	//Draw out the rectangle
	shape.graphics.rect(0,0, 100, 100);
	
	//Change its registration point
	shape.regX = 50;
	shape.regY= 50;
	
	//Move the rect to (100,100)
	shape.x = 100;
	shape.y = 100;
	
	stage.addChild(shape);
	
	//stage.update();

    //set up a ticker class which controls time--like Saturn lol
    //create a listener for a tick (of time)

    //set frame rate FPS-frames per second--default 20fps
    createjs.Ticker.setFPS(30);//will create a tick 30 times per second

    //create a listener
    createjs.Ticker.addEventListener("tick", ticks);

    function ticks(e){
        shape.rotation += 8;
        //shape.alpha -= .05;
        //shape.x += 5;
        //shape.y += -5;

        //shape.skewX += 20;
        //shape.skewY += 20;

        //shape.scaleX += .2;
        //shape.scaleY += .2;

        stage.update();
    }
	
	
			
};