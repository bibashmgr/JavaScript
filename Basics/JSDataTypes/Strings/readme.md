> # JavaScript Strings:
JavaScript strings are used for storing and manipulating text.

__Note:__

We can use the backslash (\) escape character to turn special characters into string characters.
```js
var x = "We are called \"Gorkheys\" straightout of Nepal.";
// Here, (\") is turned into (") while executing //
```

Some of the built-in properties for JavaScript strings are:

- The `length` property finds the length of the given string.
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

- The `substring()` is similar to `slice()`.The difference is that `substring()` cannot accept negative indexes.
```js
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13); // the result is Banana
var res2 = str.slice(-12, -6); // invalid output
```

- `The substr()` is similar to `slice()`.The difference is that the second parameter specifies the length of the extracted part.
```js
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); // the result is Banana

//if you omit the second parameter//
var str = "Apple, Banana, Kiwi";
var res = str.substr(7); // the result is Banana, Kiwi

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4); //the result is Kiwi
```

- The `replace()` method replaces a specified value with another value in a string.
Point to noted:
1. By default, the replace() method replaces only the first match.
2. By deafault, the repalce() method is case-sensitive.
```js
str1 = "Hello there, I am learning coding."
var str2 = str.replace("coding", "JavaScript");
// the result is Hello there, I am learning JavaScript.
```

- The `toUpperCase()` is used to convert a string into upper case.
```js
```

- The `toLowerCase()` is used to convert a string into lower case.
```js
```

- The `concat()` joins two or more strings.
```js
```

- The `trim()` method removes whitespace from both sides of a string.
```js
```

- The `charAt()` method returns the character at a specified index (position) in a string.
```js
```

- The `charCodeAt()` method returns the unicode of the character at a specified index in a string.
```js
```

- The `split()` method is used to  converte a string to an array.
```js
```







