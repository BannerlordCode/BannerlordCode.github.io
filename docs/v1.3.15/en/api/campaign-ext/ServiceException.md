<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceException

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ServiceException : Exception`
**Base:** `Exception`
**File:** `TaleWorlds.Network/ServiceException.cs`

## Overview

`ServiceException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `ServiceException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ExceptionMessage` | `public string ExceptionMessage { get; set; }` |
| `ExceptionType` | `public string ExceptionType { get; set; }` |

## Usage Example

```csharp
try { CallServiceException(); } catch (ServiceException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)