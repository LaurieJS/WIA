window.onload = function() {
	var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //create stroke
    shape.graphics.beginStroke("purple");
    shape.graphics.setStrokeStyle(10, "butt", "round");

    //draw a circle
    //drawCircle(x, y, radius)
    shape.graphics.drawCircle(100, 100, 50);

    //add to stage
    stage.addChild(shape);

    //draw an ellipse
    //drawEllipse(x, y, w, h)
    shape.graphics.drawEllipse(75, 200, 150, 50);

    //drawing an arc
    //arc(x, y, radius, startAngle, endAngel, anti-clockwise=1, clockwise=0)
    shape.graphics.beginStroke("red");
    shape.graphics.arc(100, 100, 75, 0, 1.5*(Math.PI), 0);


    //update stage
    stage.update();
	

};