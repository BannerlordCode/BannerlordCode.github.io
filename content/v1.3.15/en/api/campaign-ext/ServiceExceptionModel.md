---
title: "ServiceExceptionModel"
description: "Auto-generated class reference for ServiceExceptionModel."
---
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

**Purpose:** Executes the ToServiceException logic.

```csharp
// Obtain an instance of ServiceExceptionModel from the subsystem API first
ServiceExceptionModel serviceExceptionModel = ...;
var result = serviceExceptionModel.ToServiceException();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<ServiceExceptionModel>(new MyServiceExceptionModel());
```

## See Also

- [Area Index](../)