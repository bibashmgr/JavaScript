 > # JavaScript Numbers:

JavaScript has only one type of number.
```js
var w = 3.14;    // with decimals
var x = 3;       // without decimals


// Extra large or extra small numbers can be written with scientific (exponent) notation //

var y = 123e5;    // 12300000
var z = 123e-5;   // 0.00123\


// a common mistake //

var x = 10;
var y = 20;
var a = "The result is: " + x + y; // returns 1020
var b = "The result is: " + (x+y); // returns 30


// javascript convert string to numbers in numeric operations //

var x = "100";
var y = "10";
var z = x / y;       // z will be 10
```
> ### NaN (Not a Number)
NaN is a JavaScript reserved word indicating that a number is not a legal number.

```js
// NaN is a number //

typeof NaN; // returns "number"
```

The isNaN() is used to find out if a value is a number.
```js
var x = 100 / "Apple";
isNaN(x); // returns true
```
> ### Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
```js
// Infinity is a number //

typeOf(Infinity); // returns number
```