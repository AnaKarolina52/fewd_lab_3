/*3.a) Define a function ( expression)   greet r  eturning the value  'Haydo!' .
b) Declare a variable  salutation . 
Call the function  greet  and  assign the result  of the call to the variable  salutation .*/

function greet(x) {

    var x = "Haydo!";
   
    return x;
    
};
console.log(x);

//4. Write a function  echo  that has a parameter called  sound  and return that passed parameter.

/*5. Write a function  greet  having a parameter called  name . 
Return  'Hello <parameter> !' where the parameter variable is concatenated with the ‘Hello’ and ‘!’ strings.*/

//6. Which value does x have after execution of the following code?

/*var whereIs = function(name) {
    
    return 'whereIs' + name + '?';
};
var x = whereIs ('Jack');*/

//7. Which value does x have after execution of the following code?

var hi = function(name){
    return 'Hi' + name + '!';

};

var h1 = hi('Selva');
var h2 = hi('Pola');
var x = h1 + ' ' + h2;

/*8. Write a function  shout  that takes a s  tring  and returns this string  duplicated .
 In addition, the return should be  logged . 
 The call shout('Fire') should return 'FireFire' and should log 'FireFire' for example.*/

 
//9. Which value does x have after execution of the following code?

var double = function(name){
    return name + ' and'+ name;
};

var x = double('Roy');

//10. In one word, what is a block of code that executes whenever you invoke its name?

/*11. Write a function called  doSomething  with a parameter called  name ,  return  the name parameter. 
On the next line call the function with a  value for the name  ( can be any name you like ).*/
//12. Define a function called  multiplyFive  which accepts a  number  and r  eturns  that number multiplied by 5 .
/*13. Define a function called  myFunction t  hat uses the  alert()  method   with a string value “Hello World!”  inside.  
Call  myFunction on the next line.*/
/*14. Define a variable called  isAnswerRight  and give it a  true  value. 
Use the  ternary operator  to console.log the  ‘The answer is right!’ 
 if the value is true and  ‘The answer is wrong!’  if the value is false.*/
/*15.Write a function named  tellFortune  that: takes  4 arguments : number of children, partner's name, 
geographic location, job title.
 Output your fortune to the screen like so:  "You will be a X in Y, and married to Z with N kids."  
Call that function 3 times with 3 different values for the arguments.*/