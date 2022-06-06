---
lang: en-US
title: NodeTools
description: NodeJS Specific tools
footer: Copyright © 2016-present BetterCorp (PTY) Ltd - All rights reserved
---

# NodeTools

## Import the library

```typescript
import { NodeTools } from "@bettercorp/tools/lib/NodeTools";
```

## Methods

### getFileHash

Gets the filehash for a file / file stream (ReadStream).

```typescript
await getFileHash("./myFile.txt"); // async - returns a basic hash of the input in HEX.
```
