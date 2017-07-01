//console.log("Hello")
//console.log("Whazzz up")

/*
var name  = "John";
//console.log(name);

var lastName = "Smith";

//console.log(name + lastName);

var age = 8;
var age1 = 9;
var age2 = 10;

//console.log(age + age1 - age2);

var adult = true;
//console.log(adult);

//variables2

console.log(name + age2);
console.log(age + lastName);

var job, isMarried;

job = "doctor";
isMarried = true;

console.log(isMarried, job, age2+age1);

var secondName = prompt("What is the last Name?");
console.log(secondName);



//operators

var age = 26;
var dt = new Date();
var now = dt.getFullYear();
var birthYear = now - age *2;

console.log(birthYear);


//if/elses

var name = "John";
var age = 26;
var dt = new Date();
var dob = dt.getFullYear() - age;
var isMarried = false;

if(isMarried === true && age >= 18){
	console.log(name + ' is married');
}else{
	console.log(name + ' is not married');
};  

//boolean logic and switch

var age = 26;

if(age >= 12 && age <= 20 ){
	console.log("John is a teen!");
}else if(age >= 21){
	console.log("John is an adult");
}

var job = "solicitor";
job = prompt("What does John do?");

switch(job) {
	case 'teacher':
	console.log('John is a teacher');
	break;
	case 'driver':
	console.log('John is a driver');
	break;
	case 'cop':
	console.log('John helps to fight crime');
	break;
	default:
	console.log('John does something else');
} 

var names = ['John', 'Jane', 'Mary'];
var years = new Array(1992, 1994, 1999);


names[1] = "Michael";

var mixUp = ["John", 1992, "Jane", 1988];

mixUp.unshift("Esther");
mixUp.pop();

console.log(mixUp);

if(mixUp.indexOf('Blaise') === -1){
	console.log("No data here my dear");
	mixUp.unshift("Blaise");
}else{
	console.log("correct");
} 

/////////////////////objects

var myself = new Object();
myself.name = "Blaise";
myself.surname = "Wielk";
myself.yob = 1992;
myself.eyes = "blue";
myself.hair = "brown";
myself.isMarried = false;
myself.dogs = ["Shyshka", "Mamushka"];
myself.calculateAge = function(){
	var dt = new Date();
	this.age = dt.getFullYear() - this.yob;
}

console.log(myself.calculateAge());
console.log(myself);

//////////////////////loops



var num = 0;

for(var i = 1; i <= 10; i++){
	num++;
	//console.log(i);
}

var names = ['Blaise', 'Kasia', 'Blue', 'Reed'];

var people = 0;

for(var name of names){
	people++;
	console.log(name + " is here");
}

console.log(" There are " + people + " people");

for(var i = 0; i <= 5; i++){
	console.log(i);
	if(i === 4){
		break;
	}
}

for(var i = 5; i <= 10; i++){
	if(i === 8){
		continue;
	}
	console.log(i);
} */

var yobs = [1992, 1993, 2004, 1995, 2001];

var emptyarr = [];

for(var i = 0; i< yobs.length; i++){
	emptyarr.push(yobs[i]);
}

var dt = new Date();
for(var i = 0; i<emptyarr.length; i++){
	if(dt.getFullYear() - emptyarr[i] >= 18){
		emptyarr[i] = "Mature";
	}else{
		emptyarr[i] = "Immature";
	}
}

console.log(emptyarr);
