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
