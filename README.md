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

View more here: [https://tools.bsbcode.dev/](https://tools.bsbcode.dev/)