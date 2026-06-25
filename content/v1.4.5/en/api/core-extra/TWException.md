---
title: "TWException"
description: "Auto-generated class reference for TWException."
---
# TWException

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWException : ApplicationException`
**Base:** `ApplicationException`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TWException.cs`

## Overview

`TWException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `TWException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (TWException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)