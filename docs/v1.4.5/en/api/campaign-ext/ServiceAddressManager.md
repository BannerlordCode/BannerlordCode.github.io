<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceAddressManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ServiceAddressManager

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** `public static class ServiceAddressManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.ServiceDiscovery.Client/TaleWorlds.ServiceDiscovery.Client/ServiceAddressManager.cs`

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

**Purpose:** Initializes the state, resources, or bindings for `alize`.

### ResolveAddress
`public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)`

**Purpose:** Handles logic related to `resolve address`.

## Usage Example

```csharp
var manager = ServiceAddressManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)