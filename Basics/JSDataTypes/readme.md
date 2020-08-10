> # Data Types In JavaScript:

JavaScript variables can hold many data types.JavaScript variables are classified into following two types:

1. __Primitive Data types:__
    
    A primitive data value is a single simple data value with no additional properties and methods.They are:
    - string
    - number
    - boolean
    - undefined

2. __Complex Data types:__
    
    Complex data types are:
    - function
    - object(objects, arrays, null)

> ## Javascript Strings:
A string is a series of characters.They are written with single or double quotes.

For example:
```js
var fName = "Hari Maya";   // Using double quotes
var sName = 'Ram Bahadur';   // Using single quotes
var msgOne = "You can call me 'JD' "; // Single quotes inside double quotes
var msgTwo = 'Ypu can call me "JD" '; // double quotes inside single quotes
```

> ## JavaScript Numbers:
JavaScript has only one type of numbers.Numbers can be written with, or without decimals.Extra large or extra small numbers can be written with scientific (exponential) notation.

For example:
```js
var x1 = 21.00;     // with decimals
var x2 = 21;        // without decimals
var y = 2124e5;      // 212400000
var z = 2124e-5;     // 0.02124
```

> ## JavaScript Booleans:
Booleans can only have two values: true or false.

For example:
```js
var x = 5;
var y = 5;
var z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
```

> ## JavaScript Undefined:
In JavaScript, a variable without a value, has the value undefined and its type is also undefined.

For example:
```js
var firstName;    // Value is undefined, type is undefined
```

> ## JavaScript Null:
In JavaScript null has no value and its data type is an object.
For example:
```js
var firstName = null;    // Value is null, type is object
```