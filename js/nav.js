var TARGET = "NAV_MENU";
function toggleNavigation(){
    var dom  = document.getElementById(TARGET);
    dom.classList.toggle("visible");
    
}
function setTargetID( TID ){
    TARGET = TID;
}