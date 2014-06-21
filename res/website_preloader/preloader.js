(function(){
    var loader = document.createElement("div");
    loader.id = "-jrm-page-loader";
    var counter = document.createElement("div");
    counter.id = "-jrm-page-loader-progress-bar-counter";
    var progressBarHolder = document.createElement("div");
    progressBarHolder.id = "-jrm-page-loader-progress-bar-holders";

    loader.appendChild(counter);
    loader.appendChild(progressBarHolder);
    document.body.appendChild( loader );
    
    function load(){
        var speed = 1;
        var percentage = 0;
        setTimeout(function(){
            while( percentage <= 1000 ){
                updateUI( percentage / 10 );
                percentage += speed; 
            }
        }, 1000);
        percentage = 100;
        updateUI( percentage / 10 );
        setTimeout(function(){
            loader.style.opacity = 0;
        }, 2000);
    }
    
    function updateUI( percentage ){
        counter.innerHTML = Math.floor( percentage ) + "%";
        progressBarHolder.style.width = percentage + "%";
    }
    window.addEventListener("load", load, false);
})();