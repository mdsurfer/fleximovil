//
$(document).ready(function() {
    $("#gigas").radiosToSlider();
    $("#minutos").radiosToSlider();
    $("#fibra").radiosToSlider();

});


var menuMobile = document.getElementById('header-nav-mob');
var menuButton = document.getElementById('mobileMenu');
var menuButtonClose = document.getElementById('mobileMenuClose');

mobileMenu.onclick = function responsiveNav() {
    //console.log(' Menu btn OK');
     if (menuMobile.className === "header-nav-mob") {
         //console.log('found');
        menuMobile.className += " collapse";
     }
    else{
        menuButton.className == "header-mob-menu";
    }
    if (menuButton.className === "burger menu-link white-t") {
        //console.log('found button');
        menuButton.className += " hide";
        menuButtonClose.className += " show";
    }
    else{
        menuButton.className == "burger menu-link white-t";
    }
}

mobileMenuClose.onclick = function responsiveNavHide() {
    if (menuMobile.className === "header-nav-mob collapse") {
        menuMobile.className = "header-nav-mob";
        console.log("found");
        menuButtonClose.className = "menu-link white-t hide";
        menuButton.className = "burger menu-link white-t";
        console.log('botton close');
    }
    else{
        menuMobile.className == "header-nav-mob responsive";
        console.log("not found");
    }
}