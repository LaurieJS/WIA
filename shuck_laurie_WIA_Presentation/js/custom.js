/*
 Laurie Shuck
 Spritely Presentation
 Web Interaction and Animation
 July 24, 2014
 */

$(document).ready(function() {
    //Spritely code to animate the demo
    $("#unicorn").sprite({ fps: 3, no_of_frames: 3 }).isDraggable("enable");
    $("#planets").pan({fps: 25, speed: 2, dir: 'left'});
    $("#background").pan({fps: 5, speed: 2, dir: 'left'});

    //To animate the background image of the "It's Demo Time" slide-small waves
    var findImage = $("[style*='.png']");
    $(findImage).css({"background-repeat": "repeat-x", "margin-top": "300px"});
    $(findImage).pan({fps: 25, speed: 3, dir: 'right'});
    //console.log(findImage);

    // I added animation to the "It's Demo Time" text on mouse-over
    $("#mouseOver").mouseover(function(){
        $("#demoTime").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    });//end of the mouseOver function

});//end of the document.ready function

