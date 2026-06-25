---
title: "MBUnknownTypeException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUnknownTypeException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBUnknownTypeException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBUnknownTypeException : MBException`
**Base:** `MBException`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBUnknownTypeException.cs`

## Overview

`MBUnknownTypeException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBUnknownTypeException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBUnknownTypeException(); } catch (MBUnknownTypeException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)