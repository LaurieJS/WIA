/*
Laurie Shuck
Web Interaction and Animation
Project Assignment
July 31, 2014
*/


//Window.onload function
window.onload = function(){

    //Animate the Code Abode logo
    $("#logo_sprites").sprite({ fps: 1, no_of_frames: 5 });


    /******Code for the jHere map******/
    var map = document.getElementById("mapContainer");

    if(map){
    //jHere map code
    $("#mapContainer").jHERE({
        enable: ["behavior"],
        center: [37.694097300000000000, -122.086352199999960000]
    }).jHERE('marker', [37.694097300000000000, -122.086352199999960000], {
            icon: 'images/aboutIcon_home.svg',
            anchor: {x: 190, y: 90},
            click: function(){alert('Howdy from Castro Valley!');}
     });//end of the jHere code
    }//end of the if statement
};//end of the window.onload function


//Make the Home page buttons redirect to the correct pages
$(".tutorialsButton").click(function(){
    window.location.href = "tutorials.html";
});

$(".designsButton").click(function(){
    window.location.href = "designs.html";
});

$(".aboutButton").click(function(){
    window.location.href = "about.html";
});


//To turn the lights on and off to watch videos and change font colors
$(".lightsOff").on("click", function(e){
    var useVideos = document.getElementById("videos");
    var lightP = $(useVideos).find("p");
    var lightH3 = $(useVideos).find("h3");
    e.preventDefault();
    $(this).css("color", "#ffffff");
    $(".lightsOn").css("color", "#717171");
    $("html").css("backgroundColor", "#101218");
    $(lightP).css("color", "#717171");
    $(lightH3).css("color", "#717171");
});

$(".lightsOn").on("click", function(e){
    var useVideos = document.getElementById("videos");
    var lightP = $(useVideos).find("p");
    var lightH3 = $(useVideos).find("h3");
    e.preventDefault();
    $(this).css("color", "#ffffff");
    $(".lightsOff").css("color", "#717171");
    $("html").css("backgroundColor", "white");
    $(lightP).css("color", "#000000");
    $(lightH3).css("color", "#000000");
});

//Click function to retrieve my email address
$("#emailLaurie").on("click", function(e){
    e.preventDefault();
    $("#hiddenEmail").toggle();
});


//Modernizr code
//Modernizr for the video elements
Modernizr.load({
    //properties
    test: Modernizr.video,
    yep: ["js/success.js"],
    nope: "includes/webshim/minified/polyfiller.js",
    complete: function(){

        //this will happen after the yep nope
        console.log("The test for video is complete");

        if(!Modernizr.video){
            //if video is not supported, which will use the webshim
            Modernizr.load("js/fail.js");
        }//end of the if statement

    }//end of the complete function
});//end of the Modernizr.load



//Modernizr code for the canvas elements
Modernizr.load({
    //properties
    test: Modernizr.canvas,
    yep: ["js/success.js", "js/DrawText.js"],
    nope: "includes/webshim/minified/polyfiller.js",
    complete: function(){
        //this will happen after the yep nope

        console.log("The test for canvas is complete");
        if(!Modernizr.canvas){
            //if canvas is not supported, which will use the webshim
            Modernizr.load("js/fail.js");
            //then load drawText file
            Modernizr.load("js/DrawText.js");
        }//end of the if statement

    }//end of the complete function
});//end of the Modernizr.load