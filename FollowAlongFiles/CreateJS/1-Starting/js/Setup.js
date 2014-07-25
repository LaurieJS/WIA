window.onload = function() {

    //create a new stage and wrap it around the existing canvas
    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);
	
	//create a blue circle
    var circleGraphic = new createjs.Graphics();
    circleGraphic.beginFill("blue");
    circleGraphic.drawCircle(0, 0, 50);//centers at the origin

    //create the shape
    //shape is a display object that handles vector graphics
    var circleShape = new createjs.Shape(circleGraphic);

    //access some of the shape circle properties
    circleShape.x = 50;//move the shape 50 on the x-axis
    circleShape.y = 50;

    //add the shape to the stage's display list
    stage.addChild(circleShape);

    //To show on screen Need to update the stage
    stage.update();
	
			
};