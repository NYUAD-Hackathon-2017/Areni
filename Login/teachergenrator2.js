// JavaScript Document

var $ = require('jquery');
var request = require('request');
var fs = require('fs');

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

var SUBJECTS = [
	'Math',
    'Geology',
    'Music',
    'English',
    'History',
    'Geography',
    'Science'
];

var LOCATIONS = [
	"Tully's Coffee",
	"Sugar Bakery & Cafe",
	"Peet's Coffee & Tea",
	"Chatterbox Cafe",
	"Ambrosia Cafe",
	"HardWok Cafe",
	"Row House Cafe",
	"Regent Bakery & Cafe",
	"Cafe Solstice",
	"Starbucks"
	
];

var LATS = [ 
	47.6138333,
	47.6093364,
	47.6093364,
	47.6085471,
	47.6074692,
	47.6019113,
	47.6171526,
	47.6081826,
	47.6152231,
	47.6145232
	
];

var LNG=[
	-122.3263265,
	-122.3280238,
	-122.3345898,
	-122.3432501,
	-122.3623953,
	-122.3314294,
	-122.3353294,
	-122.3381877,
	-122.3283525,
	-122.3325162

];

var DISTANCES = [
	0.3,
	0.1,
	0.2,
	0.6,
	0.9,
	1,
	2.1,
	0.9,
	1.4,
	1
	];
	

var DAYS = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Saturday",
	"Sunday"
];

var STARS = [3,4,5];

var TIMES = [
	"3:00 PM", 
	"8:00 PM", 
	"4:30 PM", 
	"6:00 PM", 
	"7:15 PM", 
	"5:00 PM"
];

request({
	url: 'https://randomuser.me/api/?results=30',
  	dataType: 'json',
}, function(error, response, body) {
	var teachers = [];
	var result = JSON.parse(body);
	//console.log(result);
	for ( var i=0 ; i<30 ; i++ ) {
		var firstName = result["results"][i]["name"]["first"].capitalize();
		var lastInitial = result["results"][i]["name"]["last"].charAt(0).toUpperCase();
		var username = result["results"][i]["login"]["username"];
		var img = result["results"][i]["picture"]["large"];
		var teacher = {
			"name": firstName + " " + lastInitial+".",
			"username": username,
			"img" : img,
			"subj":  SUBJECTS[i%7],
			"Lat" : LATS[i%10],
			"Lng" : LNG[i%10],
			"date" :DAYS[i%8],
			"loc" : LOCATIONS[i%10],
			"language": ["English"],
			"stars": STARS[i%3],
			"time": TIMES[i%6],
			"dist":DISTANCES[i%10]
		};
		
		//console.log(teacher);
		teachers.push(teacher);
		}
	//console.log(teachers); 
	var teacherString = JSON.stringify(teachers,null,"\t");
	fs.writeFile("./teachers2.json", teacherString, function(err) {
		if (err) return console.error(err);
		console.log("done");
	});
});

/*result = {
	"results":[
		{
			"gender":"male",
			"name":
				{
					"title":"mr",
					"first":"joan",
					"last":"lozano"
				},
			"location":
				{
					"street":"2485 calle de bravo murillo",
					"city":"barcelona",
					"state":"cantabria",
					"postcode":94896
				},
			"email":"joan.lozano@example.com",
			"login":
				{
					"username":"blackduck322",
					"password":"lick",
					"salt":"Vn8iwjmE",
					"md5":"66d5c33ed531505af0674ba2830edc68",
					"sha1":"8cfab665a75415c2c49d2f410bbd81b8ab9cde07",
					"sha256":"cad0e9de8cce8e839fcbd91c0eef3e14b7759669f4a762168897b2e0027738ef"
				},
			"dob":"1972-04-18 15:09:58",
			"registered":"2010-10-04 10:25:01",
			"phone":"967-200-699",
			"cell":"611-745-755",
			"id":
				{
					"name":"DNI",
					"value":"36506299-V"
				},
			"picture":
				{
					"large":"https://randomuser.me/api/portraits/men/3.jpg",
					"medium":"https://randomuser.me/api/portraits/med/men/3.jpg",
					"thumbnail":"https://randomuser.me/api/portraits/thumb/men/3.jpg"
				},
			"nat":"ES"
		}
	],
	"info":
		{
			"seed":"e309183a0ba98b03",
			"results":1,
			"page":1,"version":"1.1"
		}
};
*/


/*$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    WScript.echo(data);
  }
});*/
   