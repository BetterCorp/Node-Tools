---
lang: en-US
title: Interfaces
description: tools interface exports
footer: Copyright © 2016-present BetterCorp (PTY) Ltd - All rights reserved
---

# Interfaces

## IDictionary

Simple TS object type definition for object based arrays (like in JS) but that works with TS.

```typescript
let myObj: object = {
  a: 1,
  b: 2,
};

myObj.a; // is 1
myObj["a"]; // would show an error if not using IDictionary since the object does not have an index definition

let myObj: IDictionary<number> = {
  a: 1,
  b: 2,
};
// So by using IDictionary, we can reference items by their index without the warnings/errors
myObj["a"];
```

## ParamsFromString  

Use string interpolation like this, but dynamically in a string.  
```typescript  
const var1 = "abc";
console.log(`var is: ${var1}`);
```  

```typescript  
public format(message: string, meta: object) {  
  // do blah here to format  
}  
format("this var: {var1}", {  
  var1: "abc"  
});  
```  

```typescript  
import { ParamsFromString } from '@bettercorp/tools/lib/Interfaces';  
function format<T extends string>(message: T, meta: Record<ParamsFromString<T>, string>) {  
  // do blah here to format  
}  
format("this var: {var1}", { var1: "abc" });  
format("this var: {var1}", { bad: "abc" }); // type error  

// ref: https://stackoverflow.com/a/73394054/8083582  
```   