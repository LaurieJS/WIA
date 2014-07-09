if(Modernizr.canvas){
    //Canvas is supported

    theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    //drawing begins here
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 20, 60);
}else{
    //canvas not supported & polyfills go here
}

if(Modernizr.draganddrop){
    //if it works
    ctx.font = "25pt Georgia";
    ctx.fillText("Drag and Drop Works!", 20, 120);
} else {
    //polyfills go here
}

console.log(Modernizr);