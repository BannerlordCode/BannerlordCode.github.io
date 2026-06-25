---
title: "MBOutOfRangeException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBOutOfRangeException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBOutOfRangeException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBOutOfRangeException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `Bannerlord.Source/bin/TaleWorlds.ObjectSystem/TaleWorlds.ObjectSystem/MBOutOfRangeException.cs`

## Overview

`MBOutOfRangeException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBOutOfRangeException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBOutOfRangeException(); } catch (MBOutOfRangeException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)