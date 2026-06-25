---
title: "ServiceAddress"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceAddress`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceAddress

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public class ServiceAddress`
**Area:** campaign-ext

## Overview

`ServiceAddress` lives in `TaleWorlds.ServiceDiscovery.Client`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
ServiceAddress.IsServiceAddress("example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
