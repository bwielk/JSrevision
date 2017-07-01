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
} */

var myself = new Object();
myself.name = "Blaise";
myself.surname = "Wielk";
myself.yob = 1992;
myself.eyes = "blue";
myself.hair = "brown";
myself.isMarried = false;
myself.dogs = ["Shyshka", "Mamushka"];
myself.calculateAge = function(yob){
	var dt = new Date();
	return dt.getFullYear() - yob;
}


console.log(myself.calculateAge(myself.yob));
