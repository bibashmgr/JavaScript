> # Variables Declaration In JavaScript:
 JavaScript had only two types of scope: **Global Scope** and **Function Scope**. Variables declared Globally (outside any function) have **Global Scope**. Variables declared Locally (inside a function) have **Function Scope**.

`var` and `let` are both used for variable declaration in javascript but the difference between them is that `var` is function scoped and `let` is block scoped.
It can be said that a variable declared with `var` is defined throughout the program as compared to `let`.For Example:
```js
// difference between var & let //

// using var keyword //
{
  var x = 2;
}
// x CAN be used here


// using let keyword //
{
  let x = 2;
}
// x CANNOT be used here


// using var keyword //
console.log(x);
var x=5;
console.log(x);
// returns undefined
// returns 5


// using let keyword //
console.log(x);
let x=5;
console.log(x);
// returns error


// redeclaration of variables //

// using var keyword //
var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

// using let keyword //
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10


// loop scope //

// using var keyword //
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10
// after execution ,it returns i = 10

// using let keyword //
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5
// after execution ,it returns i = 5
```

Variables defined with `const` behave like `let` variables, except they cannot be reassigned.
```js
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


// Block scope //

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10


// objects //

// creating a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// changing a property:
car.color = "red"; 
// returns error,you cannot reassign a already assigned const variables

// adding a property:
car.owner = "Johnson";
```