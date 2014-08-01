window.onload = function() {
	
	if(!createjs.Sound.initializeDefaultPlugins()){
        return;
    }


    createjs.Sound.registerSound({id: "soundId", src: "audio/music.mp3|audio/music.ogg"});

    //listen for the file to load
    createjs.Sound.addEventListener("fileload", handleFileLoad);
	};

function handleFileLoad (event){
    //A sound has been loaded
    //Will ONLY work once
    //console.log("hi", event.src);

    //createjs.Sound.play(event.src);

    //play the loaded sound

}

function playMusic(){

    //play the music on button click
    createjs.Sound.play("soundId");
}