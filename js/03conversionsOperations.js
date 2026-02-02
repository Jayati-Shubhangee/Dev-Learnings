/*let score1 = "45" 
let score2 = "45.009" 
let score3="234abc"
let score4 = "45+45" 
let score5 = undefined
let score6 = null 
console.log(typeof score1);
console.log(typeof(score2));
console.log(typeof(score3));
console.log(typeof(score4));
 let conToNumber1= Number(score1)
console.log(typeof conToNumber1);
let conToNumber2= Number(score2)
console.log(typeof conToNumber2);
let conToNumber3= Number(score3)
console.log(typeof conToNumber3);
let conToNumber4= Number(score4)
console.log(typeof conToNumber4);
let conToNumber5= Number(score5)
console.log(typeof conToNumber5);
let conToNumber6= Number(score6)
console.log(typeof conToNumber6);
console.log(conToNumber1);
console.log(conToNumber2);
console.log(conToNumber3);//have abc still showed number but printed NaN 
console.log(conToNumber4);
console.log(conToNumber5);
console.log(conToNumber6);
//if test for booolean value true - we will get 1 , if write string then NAN
//NOTES
//"45"- 45
// 45ABC=NAN
//FALSE=0*/
 /*let ischeck = 1
 let boolcon=Boolean(ischeck)
 console.log(boolcon);
//NOTE 1 WILL CONVERT TO TRUE , O TO FALSE ""= FALSE, "JOY" TRUE
//conversion to string check 
let num=123+12345
let stringcheck=String(num)
console.log(stringcheck)
console.log(typeof stringcheck)
//investigation check */

//  ** OPERATIONS IN JS *****
//basic operation performed in javascript 
//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%2)
//console.log(2**2)

//other common operations 
//string operations 
// let str1="hi"
// let str2=" joy"
// let str3= str1+str2
// console.log(str3);
// //other concatenation based operations performed in string 
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+4+5);
// console.log(1+2+7+"12");
// //NOTE U CAN CHECK DEATILED IN ECMA DOCUMENTATION FOR REASONING 
// //REST FOR SIMPLE REASONING IF STRING FIRST THEN CONCATENATION THEN IT WILL SIMPLY CONCAT ALL
// //IF FIRST NUMBERS OR STRING THEN STRING IN QUOTES THEN IT WILLL FIRST EVALUATE THEN CONCATENATE
// console.log("apple"+2+5+90.888);
// console.log(90+12.789+"hi"+809);

//operatore related to post fix and pre fix operations 
//code readability should be given priority 
//***** CODE INVESTIGATION  *****
console.log(+true);//due to operator presedence sometimes it might happpen but not a good practice ;
console.log(+false);
//automatic error occured console.log(true+);
//asssigning three or more variables same value like this 
num1=num2=num3=2+2//correct but nota goood practice
//pre fix and post fix 
let counter=2000;
counter++;//post fix 
++counter;//pre fix 
//NOTE BOTH ARE RETURNING AND PRINTING SAME VALUE IN POST FIX AND PRE FIX OPERATION BUT INTERNALLY THERE IS A LOGIC DIFFERENCE 
//POST FIX WILL FIRST PRINT THEN INCREMNENT
//PRE FIX WILL FIST INCREMENT THEN PRINT 




