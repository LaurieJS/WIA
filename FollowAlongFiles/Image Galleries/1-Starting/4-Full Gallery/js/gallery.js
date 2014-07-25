$(document).ready(function() {

$(".gallery_thumbnails a").click(function(e){

    //disable links
    e.preventDefault();

    //create links to hold the links from the thumbnail
    var photo_fullsize = $(this).attr("href");
    var photo_caption = $(this).attr("title");

    //create the preview link
    var photo_preview = photo_fullsize.replace("_fullsize", "_preview");

    //slide the caption out of the way
    $(".gallery_caption").slideUp(500);

    //fade out the preview area
    $(".gallery_preview").fadeOut(500, function(){

        //preload the clicked image
        $(".gallery_preload_area").html('<img src=" '+photo_preview+' ">');

        //once image is preloaded--it can be used
        $(".gallery_preload_area img").imgpreload(function(){
            //alert("hi")

            //change the picture and link for the preview area
            $(".gallery_preview").html('<a class="overlayLink" title="'+photo_caption+'" href="'+photo_fullsize+'" ' +
                'style="background-image:url('+photo_preview+');"></a>');

            //fade back in the preview window
            $(".gallery_preview").fadeIn(500);

            $(".gallery_caption").html('<p><a class="overlayLink zoom" title=" '+photo_caption +' " href="'+photo_fullsize+'">View Larger</a></p><p>'+photo_caption+'</p>');
            $(".gallery_caption").slideDown(500);
            setFancyBoxLinks();
            updateThumbnails();


        });//end of the imgpreload function

    });//end of the fadeOut function

});//end of the .click

    //create 1st variables
    var first_photo_caption = $(".gallery_thumbnails a").first().attr("title");
    var first_photo_fullsize = $(".gallery_thumbnails a").first().attr("href");
    var first_photo_preview = first_photo_fullsize.replace("_fullsize", "_preview");


    //set the caption & photo
    $(".gallery_preview").html('<a class="overlayLink" title="'+first_photo_caption+'" href="'+first_photo_fullsize+'" ' +
        'style="background-image:url('+first_photo_preview+');"></a>');

    $(".gallery_caption").html('<p><a class="overlayLink zoom" title=" '+first_photo_caption +' " href="'+first_photo_fullsize+'">View Larger</a></p><p>'+first_photo_caption+'</p>');

    setFancyBoxLinks();
    updateThumbnails();

}); //end of the .ready


function setFancyBoxLinks(){
    $("a.overlayLink").fancybox({
        'titlePositon' : 'over',
        'overlayColor' : '#000',
        'overlayOpacity' : .8,
        'transitionIn' : 'elastic',
        'transitionOut' : 'elastic',
        'autoScale' : true

    });//end of .fancybox
}//end of the setFancyBoxLinks function

function updateThumbnails(){
    $(".gallery_thumbnails a").each(function(index){
        if($(".gallery_preview a").attr("href") == $(this).attr("href")){
            //if the anchor is the same as the preview anchor--we will sahde the thumbnail & give class selected
            $(this).addClass("selected");
            $(this).children().fadeTo(250, .4);
        } else {
            //remove the selected class and fadeUp to 100% opacity
            $(this).removeClass("selected");
            $(this).children().css("opacity", "1");
        }

    });//end of the .each
}//end of the updateThumbnails function