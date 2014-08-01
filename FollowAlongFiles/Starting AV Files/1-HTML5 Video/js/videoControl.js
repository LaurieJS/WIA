//create a variable to hold the video

var vid;
window.onload = function(){
    //link to video
    vid = document.getElementById("vid");
};

function pauseToggle(){
    //test the video & test if it is paused
    if(vid.paused){
        //Play the video
        vid.play();

    }else{
        //pause the video
        vid.pause();
    }
}

function clicked(){
    //currentTime current playtime in seconds
    vid.currentTime += 2;

}