window.onload = function() {
	var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();
    shape.graphics.beginStroke("purple");
    shape.graphics.setStrokeStyle(5, "round", "round");

    //drawPolyStyle(x, y, radius, #ofSides, pointSize, angle)
    //point size  0=polygon  1=spikes
    //5-sided star
    shape.graphics.drawPolyStar(75, 75, 50, 5, .5, 0);

    //a 3 sided polygon...AKA triangle
    shape.graphics.drawPolyStar(550, 75, 50, 3, 0, -90);

    //new shape
    var shape2 = new createjs.Shape();
    shape2.graphics.beginFill("orange");
    shape2.graphics.drawPolyStar(250, 250, 50, 3, 0, -90);


    stage.addChild(shape2);
    //add event listener
    shape2.addEventListener("click", function(event){
        console.log("Orange triangle has been clicked.");
    });


    stage.addChild(shape);
    stage.update();
	
	
};