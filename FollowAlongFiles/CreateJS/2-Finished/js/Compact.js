window.onload = function() {
	var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //create the stroke
    shape.graphics.beginStroke("blue");
    shape.graphics.setStrokeStyle(10, "round", "round");

    //draw triangle, shortcuts
    shape.graphics.moveTo(50, 50);
    shape.graphics.lineTo(250, 250);
    shape.graphics.lineTo(50, 250);
    shape.graphics.closePath();

    //chain commands
    //If the first part is the same, you can chain using dot notation
    shape.graphics.beginStroke("red")
        .setStrokeStyle(10, "round", "round")
        .moveTo(50, 50)
        .lineTo(250, 250)
        .lineTo(50, 250)
        .closePath();

    //compact code
    //s is short for beginStroke
    shape.graphics.s("purple")
        //ss is short for setStrokeStyle
        .ss(10, "round", "round")
        //mt is short for moveTo
        .mt(50, 50)
        //lt is short for lineTo
        .lt(250, 250)
        .lt(50, 250)
        //cp is short for closePath
        .cp();



    stage.addChild(shape);

    stage.update();

};