window.onload = function() {
	$(".lightbox_trigger").click(function(e){

        //prevent default
        e.preventDefault();

        //get the clicked link href
        var image_href = $(this).attr("href");

        //set up the lightbox if it doesn't exist or use the lightbox

        if($("#lightbox").length > 0){

            //lightbox div is created
            //place the clicked href into an image
            $("#content").html('<img src=" ' +image_href + '  " />');
            $("#lightbox").slideDown(1000);

        }else {
            //first time the lightbox div will not exist
            //create the lightbox
            var lightbox =
                '<div id="lightbox">' +
                '<p>Click Anywhere to Close</p>' +
                '<div id="content">' +
                '<img src=" ' + image_href + ' "  />'  +
                '</div>' +
                '</div>';

            //insert the lightbox HTML into the page
            $("body").append(lightbox);

            $("#lightbox").hide();
            $("#lightbox").slideDown(1000);
        }//end of the if/else

    });//end of the click function



    //setup the click to close
    $("#lightbox").live('click', function(){
        $("#lightbox").slideUp(1000);

    });//end of the live function--inserts into the DOM
	

};