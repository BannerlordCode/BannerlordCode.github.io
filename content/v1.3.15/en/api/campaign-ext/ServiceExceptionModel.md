---
title: "ServiceExceptionModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceExceptionModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceExceptionModel

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class ServiceExceptionModel`
**Base:** none
**File:** `TaleWorlds.Network/ServiceExceptionModel.cs`

## Overview

`ServiceExceptionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ServiceExceptionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ExceptionMessage` | `public string ExceptionMessage { get; set; }` |
| `ExceptionType` | `public string ExceptionType { get; set; }` |

## Key Methods

### ToServiceException
`public ServiceException ToServiceException()`

**Purpose:** Handles logic related to `to service exception`.

## Usage Example

```csharp
Game.Current.ReplaceModel<ServiceExceptionModel>(new MyServiceExceptionModel());
```

## See Also

- [Complete Class Catalog](../catalog)