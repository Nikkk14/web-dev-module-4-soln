(function(window) {
    var helloName = new Object();
    var speakWord = "Hello";
    helloName.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloName;
})(window);
