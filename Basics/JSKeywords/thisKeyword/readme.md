> # this Keyword:

The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where it is used.

- Alone, `this` refers to the global object.

```js
console.log(this);
// returns the global object i.e window object
```

- Alone,in strict mode `this` refers to global object.
```js
"use strict";
console.log(this); // returns global object
```

- In a regular function, `this` refers to the global object.

```js
function sum(){
    console.log(this); // returns global object
}
```

- In a function ,in strict mode , `this` refers to undefined.
```js
"use strict";
function myFunction(){
    console.log(this); // returns undefined
}
```

- In a method, `this` refers to owner object.

```js
const charInfo = {
    name : "Ram Bahadur",
    age  : 16 ,
    votable : function(){
        console.log(this); // returns owner object i.e charInfo
    }
}
```

- In an event, `this` refers to the element that received the event.
```js
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
// here, this indicates <button>
```


