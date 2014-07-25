window.onload = function() {
    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //set fill
    shape.graphics.beginFill("red");
    shape.graphics.drawRect(50, 50, 100, 100);

    //rotate
    //rotates around the origin point
    //shape.rotation = 30;

    //change the registration point, origin point of the square + width/2 or height/2
    shape.regX = 100;
    shape.regY = 100;

    //move the square
    shape.x = 200;
    shape.y = 100;

    //shape.rotation = 30;

    //scaling
    //.5 is half & 2 is twice as big
    //shape.scaleX = 1.5;
    //shape.scaleY = .5;


    //alpha--shape is still there, and is still clickable
    //transparency
    shape.alpha = .5;


    //visible--gone & non-clickable
    //1 it shows; 0 it hides
    shape.visible = 1;

    //skewing
    //shape.skewX = 200;
    shape.skewY = 200;




    stage.addChild(shape);

    stage.update();

			
	
	
};