---
title: "TWXmlLoadException"
description: "Auto-generated class reference for TWXmlLoadException."
---
# TWXmlLoadException

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWXmlLoadException : TWException`
**Base:** `TWException`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/TWXmlLoadException.cs`

## Overview

`TWXmlLoadException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `TWXmlLoadException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (TWXmlLoadException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)