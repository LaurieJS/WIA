$(function() {

	//add a click function to the button
    //Hide
    $("#hide").click(function(){
        $("#theDiv").hide("slow", function(){
            //alert("The Div has received the invisibility cloak...");
            $("#theDiv").css("background-color", "red");
        });//end of the hide slow function
    });//end of the hide click function

    //Show
    $("#show").click(function(){
        $("#theDiv").show("slow");
    });//end of the show click function

    //Toggle
    $("#toggle").click(function(){
        $("#theDiv").toggle("slow");
    });//end of the toggle click function

});//end of the ready function


