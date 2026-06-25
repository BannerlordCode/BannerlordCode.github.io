---
title: "ServiceAddress"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceAddress`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ServiceAddress

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public class ServiceAddress`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ServiceDiscovery.Client/TaleWorlds.ServiceDiscovery.Client/ServiceAddress.cs`

## Overview

`ServiceAddress` lives in `TaleWorlds.ServiceDiscovery.Client` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.ServiceDiscovery.Client` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Service` | `public string Service { get; }` |
| `ResolvedAddresses` | `public ServiceResolvedAddress ResolvedAddresses { get; }` |

## Key Methods

### IsServiceAddress
`public static bool IsServiceAddress(string address)`

**Purpose:** Handles logic related to `is service address`.

### TryGetAddressName
`public static bool TryGetAddressName(string serviceAddress, out string addressName)`

**Purpose:** Attempts to get `get address name`, usually returning the result in an out parameter.

## Usage Example

```csharp
ServiceAddress.IsServiceAddress("example");
```

## See Also

- [Complete Class Catalog](../catalog)