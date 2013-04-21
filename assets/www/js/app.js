//http://mobile.tutsplus.com/tutorials/phonegap/phonegap-from-scratch-app-template/

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

$('#homeBtnStartWorkout').on('click', function(e){
	e.preventDefault();
	var nextPage = $('#workout');
	page(nextPage);
	$("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

$('#homeBtnViewStats').on('click', function(e){
	e.preventDefault();
	var nextPage = $('#stats');
	page(nextPage);
	$("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

$('#homeBtnEditSettings').on('click', function(e){
	e.preventDefault();
	var nextPage = $('#settings');
	page(nextPage);
	$("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

$('#homeBtnFunFacts').on('click', function(e){
	e.preventDefault();
	var nextPage = $('#facts');
	page(nextPage);
	$("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

$('#tab-bar a').on('click', function(e){
    e.preventDefault();
    var nextPage = $(e.target.hash);
    page(nextPage);
    $("#pages .current").removeClass("current");
    nextPage.addClass("current");
});

function page(toPage) {
    var toPage = $(toPage),
    fromPage = $("#pages .current");
    if(toPage.hasClass("current") || toPage === fromPage) {
        return;
    };
    toPage.addClass("current fade in").one("webkitAnimationEnd", function(){
        fromPage.removeClass("current fade out");
        toPage.removeClass("fade in")
    });
    fromPage.addClass("fade out");
}