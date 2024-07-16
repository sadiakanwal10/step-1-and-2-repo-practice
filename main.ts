// STEP 01 
// STRONGLY TYPED SYNTAX (WHEN WE ALSO GIVE DATA TYPES TO OUR VARIABLE THEN IT IS KNOWN AS STRONG TYPING)
let a : string = "pakistan";
a = " USA ";
let b : number = 9;
let c :  boolean = true ; // also known as explicit 

// TYPE INFERENCE (WHEN WE ARE NOT GIVING DATA TYPE TO OUR VARIABLE AND TYPESCRIPT JUDGE THE TYPE BY ITSELF THEN IT IS KNOWN AS TYPE 
//  INFERENCE)

let e = "USA";
let f = 10.9 ;
f = 22;
let g = false;
g = true ;  // also known as implicit 


// step 2 (CONST VS LET)
// block scope (WHEN WE DOING SOME WORK IN CURLY BRACKETS)
//    let x = 9 ;
//    const y = 10 ;
//    var z = 11;

 if (true) {
let x = 9 
const y = 10 
var z = 11    
 }

 // console.log(x);  its gives error because var works in block scope only so we have to initialize and print it in {} these brackets.

 //  console.log(y); its give error because const also work in block scope so we have to initialize and print it in {} these brackets.

console.log(z);  // its not block scope its global scope so we can also print it out of curly brackets. it will not give an error.

//  GLOBAL Scope  (WHEN WE ALSO DOING SOME WORK OUT OF THE CURLY BRACKETS)


// difference between let  and const
// 1) both are block scope
// 2)const can not be re decleared and re assigned   VS    let can be re assigned but it cannot be re decleared 

// EXAMPLE OF CONST

// const age = 20;
//   age = 23 ; it can not be re assigned and gives an error

// const age = 12;  it cannot be re decleared and gives an error

 // EXAMPLE OF LET

//  let num = 2;
//  num = 3;   // let can be re assigned 

//   let num = 5; // its gives an error because it cannot be re decleared

// EXAMPLE OF VAR 
 var myFavouriteNum = 5;
 myFavouriteNum = 10; // it can be re assigned
 var myFavouriteNum = 10; // it can be re decleared 

 // we mostly use let in our coding
 // reason why we are not using var in our coding beacause it can be re decleared so for example we create 5 variable by same name
 // and store different values in it then it might cause confusion in our program.



