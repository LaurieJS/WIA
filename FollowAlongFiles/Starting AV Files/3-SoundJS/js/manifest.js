window.onload = function() {
    if(!createjs.Sound.initializeDefaultPlugins()){
        return;
    }//end of the if

    //create a variable to hold a path to the audio files
    var audioPath = "audio/";

    //create an array of objects--each object is a sound, which is called a manifest
    var manifest = [
        {id: "Music", src: audioPath+"music.mp3|"+audioPath+"music.ogg"},
        {id: "Thunder", src: audioPath+"Thunder1.mp3|"+audioPath+"Thunder1.ogg"}


    ];//end of the array

    //register the manifest with Soundjs
    createjs.Sound.registerManifest(manifest);

    //listen for files to load
    createjs.Sound.addEventListener("fileload", handleLoad);

    function handleLoad(event){
        //This will run once each time the file is initially loaded
        //createjs.Sound.play(event.src);
    }//end of the handleLoad function


	
	};//end of the window.onload

function playMusic(){
    createjs.Sound.play("Music");
}

function playThunder(){
    //BRING the Thunder ROFL
    createjs.Sound.play("Thunder");
}