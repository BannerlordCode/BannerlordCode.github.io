---
title: "MBInvalidReferenceException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBInvalidReferenceException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBInvalidReferenceException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBInvalidReferenceException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `TaleWorlds.ObjectSystem/MBInvalidReferenceException.cs`

## Overview

`MBInvalidReferenceException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBInvalidReferenceException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBInvalidReferenceException(); } catch (MBInvalidReferenceException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)