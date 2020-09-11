> # Comparison Operators
Comparison operators are used in logical statements to determine equality or difference between variables or values.

- `==` (equal to) operator:
```js
var x = 5;
console.log(x==5); // return true
console.log(x=="5"); // returns true
console.log(x==8); // returns false
```
- `===`	(equal value and equal type) operator:
```js
var x = 5;
console.log(x==5); // return true
console.log(x=="5"); // returns false
```
- `!=`	(not equal) operator:
```js
var x = 5;
console.log(x!=5); // return false
console.log(x!="5"); // returns false
console.log(x!=8); // returns true
```
- `!==`	(not equal value or not equal type) operator:
```js
var x = 5;
console.log(x!==5); // return false
console.log(x!=="5"); // returns true
console.log(x!==8); // returns true
```
- `>`	(greater than) operator:
```js
var x = 5;
console.log(x>5); // return false
console.log(x>8); // returns false
```
- `<`	(less than) operator:
```js
var x = 5;
console.log(x<5); // return false
console.log(x<8); // returns true
```
- `>=`	(greater than or equal to) operator:
```js
var x = 5;
console.log(x>=5); // return true
console.log(x>=8); // returns false
```
- `<=`	(less than or equal to) operator:
```js
var x = 5;
console.log(x<=5); // return true
console.log(x<=8); // returns true
```

__NOTE:__
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.