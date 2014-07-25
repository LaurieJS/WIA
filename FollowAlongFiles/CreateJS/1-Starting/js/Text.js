window.onload = function() {
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);

    //text is a display object
    var sentence = new createjs.Text();

    //modify the text property
    sentence.text = "Ron Paul 2016!";

    //font property
    sentence.font = "bold 30px Times";

    //specify font color
    sentence.color = "blue";

    sentence.x = 150;
    sentence.y = 50;
    //sentence.rotation = 45;

    //textAlign "left, right, center"
    sentence.textAlign = "center";

    //lineWidth max width of the column of text--like padding
    sentence.lineWidth = 150;
    //lineHeight
    sentence.lineHeight = 35;
    //outline (boolean)
    sentence.outline = false;


    //combine into one line of code (.text, .font, .color)
    var sentence2 = new createjs.Text("Ron Paul 2020", "bold 30px Times", "blue");



    stage.addChild(sentence);
    stage.addChild(sentence2);
    stage.update();
	
};