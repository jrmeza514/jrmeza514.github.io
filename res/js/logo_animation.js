window.addEventListener("load", function(){
    var words = document.getElementsByClassName("logo_animation")[0].getElementsByClassName("word");
    for( var x = 0; x < words.length; x++){
        var word = words[x];
        var letters = word.getElementsByClassName("letter");
        for(var y = 0; y < letters.length; y++){
            letters[y].style.transition = "opacity " + (( ( ( x * 4) + y) + 1 ) ) + "s";
            letters[y].style.opacity = "1";
        }
    }
}, false);