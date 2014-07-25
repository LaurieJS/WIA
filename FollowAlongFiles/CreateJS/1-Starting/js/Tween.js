window.onload = function() {
	
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);

    //create ball
    var ball = new createjs.Shape();
    ball.graphics.setStrokeStyle(5, "round");
    ball.graphics.beginStroke("black");
    ball.graphics.beginFill("red");
    ball.graphics.drawCircle(0, 0, 50);
    ball.graphics.endStroke();
    ball.graphics.endFill();

    //draw a line from the center to the outer edge
    ball.graphics.ss(1, "round", "round");
    ball.graphics.beginStroke("black");
    ball.graphics.mt(0,0);
    ball.graphics.lt(0,50);
    ball.graphics.endStroke();

    //move the ball
    ball.x = 100;
    ball.y = -100;

    //create the tween createjs.Tween.get(display object, {optional props: loop, ignorGlobal} duration, easing)
    //will loop the file
    var tween = createjs.Tween.get(ball, {loop: true})
            .to({x:ball.x, y:canvas.height -55, rotation: -360}, 1500, createjs.Ease.bounceOut )
            .wait(1000)
            .to({x:canvas.width - 55, rotation: 360}, 2500, createjs.Ease.bounceOut)
            .wait(1000)
            .call(tester)
            .to({scaleX:.5, scaleY:.5, x:30, rotation: -360, y:canvas.height -30, alpha: 0}, 2500, createjs.Ease.bounceOut)

        ;//end of the tween variable

    function tester(){
        console.log("The tween has reached this point");
    }

    stage.addChild(ball);
    //stage.update();

    //create a ticker--auto update the stage
    createjs.Ticker.addEventListener("tick", stage);



};