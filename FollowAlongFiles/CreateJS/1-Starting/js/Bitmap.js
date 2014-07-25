window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);
			
	        var bmp = new createjs.Bitmap();

            //load the image in & wait until it is fully loaded
            var img = new Image();
            img.src = "images/ship.svg";
            img.onload = updateStage;

            //updateStage function
		    function updateStage(e){
                bmp = new createjs.Bitmap(e.target);
                var centerX = canvas.width/2;
                var centerY = canvas.height/2;

                //move the ship to the center of the stage
                bmp.x = centerX;
                bmp.y = centerY;

                //change the registration point
                bmp.regX = 50;
                bmp.regY = 50;

                //scale it up (times 4)
                bmp.scaleX = 4;
                bmp.scaleY = 4;

                stage.addChild(bmp);
                //stage.update();
            }//end of the updateStage function

    //ticker to control timer
    createjs.Ticker.addEventListener("tick", tick);

    function tick(e){
        bmp.rotation += 2;
        bmp.x += 1;
        stage.update();
    }//end of the tick function

};