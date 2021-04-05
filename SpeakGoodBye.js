(function(window) {
    var byeName = new Object();
    var speakWord = "Good Bye";
    byeName.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeName;
})(window);
