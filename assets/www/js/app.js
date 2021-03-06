//http://mobile.tutsplus.com/tutorials/phonegap/phonegap-from-scratch-app-template/

var theScroll;
function scroll(){
    theScroll = new iScroll('wrapper');
}
document.addEventListener('DOMContentLoaded', scroll, false);

var now = new Date();
var notificationTime = new Date();
notificationTime.setHours(14);
notificationTime.setMinutes(0);
notificationTime.setSeconds(0);
var deltaT = now.getTime() - notificationTime.getTime();
deltaT = 10000;
/*if(deltaT >=0)
	var notify = setTimeout(function(){showAlert();}, deltaT);*/
	
/*window.plugins.statusBarNotification.notify("Put your title here", "Put your sticky message here");*/

$('#nextWorkout').on('click', function(e){
	e.preventDefault();
	var currentWorkout = JSON.parse(window.localStorage.getItem("currentWorkout"));
	var totalWorkouts = JSON.parse(window.localStorage.getItem("workouts"));
	if(Number(currentWorkout.value) < (Number(totalWorkouts.value)-1)){
		currentWorkout.value = Number(currentWorkout.value) + 1;
	}else{
		currentWorkout.value = 0;
	}
	var num = currentWorkout.value;
	window.localStorage.setItem("currentWorkout", JSON.stringify({'value':String(num)}));
	
	nextWorkout();
});

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

function nextWorkout(){
	var results = JSON.parse(window.localStorage.getItem("allWorkouts"));
	var allWorkouts = results.workouts;
	var currentWorkout= JSON.parse(window.localStorage.getItem("currentWorkout"));
	$('#workoutBox').html("<div class='workoutImg span5'><img src='."+allWorkouts[Number(currentWorkout.value)].imageURL+"'/></div><div class='span4'>"+allWorkouts[Number(currentWorkout.value)].description+"</div>");
}
/*
function showAlert() {
    navigator.notification.alert(
        'Time for your workout!',// message
        alertDismissed,         // callback
        'My Stretching Coach', // title
        'Ok'                  // buttonName
    );
}

function alertDismissed() {
    // do something
}
*/