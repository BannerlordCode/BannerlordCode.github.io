---
title: "MBNotNullParameterException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBNotNullParameterException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBNotNullParameterException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNotNullParameterException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBNotNullParameterException.cs`

## Overview

`MBNotNullParameterException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBNotNullParameterException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBNotNullParameterException(); } catch (MBNotNullParameterException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)