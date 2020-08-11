> # JavaScript Strings:
JavaScript strings are used for storing and manipulating text.

__Note:__

We can use the backslash (\) escape character to turn special characters into string characters.
```js
var x = "We are called \"Gorkheys\" straightout of Nepal.";
// Here, (\") is turned into (") while executing //
```

Some of the built-in properties for JavaScript strings are:

- The `lenght` property finds the length of the given string.
```js
var stringName = "Helloooo";
var stringLength = stringName.length; // the result is 8
```

- The `indexOf()` method returns the index(position) of the first occurrence of a specified text in a string.
```js
var str = "Please tell where the 'money' is! Give me my money back";
var pos1 = str.indexOf("money"); // the result is 23
var pos2 = str.indexOf("money", 25); // the result is 45
```
The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string.
```js
var str = "Please tell where the 'money' is! Give me my money back";
var pos1 = str.lastIndexOf("money"); // the result is 45
var pos2 = str.lastindexOf("money", 25); // the result is 23
```

__Note:__
1. JavaScript counts positions from zero.
2. Both `indexOf()`, and `lastIndexOf()` return -1 if the text is not found.

- The `search()` method searches a string for a specified value and returns the position of the match.
```js
var str = "Please tell where the 'money' is! Give me my money back";
var pos = str.search("money"); // the result is 23
```

- The `slice(start, end)` extracts a part of a string and returns the extracted part in a new string.
```js
var str = "Apple, Banana, Kiwi";
var res1 = str.slice(7, 13); // the result is Banana
var res2 = str.slice(-12, -6); // the result is Banana
```





