/**************************
Varibles and data types
*/


var firstName = 'Julia';
console.log(firstName);

var lastName = 'Cocco';
var age = 32;

var fullAge = true;
console.log(fullAge);

var job = 'Looking for a job';
console.log(job);

// varibles naming rules
var _3years = 3;
var johnMark ='John and Mark';
var if =23;


/**************************
Varibles mutation and type coercion
*/

var firstName = 'Julia';
var age = 32;

// Type coercion
console.log( firstName + ' ' +age);

var job, isMarried;
job = "looking for a job";
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job  + '. Is she married? ' + isMarried);

// Variable mutation

age = 'thirty two';
job = 'still looking';

alert(firstName + ' is a ' + age + ' years old ' + job  + '. Is she married? ' + isMarried);

var lastName = prompt ('What is her last name?');
console.log(firstName + ' ' + lastName);
