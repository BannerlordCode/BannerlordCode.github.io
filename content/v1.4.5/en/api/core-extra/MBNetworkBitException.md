---
title: "MBNetworkBitException"
description: "Auto-generated class reference for MBNetworkBitException."
---
# MBNetworkBitException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNetworkBitException : MBException`
**Base:** `MBException`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBNetworkBitException.cs`

## Overview

`MBNetworkBitException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBNetworkBitException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { /* call branch that may throw */ }
catch (MBNetworkBitException ex) { /* handle it */ }
```

## See Also

- [Area Index](../)