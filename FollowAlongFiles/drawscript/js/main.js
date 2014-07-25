/*window.onload = function(){

    var theCanvas = document.getElementById("canvas1");

    if(theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext("2d");

        if(ctx){
            //begin drawing here; ctx is the context
            //code from DrawScript--which is awesome!!!
            ctx.fillStyle="rgb(48,115,165)";
            ctx.fillRect(53,99,169,93);
            ctx.fill();

            ctx.fillStyle="rgb(204,77,0)";
            ctx.beginPath();
            ctx.moveTo(524,182);
            ctx.bezierCurveTo(524,244,474,294,412,294);
            ctx.bezierCurveTo(350,294,299,244,299,182);
            ctx.bezierCurveTo(299,120,350,69,412,69);
            ctx.bezierCurveTo(474,69,524,120,524,182);
            ctx.fill();

            ctx.fillStyle="rgb(255,91,11)";
            ctx.beginPath();
            ctx.moveTo(410,228);
            ctx.lineTo(397,197);
            ctx.lineTo(364,191);
            ctx.lineTo(389,168);
            ctx.lineTo(385,135);
            ctx.lineTo(414,152);
            ctx.lineTo(445,138);
            ctx.lineTo(437,171);
            ctx.lineTo(460,196);
            ctx.lineTo(426,199);
            ctx.lineTo(410,228);
            ctx.fill();

            ctx.fillStyle="rgb(0,0,0)";
            ctx.lineStyle="rgb(0,0,0)";
            ctx.lineWidth=4.808443546295166;
            ctx.beginPath();
            ctx.moveTo(155,149);
            ctx.lineTo(155,129);
            ctx.bezierCurveTo(155,128,156,127,156,126);
            ctx.bezierCurveTo(157,125,158,125,159,125);
            ctx.lineTo(169,125);
            ctx.bezierCurveTo(169,125,171,124,173,123);
            ctx.bezierCurveTo(176,122,178,122,180,121);
            ctx.bezierCurveTo(182,121,184,120,187,120);
            ctx.lineTo(190,120);
            ctx.bezierCurveTo(193,120,196,121,198,123);
            ctx.bezierCurveTo(199,125,200,127,200,130);
            ctx.lineTo(200,130);
            ctx.bezierCurveTo(202,132,202,134,202,136);
            ctx.lineTo(202,137);
            ctx.bezierCurveTo(203,139,203,140,203,142);
            ctx.bezierCurveTo(203,143,203,143,203,144);
            ctx.bezierCurveTo(204,146,205,147,205,149);
            ctx.bezierCurveTo(205,152,204,153,202,155);
            ctx.bezierCurveTo(201,157,199,158,196,158);
            ctx.lineTo(191,158);
            ctx.bezierCurveTo(192,160,192,162,192,164);
            ctx.bezierCurveTo(192,166,192,168,191,170);
            ctx.bezierCurveTo(190,171,189,172,188,173);
            ctx.bezierCurveTo(186,174,185,174,183,174);
            ctx.bezierCurveTo(182,174,181,174,180,173);
            ctx.bezierCurveTo(179,172,179,171,178,170);
            ctx.bezierCurveTo(178,169,178,168,177,167);
            ctx.bezierCurveTo(177,166,177,165,177,165);
            ctx.bezierCurveTo(177,164,176,163,176,162);
            ctx.bezierCurveTo(175,161,174,160,173,158);
            ctx.bezierCurveTo(170,156,169,154,168,153);
            ctx.lineTo(159,153);
            ctx.bezierCurveTo(158,153,157,153,156,152);
            ctx.bezierCurveTo(156,151,155,150,155,149);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle="rgb(0,0,0)";
            ctx.lineStyle="rgb(0,0,0)";
            ctx.lineWidth=4.808443546295166;
            ctx.beginPath();
            ctx.moveTo(160,129);
            ctx.bezierCurveTo(159,130,159,130,159,131);
            ctx.bezierCurveTo(159,131,159,132,160,132);
            ctx.bezierCurveTo(160,133,161,133,161,133);
            ctx.bezierCurveTo(162,133,162,133,163,132);
            ctx.lineTo(163,131);
            ctx.bezierCurveTo(163,130,163,130,163,129);
            ctx.bezierCurveTo(162,129,162,129,161,129);
            ctx.lineTo(160,129);
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle="rgb(0,0,0)";
            ctx.lineStyle="rgb(0,0,0)";
            ctx.lineWidth=4.808443546295166;
            ctx.beginPath();
            ctx.moveTo(168,149);
            ctx.lineTo(169,149);
            ctx.bezierCurveTo(169,149,169,149,170,150);
            ctx.lineTo(171,150);
            ctx.bezierCurveTo(171,151,172,151,172,152);
            ctx.bezierCurveTo(173,152,173,152,174,153);
            ctx.bezierCurveTo(174,154,174,154,175,154);
            ctx.bezierCurveTo(175,155,175,155,176,156);
            ctx.bezierCurveTo(176,156,176,157,177,157);
            ctx.bezierCurveTo(178,158,179,159,179,160);
            ctx.bezierCurveTo(180,160,181,162,181,163);
            ctx.bezierCurveTo(181,165,182,166,182,167);
            ctx.bezierCurveTo(182,168,183,169,183,170);
            ctx.bezierCurveTo(185,170,186,169,187,168);
            ctx.bezierCurveTo(188,167,188,166,188,164);
            ctx.bezierCurveTo(188,162,188,161,187,159);
            ctx.bezierCurveTo(186,156,185,155,185,153);
            ctx.lineTo(196,153);
            ctx.bezierCurveTo(197,153,198,153,199,152);
            ctx.bezierCurveTo(200,151,200,150,200,149);
            ctx.bezierCurveTo(200,149,200,148,200,147);
            ctx.bezierCurveTo(199,146,199,145,198,145);
            ctx.lineTo(199,144);
            ctx.bezierCurveTo(199,143,199,142,199,142);
            ctx.bezierCurveTo(199,140,199,139,197,138);
            ctx.bezierCurveTo(198,137,198,137,198,136);
            ctx.bezierCurveTo(198,135,198,134,198,133);
            ctx.bezierCurveTo(197,133,197,132,196,132);
            ctx.bezierCurveTo(196,131,196,130,196,130);
            ctx.bezierCurveTo(196,128,196,127,195,126);
            ctx.bezierCurveTo(194,125,192,125,190,125);
            ctx.lineTo(186,125);
            ctx.bezierCurveTo(183,125,180,125,175,127);
            ctx.bezierCurveTo(175,127,175,127,174,127);
            ctx.lineTo(173,128);
            ctx.lineTo(172,128);
            ctx.bezierCurveTo(171,128,171,128,171,128);
            ctx.bezierCurveTo(170,128,170,129,170,129);
            ctx.bezierCurveTo(169,129,169,129,169,129);
            ctx.lineTo(168,129);
            ctx.lineTo(168,149);
            ctx.fill();
            ctx.stroke();






        }//end of the ctx if statement
    }//end of the getContext if statement


};//end of the window.onload function*/


window.onload = function(){
    //get the canvas element
    var canvas = document.getElementById("canvas1");
    //create the stage
    var stage = new createjs.Stage(canvas);
    //create a graphic
    var shape = new createjs.Shape();

    //draw shape here
    shape.graphics.f("rgba(189,204,212,254)").p("EB82B9KMh8/AAAMAAAh9AMB8/AAAMAAAB9A").cp().ef().f("rgba(122,201,67,254)").p("EADmBi6MAAAhKiYAAmGCMlUEYkYYEYkYFUiMGGAAMBKiAAAYGGAAFUCMEYEYYEYEYCCFUAAGGMAAABKiYAAGGiCFUkYEYYkYEYlUCMmGAAIvAAAMAAAgvMIPyAAICWxgIyIAAIAArGYAAiqAyiMBahkYBahaCggyDmAAIKKgKIAAv8Yk2geksgUkYAAYnCAAloCMkOEEYkOEOiMFyAAHgIAAM0IxWAAIAARgIRWAAMAAAAvMMgqMAAAYmGAAlUiMkYkYYkYkYiMlUAAmG").cp().ef();






    //add to the stage
    stage.addChild(shape);
    //update the stage
    stage.update();


};//end of the onload function