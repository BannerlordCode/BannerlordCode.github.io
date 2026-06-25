---
title: "TWException"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TWException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TWException

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TWException : ApplicationException`
**Base:** `ApplicationException`
**File:** `TaleWorlds.Library/TWException.cs`

## Overview

`TWException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `TWException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallTWException(); } catch (TWException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)