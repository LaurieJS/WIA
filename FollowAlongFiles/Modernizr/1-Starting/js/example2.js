//Load different scripts based on our test using Modernizr.load
Modernizr.load({
    test: Modernizr.inputtypes.date,
    yep: "js/success.js",
    nope: "js/fail.js",
    complete: function(){

        //This will run after the JS file is loaded based on the case
        console.log("The test is complete.");
    }
});