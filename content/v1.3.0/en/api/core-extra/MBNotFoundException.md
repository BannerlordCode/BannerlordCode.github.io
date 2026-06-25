---
title: "MBNotFoundException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBNotFoundException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBNotFoundException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBNotFoundException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBNotFoundException.cs`

## Overview

`MBNotFoundException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBNotFoundException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBNotFoundException(); } catch (MBNotFoundException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)