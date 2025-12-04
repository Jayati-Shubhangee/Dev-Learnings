//basic fundamnetals
/*console.log("hello world!");
console.log(typeof"joy");
console.log(typeof 45);
console.log(typeof 30==='number');
console.log(typeof (10>=10)==='boolean');
console.log(typeof true);
console.log( myvar=10);
console.log( mynum=10);
console.log( myvar===mynum );
console.log(10+'apple');
console.log(typeof 10+'apple');
console.log(myvar+'joy');
console.log(typeof myvar+'joy' );
console.log(typeof (10 + 'joy'));*/
//strings chapter
//const mys='maths english';//we used const and not let becaue we dont require to update this variable value now
/*console.log(mys.length);
console.log('appleorange'.length);
console.log(mys.charAt(5));
console.log(mys.indexOf('og'));
//split method
console.log(mys.split('t'));
console.log(mys.split(''));
console.log("apple,banana,grapes".split(','));//comma as separator
console.log("apple banana grapes".split(' '));//spaces as separator*/


//chapter number and number methods
/*const mynum=42;//integer number whole number
console.log(mynum);
const myflo1= 42.000;
const myflo2= 42.001;
console.log(myflo1);
const mystr= "42";
console.log(mystr);
console.log(mynum===myflo2);
console.log(mynum===myflo1);
console.log(mynum===mystr);
console.log(mystr+3);
console.log(Number(mystr)+3);
console.log(Number(mystr));
console.log(Number(mystr)===mynum);
console.log(Number('apple'));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));
console.log(typeof Number(mystr)==='number');*/

const mynum=42;//integer number whole number
const myflo1= 42.000;
const myflo2= 42.001;
const mystr= "42";
const mystr2= "42.1234abcd";
console.log(Number.isInteger(mynum));
console.log(Number.isInteger(myflo1));
console.log(Number.isInteger(mystr));
//Number.isInteger()method determines whether the passed value is inteher 
//Number.parseFloat() parses an argument and returns a floating point number 
// If a number cannot be parsed from the argument , it returns NaN.
/*console.log(Number.parseFloat(mynum));
console.log(Number.parseFloat(myflo1));
console.log(Number.parseFloat(myflo2));
console.log(Number.parseFloat(mystr));
console.log(Number.parseFloat(mystr2));*///removes extra a b c afterwards
//toFixed() method  formats a number according to how many decimal 
//points u provide as the prameter
console.log(myflo1.toFixed(3));
console.log(myflo2.toFixed(1));
console.log(myflo2.toFixed(4));
//console.log(mystr2.toFixed(1));//giving error 
console.log(mynum.toFixed(2));
console.log(Number.parseFloat(mystr).toFixed(3));
console.log(Number.parseFloat(mystr2).toFixed(3));
//return type of toFixed() method is string type 
//parseInt()
console.log(Number.parseInt(mystr));
console.log(Number.parseInt(mystr2));
