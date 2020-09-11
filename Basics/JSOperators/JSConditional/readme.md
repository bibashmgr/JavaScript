> # Conditional (Ternary) Operator
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.

__Syntax:__
```js
variablename = (condition) ? value1:value2 
// when the condition is true then it returns value1
// when the condition is false then i returns value2
```

for example:
```js
var age = 19;
var voteable = (age <= 18 ) ? "Not Eligible" : "Eligible" ;
// returns Eligible
```