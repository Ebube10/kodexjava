// ********************** Values and Variables ***********

console.log('Hello world!');
let firstname = 'Guy';
console.log(firstname);


// ********************* Vriables Naming Conventions *************
let obinna4 = 'obinna';
let _charles = 'charles';
let $chidubem = 'chidubem';
 
console.log(obinna4, _charles, $chidubem);

// ******************** Data types **********************

// javascript  has a data types 

// 1 . strings
// 2. number
// 3. bigint
// 4. boolean
// 5. udefined
// 6. null
// 7. symbol
// 8. object

// booleans = true or false values
var javascripteIsEasy = true;
var lifeIsHard = false;

console.log(typeof lifeIsHard);

// numbers
let chekwube = 30;
let kingsley = 29.8;

console.log(typeof chekwube);
console.log(typeof kingsley);

// strings
let message = 'welcome to france';
console.log(typeof message);

let guy = '34';
console.log(typeof guy);

let donald = '24'+2;
console.log(donald, typeof donald);

// undefined

let year;
console.log(year, typeof year);

//  an empty values has nothing to do with undefined
let car = '';
console.log(typeof car);

// when adding a number and a string, Javascript will treat the number as a string 
let vehicle = 16 + 4 + 'volvo';
console.log(vehicle, typeof vehicle);

// null
// in javascript null is nothing. it is supposed to be something that doesnt exist
// the data type of null of object 

let money = null;
console.log(money, typeof money);

// difference between udefined and null 
// typeof undefined is undefined
// type of null is object

// similarities
console.log(null ===undefined);