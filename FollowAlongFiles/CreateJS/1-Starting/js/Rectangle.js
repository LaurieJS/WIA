window.onload = function() {
	var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //set up stroke
    shape.graphics.beginStroke("purple");
    //"caps" and "joint"
    shape.graphics.setStrokeStyle(10, "butt", "miter");

    //draw a normal rectangle
    shape.graphics.rect(50, 50, 300, 300);


    //rounded rectangle
    //drawRoundRect(x, y, width, height, radius)
    shape.graphics.beginStroke("blue");
    shape.graphics.drawRoundRect(75, 75, 250, 250, 50);

    /*complex rounded rectangle
    drawRoundRectComplex(x, y, w, h, TL, TR, BR, BL)(radii)*/
    shape.graphics.beginStroke("red");
    shape.graphics.drawRoundRectComplex(100, 100, 200, 200, 50, 0, 50, 0);


    //add to the stage
    stage.addChild(shape);
	//update the stage
	stage.update();
};