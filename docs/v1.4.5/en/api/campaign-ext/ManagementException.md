<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagementException`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementException

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementException : SystemException`
**Base:** `SystemException`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementException.cs`

## Overview

`ManagementException` is an exception type used to signal a specific error condition; callers decide whether to catch it, translate it, or let it bubble up.

## Mental Model

Treat `ManagementException` as a Exception-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ErrorCode` | `public ManagementStatus ErrorCode { get; }` |
| `ErrorInformation` | `public ManagementBaseObject ErrorInformation { get; }` |

## Key Methods

### GetObjectData
`public override void GetObjectData(SerializationInfo info, StreamingContext context)`

**Purpose:** Gets the current value of `object data`.

## Usage Example

```csharp
try { CallManagementException(); } catch (ManagementException exception) { Handle(exception); }
```

## See Also

- [Complete Class Catalog](../catalog)