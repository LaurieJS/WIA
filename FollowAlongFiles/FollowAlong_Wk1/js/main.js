/*
 Laurie Shuck
 Web Interaction and Animation
 Follow Along-Week 1
 July 2014
 */

window.onload = function(){

    //Video 1--setting up canvas
    //Make a reference to the canvas element
    var canvasElem = document.getElementById("canvas1");

    //To change the width and height of the canvas
    /*canvasElem.width = 700;
    canvasElem.height = 300;*/


    //Video 16 Animation
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //begin here
            var srcImg = document.getElementById("img1");
            var rotation = 0;
            ctx.translate(canvasElem.width/2, canvasElem.height/2);

            setInterval(function(){
                rotation += 8;
                ctx.clearRect(-300, -300, canvasElem.width, canvasElem.height);
                ctx.rotate(rotation * (Math.PI/180));

                //minus half of the image's width and height to center
                ctx.drawImage(srcImg, -75, -75);

            }, 500);

        }//end of ctx if statement
    }//end of canvasElem if statement, end of video 16


    /*
    //Video 15 Compositing, I used the Compositing files as well
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //begin drawing here

            ctx.globalAlpha = 1;

            // Create an array of rectangles
            var rects = [
                {x:20, y:20, width:75, height:75 },
                {x:40, y:50, width:75, height:75 },
                {x:150, y:20, width:75, height:75 },
                {x:170, y:50, width:75, height:75 },
                {x:280, y:20, width:75, height:75 },
                {x:300, y:50, width:75, height:75 },
                {x:410, y:20, width:75, height:75 },
                {x:430, y:50, width:75, height:75 }
            ];//end of the rects array

            for(var i = 0; i < rects.length; i+=2){
                ctx.fillStyle = "blue";
                ctx.fillRect(rects[i].x, rects[i].y, rects[i].width, rects[i].height);

                ctx.fillStyle = "red";
                ctx.fillRect(rects[i+1].x, rects[i+1].y, rects[i+1].width, rects[i+1].height);

                //to lower the opacity of the rects
                ctx.globalAlpha -=.3;
            }//end of the for loop


        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/

    /*
    //Video 14 Transforms
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){

            ctx.fillStyle = "blue";
            ctx.fillRect(150, 50, 100, 50);

            ctx.translate(200, 75);
            ctx.rotate(.5);
            ctx.fillStyle = "red";
            ctx.fillRect(-50, -25, 100, 50);

            //Make a starburst, rotate transform
            var radians = (Math.PI/180) * 20;
            ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

            for(var degrees = 0; degrees < 360; degrees+=20){

                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(100, 0);
                ctx.stroke();
                ctx.rotate(radians);

            }//end of the for loop

            //Scale
            ctx.save();
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 100, 50);

            //scale transform
            ctx.scale(1.5, 2);
            ctx.fillRect(0, 50, 100, 50);

            ctx.restore();
            //create third rectangle
            ctx.fillStyle = "purple";
            ctx.scale(.5, .5);
            ctx.fillRect(0, 100, 100, 50);

            //Diff section
            ctx.save();
            //begin drawing here
            ctx.fillStyle = "blue";
            ctx.fillRect(0, 0, 100, 50);

            //translate the origin to the middle of the canvas
            ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

            ctx.fillRect(-50, -25, 100, 50);
            ctx.restore();
            ctx.fillStyle = "red";
            ctx.fillRect(0, 0, 100, 50);

        }//end of the ctx if statement
    }//end of the canvasElem if statement
/*


    /*
    //Video 13 Clipping Masks
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //create variables for x, y, radius, and offset
            var x = canvasElem.width/2;
            var y = canvasElem.height/2;
            var radius = 75;
            var offset = 50;

            ctx.save();

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
            ctx.clip();

            //draw a blue circle inside the clipping mask
            ctx.beginPath();
            ctx.arc(x-offset, y-offset, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "blue";
            ctx.fill();

            //draw a yellow circle inside the clipping mask
            ctx.beginPath();
            ctx.arc(x + offset, y, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "yellow";
            ctx.fill();

            //draw a red circle inside the clipping mask
            ctx.beginPath();
            ctx.arc(x, y + offset, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "red";
            ctx.fill();

            //to release clipping mask, to get the full stroke
            ctx.restore();

            //stroke the circle
            ctx.beginPath();
            ctx.arc(x, y, radius, 2 * Math.PI, false);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "blue";
            ctx.stroke();


            //begin drawing here
            var srcImg = document.getElementById("img1");

            //The image of the train
            //ctx.drawImage(srcImg, 0, 0);

            //create a circle clipping path
            //ctx.beginPath();
            //ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 250, 0, 2 * Math.PI);
            //ctx.clip();

            //The image of the train, moved the train here to be clipped
           // ctx.drawImage(srcImg, 0, 0);

            //Create a path shape clipping mask
            ctx.beginPath();
            ctx.moveTo(105, 200);
            ctx.lineTo(250, 200);
            ctx.lineTo(525, 50);
            ctx.lineTo(475, 285);
            ctx.closePath();

            ctx.clip();

            //The image of the train, moved the train here to be clipped
            ctx.drawImage(srcImg, 0, 0);

        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/


    /*
    //Video 12 Using Images
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //begin drawing here
            //Variable to hold the image
            var srcImg = document.getElementById("img1");

            //Draw image directly onto the canvas
            //ctx.drawImage(srcImg, 0, 0);

            //draw a scaled down drawImage(srcImg, dx, dy, dw, dh)
            //ctx.drawImage(srcImg, 50, 50, 240, 300);

            //drawing a slice of an image drawImage(srcImg, sx, sy, sw, dx, dw, dh)
            //ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280);

            //create a variable that holds a video
            var srcVid = document.getElementById("vid1");
            srcVid.play();

            //setInterval(function, time-ms);
            setInterval(function(){
                ctx.drawImage(srcVid, 0, 0, 480, 270);

            }, 30);//end of the setInterval

        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/


    /*
    //Video 11-Creating Gradients
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //Begin drawing here

            //create a linear gradient createLinearGradient(x0, y0, x1, y1)
            var linGradient = ctx.createLinearGradient(20, 20, 20, 280);

            //Adding color stops
            linGradient.addColorStop(0, "#f00");
            linGradient.addColorStop(.5, "#00f");
            linGradient.addColorStop(1, "#0f0");

            //create a rectangle
            ctx.fillStyle = linGradient;
            ctx.fillRect(10, 10, 200, 280);

            //create a radial gradient (x0, y0, r0, x1, y1, r1)
            var radGradient = ctx.createRadialGradient(525, 150, 20, 525, 150, 100);

            //add color stops
            radGradient.addColorStop(0, "#f00");
            radGradient.addColorStop(.5, "#00f");
            radGradient.addColorStop(1, "#0f0");

            ctx.fillStyle = radGradient;
            ctx.beginPath();
            ctx.arc(525, 150, 100, 0, 2 * Math.PI);
            ctx.fill();

        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/

    /*
    //Video 10 Drawing Using Patterns
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //Begin here


            //create a pattern from an image
            var patImage = new Image();

            //When the image loads, use the pattern
            patImage.onload = function(){
                ctx.fillStyle = ctx.createPattern(patImage, "repeat");
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            };//end of the onload function

            //Add an image--just downloaded an image of blocks
            patImage.src ="images/blocks.png";


            //create a pattern from another canvas
            var patCanvas = document.getElementById("canvas2");
            var patCtx = patCanvas.getContext("2d");

            patCanvas.width = 35;
            patCanvas.height = 35;

            //draw a red line in our pattern canvas
            patCtx.strokeStyle = "red";
            patCtx.lineWidth = 1;
            patCtx.beginPath();
            patCtx.moveTo(0, 0);
            patCtx.lineTo(25, 25);
            patCtx.stroke();

            //use pattern canvas as an outline on the other canvas
            var strokePat = ctx.createPattern(patCanvas, "repeat");
            ctx.strokeStyle = strokePat;
            ctx.lineWidth = 25;
            ctx.strokeRect(50, 50, 200, 200);

        }//end of the ctx if statement
    }//end of the canvasElem if statement

*/


/*
    //Video 9 Creating Shadows
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){

            //No shadow--for use later
            ctx.save();

            //var originalShadowColor = ctx.shadowColor;
            //Set up the shadow
            ctx.shadowColor = "#000000";
            ctx.shadowOffsetX = 10;
            ctx.shadowOffsetY = 10;
            ctx.shadowBlur = 10;


            //Draw a simple rectangle
            ctx.fillStyle = "blue";
            ctx.fillRect(20, 20, 200, 100);

            //draw text with a shadow(styles first)
            ctx.fillStyle = "green";
            ctx.shadowColor = "rgba(0, 100, 100, .5)";
            ctx. shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 5;

            //text info
            ctx.font = "25pt Georgia";
            ctx.fillText("Drawing Text On A Canvas", 250, 75);

            //Draw a red line with a purple shadow
            ctx.lineCap = "round";
            ctx.lineWidth = 25;
            ctx.shadowColor = "purple";
            ctx.shadowOffsetX = -15;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 15;

            ctx.strokeStyle = "red";
            ctx.beginPath();
            ctx.moveTo(50, 200);
            ctx.lineTo(450, 200);
            ctx.stroke();

            //Rectangle with no shadow
            //ctx.shadowColor = originalShadowColor;
            //restore to the original w/no shadow
            ctx.restore();
            ctx.fillStyle = "blue";
            ctx.fillRect(20, 225, 200, 50);

        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/


    /*
    //Video8 Text Rendering
    //text is not affected by CSS rules
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");

        if(ctx){
            var myString = "Drawing text on a Canvas";

            //begin drawing here
            //fillText(variable, x-right, y-down)
            //simple text using defaults
            ctx.fillText(myString, 20, 20);

            //Text with font and fill styles
            ctx.font = "25pt Georgia";
            ctx.fillStyle = "blue";
            ctx.fillText(myString, 20, 60);

            //Text with font, stroke, baseline and fill styles
            ctx.font = "32pt Verdana";
            ctx.fillStyle = "yellow";
            ctx.textBaseline = "middle";
            ctx.strokeStyle = "rgba(0, 255, 0, .5)";
            ctx.fillText(myString, 20, 160);
            ctx.strokeText(myString, 20, 160);

        }//end of the ctx if statement
    }//end of the canvasElem if statement
*/

/*
    //Video 7-Creating complex curves bezier and quadratic curves
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //Drawing begins here
            ctx.strokeStyle = "blue";
            ctx.lineWidth = 5;

            //Make a bezier curve
            ctx.beginPath();
            //starting point
            ctx.moveTo(50, 200);
            //bezierCurveTo(cx1, cy1(first set of control points), cx2, cy2(second set of control points), x, y(ending coordinates))
            ctx.bezierCurveTo(50, 100, 200, 300, 200, 150);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            //Code for quadraticCurveTo(cx, cy(control points), x, y(ending points))
            ctx.beginPath();
            //starting point
            ctx.moveTo(400, 200);
            ctx.quadraticCurveTo(400, 100, 600, 150);
            ctx.stroke();

        }//end of the ctx if statement
    }//end of the canvasElem if statement

*/

/*Video6-Drawing arcs and circles
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){

            //Begin drawing here
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "red";
            ctx.lineWidth = 5;

            //Stroke a quarter of an arc
            ctx.beginPath();
            //basic structure of an arc (x, y, r, sA, eA, aC(bool/anti-clockwise))
            ctx.arc(50, 150, 100, 1.5 * Math.PI, 2 * Math.PI);
            ctx.stroke();

            //stroke a 3/4 arc
            ctx.beginPath();
            ctx.arc(250, 150, 100, 1.5 * Math.PI, Math.PI);
            ctx.stroke();

            //full circle degrees = 360. Changed to 180 to cut the circle in half
            //and closed the path to give a border
            var degrees = 180;
            var radians = (degrees/180 * Math.PI);

            ctx.beginPath();
            ctx.arc(550, 150, 100, 0, radians);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        }//end of ctx if statement
    }//end of canvasElem if statement
*/

    /*Video 5 Trapezoid
    //Video 5 Drawing Paths using fill() and stroke()
    if(canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //Drawing begins here
            ctx.strokeStyle = "blue";
            ctx.fillStyle = "orange";
            ctx.lineWidth = 5;

            //Draw an open path
            ctx.beginPath();
            ctx.moveTo(25, 175);
            ctx.lineTo(50, 25);
            ctx.lineTo(125, 50);
            ctx.lineTo(175, 175);
            //to close the path to create a shape
            ctx.closePath();
            //to fill the shape
            ctx.fill();
            ctx.stroke();

        }//end of ctx if statement
    }//end of canvasElem if statement
*/

/*Fourth Video
    //Video 4 Saving and Restoring Canvas States
    if (canvasElem && canvasElem.getContext){
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //drawing begins here
            ctx.strokeStyle = "red";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 10;
            //Draw a rectangle
            ctx.fillRect(25, 25, 100, 125);
            ctx.strokeRect(25, 25, 100, 125);

            //Save the state of the previous styles, or settings
            ctx.save();

            //Draw a rectangle with different settings
            ctx.strokeStyle = "green";
            ctx.fillStyle = "blue";
            ctx.lineWidth = 5;
            ctx.fillRect(175, 25, 100, 125);
            ctx.strokeRect(175, 25, 100, 125);

            //Restore the saved drawing state, the third rectangle uses the saved styles
            ctx.restore();

            //Draw third rectangle with the same settings as above
            ctx.fillRect(325, 25, 100, 125);
            ctx.strokeRect(325, 25, 100, 125);

        }//end of ctx if statement
    }//end of the canvasElem if statement
*/


/*Info from the 2nd & 3rd videos
    //If the canvas element is available (Video 2 lines and strokes)
    if(canvasElem && canvasElem.getContext){
        //Get the drawing context from the element
        var ctx = canvasElem.getContext("2d");
        if(ctx){
            //draw here

            //draw a stroked rectangle--styles first, then the rectangle/video2
            ctx.strokeStyle = "orange";
            ctx.lineWidth = 5;
            ctx.strokeRect(10, 10, 80, 80);

            //draw a filled rectangle/video2
            ctx.fillStyle = "purple";
            ctx.fillRect(200, 10, 80, 80);

            //draw a filled and stroked rectangle/video2
            ctx.strokeStyle = "red";
            ctx.fillStyle = "white";
            ctx.lineWidth = 3;
            ctx.strokeRect(10, 197, 100, 100);
            ctx.fillRect(10, 197, 100, 100);

            //clearing a rectangle (to see the background)video2
            ctx.clearRect(0, 20, 350, 20);

            //drawing lines-video3
            //To make different line widths
            for(var i = 0; i < 10; i++){
                //To being drawing beginPath() is required
                ctx.beginPath();
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 5 + i;
                ctx.moveTo(70, 30 + i * 20);
                ctx.lineTo(220, 30 + i * 20);
                //Stroke is required
                ctx.stroke();
            }//end of the for loop

        }//end of the ctx if statement
    }//end of the canvasElem if statement

    //Video 3 drawing lines & making a new canvas
    //Targeting the canvas2 element
    var canvasElem2 = document.getElementById("canvas2");

    if(canvasElem2 && canvasElem2.getContext){
        var ctx2 = canvasElem2.getContext("2d");

        if(ctx2){
            //draw here

            //Draw guide lines
            ctx2.strokeStyle = "red";
            ctx2.lineWidth = 1;
            ctx2.beginPath();
            ctx2.moveTo(50, 25);
            ctx2.lineTo(50, 175);
            ctx2.moveTo(350, 25);
            ctx2.lineTo(350, 175);
            ctx2.stroke();

            //Lines with different end caps
            //Style first--Butt
            ctx2.lineWidth = 25;
            ctx2.strokeStyle = "black";
            //Butt has no edge, and stays within the lines
            ctx2.lineCap = "butt";
            //Then create the path
            ctx2.beginPath();
            ctx2.moveTo(50, 50);
            ctx2.lineTo(350, 50);
            ctx2.stroke();

            //Style first--Round
            ctx2.lineWidth = 25;
            ctx2.strokeStyle = "black";
            //Rounded corners extend beyond the guidelines
            ctx2.lineCap = "round";
            //Then create the path
            ctx2.beginPath();
            ctx2.moveTo(50, 100);
            ctx2.lineTo(350, 100);
            ctx2.stroke();

            //Style first--Square
            ctx2.lineWidth = 25;
            ctx2.strokeStyle = "black";
            //Square corners extend beyond the guidelines
            ctx2.lineCap = "square";
            //Then create the path
            ctx2.beginPath();
            ctx2.moveTo(50, 150);
            ctx2.lineTo(350, 150);
            ctx2.stroke();

        }//end of ctx2 if statement
    }//end of canvasElem2 if statement


    //Targeting the canvas3 element-video3 drawing Joined Lines
    var canvasElem3 = document.getElementById("canvas3");

    if(canvasElem3 && canvasElem3.getContext){
        var ctx3 = canvasElem3.getContext("2d");

        if(ctx3){
            //draw here
            //guide line, they all seem to extend above the guideline
            ctx3.strokeStyle = "magenta";
            ctx3.lineWidth = 3;
            ctx3.beginPath();
            ctx3.moveTo(15, 50);
            ctx3.lineTo(490, 50);
            ctx3.stroke();

            //Joined line style examples
            ctx3.lineWidth = 15;
            ctx3.strokeStyle = "black";

            //Rounded joined lines
            ctx3.lineJoin = "round";
            ctx3.beginPath();
            ctx3.moveTo(25, 150);
            ctx3.lineTo(75, 50);
            ctx3.lineTo(125, 150);
            ctx3.stroke();


            //Beveled joined lines
            ctx3.lineJoin = "bevel";
            ctx3.beginPath();
            ctx3.moveTo(175, 150);
            ctx3.lineTo(225, 50);
            ctx3.lineTo(275, 150);
            ctx3.stroke();

            //Mitered joined lines
            ctx3.lineJoin = "miter";
            ctx3.beginPath();
            ctx3.moveTo(325, 150);
            ctx3.lineTo(375, 50);
            ctx3.lineTo(425, 150);
            ctx3.stroke();

        }//end of the ctx3 if statement
    }//end of the canvasElem3 if statement
*/

    //Begin video 2--fills and strokes (x, y, width, height)
   /* ctx.fillStyle = "rgb (20, 20, 20)";
    ctx.fillRect(25, 50, 100, 100);*/

    //use rgba for alpha transparency
    /*ctx.strokeStyle = "rgba (70, 70, 70, 1)";
    ctx.strokeRect(130, 200, 40, 70);*/


};//end of the window onload function




