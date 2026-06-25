---
title: "MBCanNotCreatePresumedObjectException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBCanNotCreatePresumedObjectException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBCanNotCreatePresumedObjectException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBCanNotCreatePresumedObjectException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `TaleWorlds.ObjectSystem/MBCanNotCreatePresumedObjectException.cs`

## Overview

`MBCanNotCreatePresumedObjectException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBCanNotCreatePresumedObjectException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBCanNotCreatePresumedObjectException(); } catch (MBCanNotCreatePresumedObjectException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)