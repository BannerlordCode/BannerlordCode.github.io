---
title: "MBTooManyRegisteredTypesException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBTooManyRegisteredTypesException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBTooManyRegisteredTypesException

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBTooManyRegisteredTypesException : ObjectSystemException`
**Base:** `ObjectSystemException`
**File:** `TaleWorlds.ObjectSystem/MBTooManyRegisteredTypesException.cs`

## Overview

`MBTooManyRegisteredTypesException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBTooManyRegisteredTypesException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBTooManyRegisteredTypesException(); } catch (MBTooManyRegisteredTypesException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)