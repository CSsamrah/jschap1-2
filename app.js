// practice exercise 1.3
alert("saying hi from a different file");
console.log("hello my name is samrah");

// Practice Exercise 1.4

 let a = 10;             //setting the value of variable a to 10
 console.log(a);         //printing the value of a

 /* i am writing these multi line cooments to understand the concept
   of types of comments in javascript*/ 

prompt("enter your name");
console.log(Math.random());
console.log(Math.floor(Math.random()));
console.log(Math.random()*100);

//Chapter Project
console.log("samrah fatima") ;
let b= "samrah fatima";
console.log(b);
/*multi 
line 
comment*/ 

//Practice Exercise 2.1
let str1 = 'Laurence'; //string
let str2 = "Svekis";   //string
let val1 = undefined;  //undefined
let val2 = null;       //object
let myNum = 1000;      //number
console.log("str1",typeof str1);
console.log("str2",typeof str2);
console.log("val1",typeof val1);
console.log("val2",typeof val2);
console.log("myNum",typeof myNum);

//Practice Exercise 2.2
let myName="samrah";
let age=19;
let ifIcanCode=true;
console.log(`Hello, my name is ${myName} , i am ${age} years old and i can code JavaScript:${ifIcanCode}.`);

//Practice Exercise 2.3
  a=prompt("Enter the value of side a of a right angled triangle:");
  b=prompt("Enter the value of side b of a right angled triangle:");
 c=a**2+b**2;
 console.log(Math.sqrt(c));

 //Practice exercise 2.4
 a=5;
 b=9;
 c=4;
 a+=b;
 a/=c;
 c%=b;
 console.log(a);
 console.log(b);
 console.log(c);

 //chapter project
 //Miles to kilometers
 let miles=400;
 let kilometers=miles*1.60934;
 console.log(`The distance of ${kilometers} kms is equal to ${miles} miles`);
 
//BMI Calculator
let heightInInches=62;
let weightInPounds=138.891;
let heightInCenti=heightInInches*2.54;
let weightInKilos=weightInPounds/2.205;
console.log(`The height in centi-meters is ${heightInCenti}cm and weight in kilos is ${weightInKilos}kg`);
let bmi=(weightInKilos/(heightInCenti**2)*10000);
console.log(bmi);