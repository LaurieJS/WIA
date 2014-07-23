/**
 * Created by Laurie on 7/15/14.
 */

$(document).ready(function(){
    $("#mapForm").change(function(){
        var selectedContinent = $("#mapForm option:selected").val();

        if(selectedContinent == "ALL"){
            $("a.dot").show("1000");
        } else {
            $('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
            $('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
        }//end of the if/else

    });//end of mapForm change function

    $("a.dot").click(function(){
        //alert($(this).attr("city"));
        $("a.dot").removeClass("selected");
        $(this).addClass("selected");

        var city = ".city_detail#"+$(this).attr("city");
        var htmlCode = $(city).html();

        $(".detail_container").fadeOut(500, function(){
            $(".detail_container .city_detail").html(htmlCode);
            $(".detail_container").fadeIn(500);
        });//end of the detail container fadeOut

    });

});//end of the document ready function
