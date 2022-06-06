---
lang: en-US
title: VueJS
description: Using tools with VueJS
footer: Copyright © 2016-present BetterCorp (PTY) Ltd - All rights reserved
---

# VueJS 

## Import the library

```typescript
import { Vue } from '@bettercorp/tools';
Vue.use(Tools);
```

## Use the library

Inside your vue templates, you can use the global `$tools` reference.  
```typescript
this.$tools.isArray([]); // would return true
```
