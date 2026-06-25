---
title: "ServiceAddressManager"
description: "Auto-generated class reference for ServiceAddressManager."
---
# ServiceAddressManager

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public static class ServiceAddressManager`
**Base:** none
**File:** `TaleWorlds.ServiceDiscovery.Client/ServiceAddressManager.cs`

## Overview

`ServiceAddressManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ServiceAddressManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ServiceName` | `public string ServiceName { get; set; }` |
| `EnvironmentId` | `public string EnvironmentId { get; set; }` |
| `ResolvedAddress` | `public ServiceResolvedAddress ResolvedAddress { get; set; }` |
| `SavedAt` | `public DateTime SavedAt { get; set; }` |

## Key Methods

### Initalize
`public static void Initalize()`

**Purpose:** Prepares the resources, state, or bindings required by alize.

```csharp
// Static call; no instance required
ServiceAddressManager.Initalize();
```

### ResolveAddress
`public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)`

**Purpose:** Executes the ResolveAddress logic.

```csharp
// Static call; no instance required
ServiceAddressManager.ResolveAddress("example", serviceAddress);
```

## Usage Example

```csharp
var manager = ServiceAddressManager.Current;
```

## See Also

- [Area Index](../)