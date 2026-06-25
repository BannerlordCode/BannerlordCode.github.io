---
title: "ObjectSystemException"
description: "Auto-generated class reference for ObjectSystemException."
---
# ObjectSystemException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class ObjectSystemException : Exception`
**Base:** `Exception`
**File:** `bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/ObjectSystemException.cs`

## Overview

`ObjectSystemException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `ObjectSystemException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (ObjectSystemException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)