$(function() { 
	$("#fadeout").click(function(){
        $("#theDiv").fadeOut("normal");
    });//end of the fadeout click function

    $("#fadein").click(function(){
        $("#theDiv").fadeIn("normal");
    });

    $("#fadeto3").click(function(){
        $("#theDiv").fadeTo(2000, .3);
    });

    $("#fadeup").click(function(){
        $("#theDiv").fadeTo(2000, 1, function(){
            alert("You have located the Div");
        });
    });
            
});//end of the ready function