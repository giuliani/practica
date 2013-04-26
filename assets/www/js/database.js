// Wait for PhoneGap to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
//
function onDeviceReady() {
    var db = window.openDatabase("stretchingCoach", "1.0", "Stretching Coach DB", 9000000);
    db.transaction(populateDB, errorCB, successCB); 
}

// Populate the database 
//
function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS EXERCISES');
     tx.executeSql('CREATE TABLE IF NOT EXISTS EXERCISES (id unique, imageURL, description)');
     tx.executeSql('INSERT INTO EXERCISES (id, imageURL, description) VALUES (1, "/img/neck1.png","<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Turn head to one side, then the other</p><p>3. Hold for 5 seconds, each side</p><p>4. Repeat 1 to 3 times</p>")');
     tx.executeSql('INSERT INTO EXERCISES (id, imageURL, description) VALUES (2, "/img/neck2.png","<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Tilt head sideways, first one side then the other</p><p>3. Hold for 5 seconds</p><p> 4. Repeat 1-3 times</p>")');
     tx.executeSql('INSERT INTO EXERCISES (id, imageURL, description) VALUES (3, "/img/neck3.png", "<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Gently tilt head forward to stretch back of neck</p><p>3. Hold 5 seconds</p><p> 4. Repeat 1-3 times</p>")');
}

// Transaction error callback
//
function errorCB(tx, err) {
    alert("Error processing SQL: "+err);
}

// Transaction success callback
//
function successCB() {
    var db = window.openDatabase("stretchingCoach", "1.0", "Stretching Coach DB", 9000000);
    db.transaction(queryDB, errorCB);
    
}
function queryDB(tx) {
    tx.executeSql('SELECT * FROM EXERCISES', [], querySuccess, errorCB);
}
function querySuccess(tx, results) {
	var len = results.rows.length;
	
    $('#workoutBox').html("<div class='workoutImg span5'><img src='."+results.rows.item(0).imageURL+"'/></div><div class='span4'>"+results.rows.item(0).description+"</div>");
	
	window.localStorage.setItem("workouts", JSON.stringify({'value': results.rows.length}));
	var val = JSON.parse(window.localStorage.getItem("workouts"));
	window.localStorage.setItem("currentWorkout", JSON.stringify({'value': '0'}));
	
	var results = {'workouts': []};
    results.workouts.push({'id': '1', 'imageURL': '/img/neck1.png', 'description': '<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Turn head to one side, then the other</p><p>3. Hold for 5 seconds, each side</p><p>4. Repeat 1 to 3 times</p>'});
	results.workouts.push({'id': '2', 'imageURL': '/img/neck2.png', 'description': '<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Tilt head sideways, first one side then the other</p><p>3. Hold for 5 seconds</p><p> 4. Repeat 1-3 times</p>'});
	results.workouts.push({'id': '3', 'imageURL': '/img/neck3.png', 'description': '<p>1. Sit or stand with arms hanging loosely at sides</p><p>2. Gently tilt head forward to stretch back of neck</p><p>3. Hold 5 seconds</p><p> 4. Repeat 1-3 times</p>'});
	window.localStorage.setItem("allWorkouts", JSON.stringify(results));
	
	window.localStorage.setItem("workouts", JSON.stringify({'value': String(3)}));
    //$('#workoutBox').html("<div class='workoutImg span5'><img src='."+results.workouts[0].imageURL+"'/></div><div class='span4'>"+results.workouts[0].description+"</div>");
	
   
}

