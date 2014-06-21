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
    
    var percentage = 0;
    
    function load(){
        percentage ++;
        updateUI( percentage );
        if( percentage < 100 ) setTimeout( load, 10);
        else setTimeout( clear , 500);
    }
    function clear(){
        loader.style.opacity = "0";   
    }
    
    function updateUI( percentage ){
        counter.innerHTML = Math.floor( percentage ) + "%";
        progressBarHolder.style.width = Math.floor( percentage ) + "%";
    }
    window.addEventListener("load", load, false);
})();