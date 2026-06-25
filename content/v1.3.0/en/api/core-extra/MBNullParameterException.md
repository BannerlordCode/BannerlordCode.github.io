---
title: "MBNullParameterException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBNullParameterException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBNullParameterException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNullParameterException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBNullParameterException.cs`

## Overview

`MBNullParameterException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBNullParameterException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBNullParameterException(); } catch (MBNullParameterException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)