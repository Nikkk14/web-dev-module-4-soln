
(function() {
    var names = ["Yaakov", "John", "Joey", "Rex", "Paul", "Scout", "Oper", "Pot", "Sindrin", "Cat"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeName.speak(names[i]);
        } else {
            helloName.speak(names[i]);
        }
    }
})();
