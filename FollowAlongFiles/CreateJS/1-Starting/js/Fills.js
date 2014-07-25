window.onload = function() {
	//Set up canvas and stage
    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    //Draw a rectangle
    var rect1 = new createjs.Shape();

    //Create the fill
    //rect1.graphics.beginFill("purple");
    //rect1.graphics.beginFill("rgb(162, 216, 255)");
    //rect1.graphics.beginFill(createjs.Graphics.getRGB(162, 216, 255, .5));

    //make a linear gradient  [colors][ratio](where to start color)(where to end color)
    // [colors] and [ratios] should have the same number of items in array
    //rect1.graphics.beginLinearGradientFill(["yellow","purple", "red"], [0, .5, 1], 50, 50, 150, 150);

    //create a radial gradient [colors][ratios](x,y,r 1st center point & radius)(x,y,r 2nd center point & radius)
    rect1.graphics.beginRadialGradientFill(["yellow", "red"], [0, 1], 150, 150, 0, 150, 150, 150);

    //Draw the rectangle
    rect1.graphics.rect(50, 50, 100, 100);

    //Add to stage
    stage.addChild(rect1);

    //Update the stage
    stage.update();
	
	
			
};