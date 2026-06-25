---
title: "MBMethodNameNotFoundException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMethodNameNotFoundException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMethodNameNotFoundException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBMethodNameNotFoundException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBMethodNameNotFoundException.cs`

## Overview

`MBMethodNameNotFoundException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBMethodNameNotFoundException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBMethodNameNotFoundException(); } catch (MBMethodNameNotFoundException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)