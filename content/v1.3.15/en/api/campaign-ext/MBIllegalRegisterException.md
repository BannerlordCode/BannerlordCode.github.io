---
title: "MBIllegalRegisterException"
description: "Auto-generated class reference for MBIllegalRegisterException."
---
# MBIllegalRegisterException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBIllegalRegisterException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `TaleWorlds.ObjectSystem/MBIllegalRegisterException.cs`

## Overview

`MBIllegalRegisterException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBIllegalRegisterException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (MBIllegalRegisterException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)