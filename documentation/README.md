---
home: true
heroText: Better-Tools
tagline: Simple tools lib with a bunch of useful functions
features:
- title: Typescript
  details: Build with Typescript and ready to use
- title: Minimal
  details: Minimal dependencies for size and safety
- title: Open
  details: View the code, push a merge request or add more tests
footer: Copyright © 2016-present BetterCorp (PTY) Ltd - All rights reserved
---

## About

Over time you re-use functions over and over, so why not just lump them cleanly into a lib to make your life easier? 
  
## Get started

### Install the library  
```bash
npm i --save @bettercorp/tools
```

### Import the library  
```typescript
import { Tools } from '@bettercorp/tools';
```
```javascript
const Tools = require('@bettercorp/tools').Tools;
```

### Examples  

Check if an array is actually an array  
```typescript
Tools.isArray([]); // will return true
Tools.isArray(4); // will return false
```