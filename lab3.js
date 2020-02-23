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
