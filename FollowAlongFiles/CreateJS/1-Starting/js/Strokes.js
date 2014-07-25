window.onload = function() {

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    //set up shape
	var shape = new createjs.Shape();

    //set up stroke
    shape.graphics.beginStroke("purple");

    //setup properties
    //setStrokeStyle(width, caps, joints, miter)
    shape.graphics.setStrokeStyle(10, "round", "round");

    //draw a line
    shape.graphics.moveTo(25, 25);
    shape.graphics.lineTo(250, 25);

    shape.graphics.moveTo(50, 50);
    //graphics.quadraticCurveTo(cpx, cpy, x, y)(control points, and ending points)
    //shape.graphics.quadraticCurveTo(50, 175, 250, 250);


    //arcTo(x1, y1, x2, y2, radius)
    //shape.graphics.arcTo(100, 50, 100, 500, 60);

    //bezier curves
    //bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)(1st set of control, second set of cp's, ending point)
    shape.graphics.bezierCurveTo(100, 50, 100, 200, 250, 250);


    shape.graphics.lineTo(50, 250);

    //Add to stage
    stage.addChild(shape);

    //update the stage
    stage.update();
	
};