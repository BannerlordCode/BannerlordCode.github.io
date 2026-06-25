---
title: "MBInvalidParameterException"
description: "Auto-generated class reference for MBInvalidParameterException."
---
# MBInvalidParameterException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBInvalidParameterException : MBException`
**Base:** `MBException`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBInvalidParameterException.cs`

## Overview

`MBInvalidParameterException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBInvalidParameterException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (MBInvalidParameterException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)