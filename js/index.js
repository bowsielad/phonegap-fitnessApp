//Get the network status


document.addEventListener("resume", getConnection, false);  

function getConnection(){
var ntwk = CheckConnection();

if (ntwk) {
    alert("Network available");
}else{
    alert("Sorry! Network  not available");
}
}

function CheckConnection(){
if( !navigator.network ){
                navigator.network = window.top.navigator.network;
}
return ( (navigator.network.connection.type === "none" || navigator.network.connection.type === null || 
          navigator.network.connection.type === "unknown" ) ? false : true );
}

//Open link to my website

function openMyWebsite(){
	
var win = window.open( "", "_blank",
  "EnableViewPortScale=yes,location=yes,zoom=no,hardwareback=no" );
  
}

//index page

//Set todays data = Steps

function indexStepsData(){
	
var fitbitAccessToken = window.localStorage.getItem("key");
	
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);

// handle the data from the get request

function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
	
	//$( "#stepsData" ).html(data['activities-steps'][0].value);
	
	var stepCount = data['activities-steps'][0].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	
	$( "#stepsData" ).html(stepCount);
	
	
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	


}

}

//Set todays data = distance

function indexDistanceData(){
	
var fitbitAccessToken = window.localStorage.getItem("key");
	
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);

// handle the data from the get request

function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
	
	
	$( "#distanceData" ).html(Math.round((data['activities-distance'][0].value)*100)/100).toFixed(2);
	
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	


}

}

//Set todays data = calories

function indexCaloriesData(){
	
var fitbitAccessToken = window.localStorage.getItem("key");
	
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);

// handle the data from the get request

function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
	
	//$( "#caloriesData" ).html(data['activities-calories'][0].value);
	
	var caloriesCount = data['activities-calories'][0].value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	
	$( "#caloriesData" ).html(caloriesCount);
	
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	


}

}


//getActive Page

//Set goals data

function GetGoalData(){

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);


// handle the data from the get request


function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
		
	$( "#stepsGoal" ).html(data['goals'].steps);
	
	$( "#caloriesGoal" ).html(data['goals'].caloriesOut);
	
	$( "#milesGoal" ).html(data['goals'].distance);
	
	$( "#activeMinsGoal" ).html(data['goals'].activeMinutes);
	
		
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	
}

}

//Set heart rate data

function GetHeartData(){

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);


// handle the data from the get request


function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
		
	$( "#restingHeart" ).html(data['activities-heart'][0].value['restingHeartRate']);
	
	//alert(data['activities-heart'][0].value['restingHeartRate']);
		
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	
}

}


//Set todays data

function GetTodaysData(param){
	
var url = param;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
		
		readBody(xhr);
        console.log("xhr done successfully");
        
    }
}

xhr.open('GET', '', true);
xhr.setRequestHeader('Authorization', 'Bearer ' + fitbitAccessToken);
xhr.send(null);


// handle the data from the get request


function readBody(xhr) {
 var data;
	
	if(xhr){
		
	var resp = xhr.responseText;
    data = JSON.parse(resp);
	
	if(url == 'steps'){
		
	$( "#stepsData" ).html(data['activities-steps'][0].value);
	
	}
	
	if(url == 'calories'){
	
	$( "#caloriesData" ).html(data['activities-calories'][0].value);
	
	}
	
	if(url == 'distance'){
	
	$( "#milesData" ).html(Math.round((data['activities-distance'][0].value)*100)/100).toFixed(2);
	
	}
	
	if(url == 'minutesVeryActive'){
	
	$( "#minutesData" ).html(data['activities-minutesVeryActive'][0].value);
	
	}
	
	//alert(data['activities-calories'][0].value);
	
		
	} else if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
	
}

}