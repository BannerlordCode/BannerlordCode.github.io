---
title: "MBException"
description: "Auto-generated class reference for MBException."
---
# MBException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBException : ApplicationException`
**Base:** `ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`

## Overview

`MBException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (MBException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)