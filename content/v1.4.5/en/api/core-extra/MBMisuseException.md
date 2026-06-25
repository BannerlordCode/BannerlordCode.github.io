---
title: "MBMisuseException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBMisuseException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MBMisuseException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBMisuseException : MBException`
**Base:** `MBException`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/MBMisuseException.cs`

## Overview

`MBMisuseException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBMisuseException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBMisuseException(); } catch (MBMisuseException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)