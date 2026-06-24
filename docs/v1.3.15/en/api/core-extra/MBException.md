<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBException : ApplicationException`
**Base:** `ApplicationException`
**File:** `TaleWorlds.Core/MBException.cs`

## Overview

`MBException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBException(); } catch (MBException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)