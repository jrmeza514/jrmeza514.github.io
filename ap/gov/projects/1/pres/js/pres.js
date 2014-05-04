(function(){
    var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;
    var isMoving = false;
    function reset(){
       currentSlide = 0;
       isMoving = false;
        for( var x = 0; x < slides.length; x++){
            slides[x].style.top = "100%";
        }
        slides[currentSlide].style.top = "0";   
    }
    next = function(){
        if(!isMoving){
            isMoving = true;
            slides[currentSlide].style.top = "-100%";
            currentSlide++;
            if( currentSlide == slides.length){
                reset();
            }else{
                slides[currentSlide].style.top = "0";
            }
            setTimeout( function(){
                isMoving = false;
            },1000);
        }
    }
     reset();
})();
