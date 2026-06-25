---
title: "ServiceAddress"
description: "Auto-generated class reference for ServiceAddress."
---
# ServiceAddress

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public class ServiceAddress`
**Base:** none
**File:** `TaleWorlds.ServiceDiscovery.Client/ServiceAddress.cs`

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

**Purpose:** **Purpose:** Determines whether the this instance is in the service address state or condition.

```csharp
// Static call; no instance required
ServiceAddress.IsServiceAddress("example");
```

### TryGetAddressName
`public static bool TryGetAddressName(string serviceAddress, out string addressName)`

**Purpose:** **Purpose:** Attempts to retrieve get address name, usually returning success through an out parameter.

```csharp
// Static call; no instance required
ServiceAddress.TryGetAddressName("example", addressName);
```

## Usage Example

```csharp
ServiceAddress.IsServiceAddress("example");
```

## See Also

- [Area Index](../)