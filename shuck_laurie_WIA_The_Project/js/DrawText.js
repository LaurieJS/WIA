
if(document.getElementById("Canvas1")){

    //get the canvas element
    var canvas = document.getElementById("Canvas1");
    //create the stage
    var stage = new createjs.Stage(canvas);
    //create a graphic
    var shape = new createjs.Shape();

    //draw shape here heart and yellow background
    shape.graphics.f("rgba(255,243,219,254)").p("EByiA7OMhyrAAAMAAAg7EMByrAAAMAAAA7E").cp().ef().f("rgba(193,39,45,254)").p("AZyVQYAAgeAKgUAUgUYAUgUAUgKAeAAYAeAAAUAKAUAUYAKAKAKAUAAAKYAKgKAAgUAKgKYAUgUAegKAUAAYAeAAAUAKAUAUYAUAUAKAUAAAeYAAAygeAogyAoYg8AogeAogUAeYgKgegogogygoYg8gogegoAAgy").cp().ef();

    //add to the stage
    stage.addChild(shape);
    //update the stage
    stage.update();

    //Text for the I <3 web design canvas
    var textI = new createjs.Text("I", "bold 60px Georgia", "#717171");
    textI.x = 120;
    textI.y = 110;
    stage.addChild(textI);
    stage.update();

    var textWeb = new createjs.Text("Web Design", "bold 60px Georgia", "#717171");
    textWeb.x = 220;
    textWeb.y = 110;
    stage.addChild(textWeb);
    stage.update();

    var textDevel = new createjs.Text("& Development", "bold 60px Georgia", "#717171");
    textDevel.x = 120;
    textDevel.y = 190;
    stage.addChild(textDevel);
    stage.update();

} else if(document.getElementById("Canvas2")){

    //get the canvas element
    var canvas2 = document.getElementById("Canvas2");
    //create the stage
    var stage2 = new createjs.Stage(canvas2);
    //create a graphic
    var shape2 = new createjs.Shape();

    //draw shape here
    shape2.graphics.f("rgba(198,212,197,254)").p("EByiAvMMhyiAAAMAAAgvMMByiAAAMAAAAvM").cp().ef();
    shape2.graphics.ss(1).s("rgba(77,77,77,254)").p("EBjOAeAIlKAAICqlAICgFA").cp().es().ss(6).s("rgba(96,56,19,254)").p("EBlaAnYIpYAAIAApYIJYAAIAAJY").cp().es().f("rgba(153,153,153,254)").p("EBg4AZAIgKAKYgKAAgKgKAAAAYAAgKAKgKAKAAYAAAAAKAKAAAK").cp().ef().ss(1).s("rgba(77,77,77,254)").p("EBPsAeAIlKAAICqlAICgFA").cp().es().ss(6).s("rgba(96,56,19,254)").p("EBR4AnYIpYAAIAApYIJYAAIAAJY").cp().es().f("rgba(179,179,179,254)").p("EBNWAZAIgKAKYgKAAgKgKAAAAYAAgKAKgKAKAAYAAAAAKAKAAAK").cp().ef().ss(1).s("rgba(77,77,77,254)").p("EBZYALuIlKAAICqlAICgFA").cp().es().ss(6).s("rgba(96,56,19,254)").p("EBbkAVGIpYAAIAApYIJYAAIAAJY").cp().es().f("rgba(153,153,153,254)").p("EBXCAGuIgKAKYgKAAgKgKAAAAYAAgKAKgKAKAAYAAAAAKAKAAAK").cp().ef();

    //add to the stage
    stage2.addChild(shape2);
    //update the stage
    stage2.update();

    //Text for the Design Gallery canvas
    var designText = new createjs.Text("Design", "bold 60px Georgia", "#717171");
    designText.x = 55;
    designText.y = 85;
    stage2.addChild(designText);
    stage2.update();

    //Text for the Design Gallery canvas
    var galleryText = new createjs.Text("Gallery", "bold 60px Georgia", "#717171");
    galleryText.x = 55;
    galleryText.y = 155;
    stage2.addChild(galleryText);
    stage2.update();

}
