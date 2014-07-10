/*
     Name: Laurie Shuck
     Date: July 10, 2014
     Class & Section:  WIA-Section 1
     Comments: "HTML5 Canvas Drawing"
 */

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload = function(){
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasRect = document.getElementById("canvas1");
    var ctx1 = canvasRect.getContext("2d");

    //Styles
    ctx1.fillStyle = "blue";
    ctx1.strokeStyle = "black";
    ctx1.lineWidth = 1;


    //Draw Rectangle here
    ctx1.fillRect(0, 0, 50, 100);
    ctx1.strokeRect(0, 0, 50, 100);

    //If the user's browser does not support canvas
}else{
    //Add a full page image or something
    alert("Sorry, your browser does not support the canvas element.");
}//end of the Modernizr.canvas if statement



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/
if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasCirc = document.getElementById("canvas2");
    var ctx2 = canvasCirc.getContext("2d");

    //Outer circle to create stroke
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "black";
    ctx2.fillStyle = "black";

    //draw outer circle
    ctx2.beginPath();
    ctx2.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx2.fill();
    ctx2.stroke();

    //Inner circle Style
    ctx2.fillStyle = "rgba(255, 0, 0, .5)";

    //draw Circle here
    ctx2.beginPath();
    ctx2.arc(50, 50, 20, 0, 2 *Math.PI);
    ctx2.fill();

}else{
    //Add fallback content
    alert("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/
if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasStar = document.getElementById("canvas3");
    var ctx3 = canvasStar.getContext("2d");

    //Styles
    ctx3.fillStyle = "yellow";
    ctx3.strokeStyle = "black";
    ctx3.lineWidth = 10;

    //Draw Star here
    ctx3.beginPath();
    ctx3.moveTo(100, 100);
    ctx3.lineTo(125, 50);//top point--left
    ctx3.lineTo(150, 100);//top point--right
    ctx3.lineTo(200, 100);//top-right point--top
    ctx3.lineTo(150, 150);//top-right point--bottom
    ctx3.lineTo(200, 200);//bottom-right point--top
    ctx3.lineTo(125, 175);//bottom-right point--bottom
    ctx3.lineTo(50, 200);//bottom-left point--bottom
    ctx3.lineTo(100, 150);//bottom-left point-top
    ctx3.lineTo(50, 100);//top-left point-bottom
    ctx3.closePath();//close path
    ctx3.stroke();
    ctx3.fill();



}else{
    //Add fallback content
    alert("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasUmbrella = document.getElementById("canvas4");
    var ctx4 = canvasUmbrella.getContext("2d");

    //Styles
    ctx4.fillStyle = "blue";
    ctx4.strokeStyle = "black";
    ctx4.lineWidth = 5;

    //Draw Umbrella top here
    ctx4.beginPath();
    ctx4.arc(100, 100, 80, 0, Math.PI, true);
    //ctx4.stroke();

    //Draw bezier curves--I am not sure if I need to begin a new path with each curve
    //ctx4.beginPath();
    //ctx4.moveTo(18, 100);
    ctx4.bezierCurveTo(40, 80, 50, 80, 70, 100);
    //ctx4.stroke();

    //ctx4.beginPath();
    //ctx4.moveTo(70, 100);
    ctx4.bezierCurveTo(90, 80, 100, 80, 125, 100);
    //ctx4.stroke();

    //ctx4.beginPath();
    //ctx4.moveTo(125, 100);
    ctx4.bezierCurveTo(140, 80, 150, 80, 182, 100);
    ctx4.fill();
    ctx4.stroke();
    ctx4.closePath();


}else{
    //Add fallback content
    alert("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else


/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can say whatever you would like in any color.

********************************************/

if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasText = document.getElementById("canvas5");
    var ctx5 = canvasText.getContext("2d");

    var myText = "War is a Racket!";
    var myText2 = "Bring the troops home now.";

    //saving the context to remove shadows for the 2nd sentence
    ctx5.save();

    //First Sentence Styles
    ctx5.font = "25pt Century Gothic";
    ctx5.fillStyle = "red";
    ctx5.textBaseline = "middle";
    ctx5.strokeStyle = "black";
    ctx5.shadowColor = "#717171";
    ctx5.shadowOffsetX = 1;
    ctx5.shadowOffsetY = 3;
    ctx5.shadowBlur = 2;


    //Draw first sentence
    ctx5.fillText(myText, 10, ctx5.canvas.height/2);
    ctx5.strokeText(myText, 10, ctx5.canvas.height/2);

    //Clear the shadow
    ctx5.restore();

    //Style the 2nd Sentence
    ctx5.font = "15pt Century Gothic";
    ctx5.textBaseline = "middle";

    //Draw second sentence
    ctx5.fillText(myText2, 5, ctx5.canvas.height/2 + 55);

}else{
    //Add fallback content
    alert("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
//window.onload = function(){
if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasImg = document.getElementById("canvas6");
    var ctx6 = canvasImg.getContext("2d");

    //variable for the image
    var srcImg = document.getElementById("img1");

    //Normal sized image
    ctx6.drawImage(srcImg, 0, 0);

    //Scaled image
    //ctx6.drawImage(srcImg, 0, 1100, 1450, 544);
    ctx6.drawImage(srcImg, 0, 1100, srcImg.width/2, srcImg.height/2);

    //Sliced image
    ctx6.drawImage(srcImg, 0, 0, 1100, 500, 0, 1600, 400, 200);





}else{
    //Add fallback content
    console.log("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else




/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

if(Modernizr.canvas){
    //Set up the canvas and get the context
    var canvasScene = document.getElementById("canvas7");
    var ctx7 = canvasScene.getContext("2d");

    //variables for the images
    var drPaulImg = document.getElementById("img2");
    var crowdImg = document.getElementById("img3");
    var stairsImg = document.getElementById("img4");

    //Draw images
    //Main image
    ctx7.drawImage(drPaulImg, 0, 0);
    //Inset images
    ctx7.drawImage(stairsImg, 0, 0, 350, 350);
    ctx7.drawImage(crowdImg, 0, 350, 350, 370);

    //create rectangle
    //Style
    ctx7.fillStyle = "white";
    //draw
    ctx7.beginPath();
    ctx7.fillRect(350, 0, 610, 150);


    //Variables for the text-sentences
    var drPaul1 = "My Day with Dr. Ron Paul";
    var drPaul2 = "April 9, 2014";

    //Styles for text
    ctx7.font = "25pt Century Gothic";
    ctx7.fillStyle = "black";
    ctx7.strokeStyle = "black";
    ctx7.lineWidth = 2;
    ctx7.shadowColor = "#717171";
    ctx7.shadowOffsetX = 1;
    ctx7.shadowOffsetY = 2;
    ctx7.shadowBlur = 2;

    // Draw text-sentences
    ctx7.fillText(drPaul1, 460, 60);
    ctx7.strokeText(drPaul1, 460, 60);

    ctx7.fillText(drPaul2, 565, 110);
    ctx7.strokeText(drPaul2, 565, 110);


}else{
    //Add fallback content
    console.log("Sorry, your browser does not support the canvas element.");
}//end of the Modernizer if/else

};//end of the window onload






