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

## DynamicallyReferencedMethod  

Let's say we have an interface to define a class.  
That interface looks something like this:  
```typescript
interface myInterface extends DynamicallyReferencedMethodBase { // We need the extended type IDictionary<Function> here to make this type work. We created a simple interface for it.    
  func1(): void;  
  func2(a: string): void;  
  func3(a: string): boolean;  
  func4(a: string, b?: number): boolean;  
}  
```  
And our main class  
```typescript  
class myClass extends DynamicallyReferencedMethodClass implements myInterface { // We need the index key added to the class, so we created a base class to do that.  
  func1(): void {  
    return;  
  };  
  func2(a: string): void {  
    return;  
  };  
  func3(a: string): boolean {  
    return true;  
  };  
  func4(a: string, b?: number): boolean {  
    return true;  
  };  
}  
```  

Now the whole reason for this type is so we can easily reference methods in `myClass` from within a different class from another place and without loading `myClass`.  

```typescript  
class myOtherClass<T extends DynamicallyReferencedMethodBase> {  
  private referenceClass: myClass;  
  constructor () {  
    this.referenceClass = new myClass();  
  }  
  callFunction<TA extends string> (...args: DynamicallyReferencedMethod<T, TA>): DynamicallyReferencedMethod<T,TA, false> {  
    return this.referenceClass[args[0]](...((args.length > 1 ? args.splice(1) : [])));  
  }  
}  
```  

So now we can call up our `myOtherClass` without loading `myClass`.  
(In this example, we call it directly, however you could have it send the method request over a wire to `myClass`)  

```typescript  
let createdClass = new myOtherClass<myInterface>();  
  
console.log(createdClass.callFunction("func3", "Ab")); // outputs false   
console.log(createdClass.callFunction("func3", "A")); // outputs true   
createdClass.callFunction("func1"); // Would do nothing - but specifically there are no errors thrown   
createdClass.callFunction("funcE"); // This function doesn't exist, so typescript throws an error   
```  