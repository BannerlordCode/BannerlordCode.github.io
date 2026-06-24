<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBUnderFlowException`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBUnderFlowException

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBUnderFlowException : MBException`
**Base:** `MBException`
**File:** `TaleWorlds.Core/MBUnderFlowException.cs`

## Overview

`MBUnderFlowException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `MBUnderFlowException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
try { CallMBUnderFlowException(); } catch (MBUnderFlowException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)