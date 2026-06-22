<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServiceAddressManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServiceAddressManager

**Namespace:** TaleWorlds.ServiceDiscovery.Client
**Module:** TaleWorlds.ServiceDiscovery
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `ServiceAddressManager` is a class in the `TaleWorlds.ServiceDiscovery.Client` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `ServiceName` | `public string ServiceName { get; set; }` |
| `EnvironmentId` | `public string EnvironmentId { get; set; }` |
| `ResolvedAddress` | `public ServiceResolvedAddress ResolvedAddress { get; set; }` |
| `SavedAt` | `public DateTime SavedAt { get; set; }` |


## Key Methods

### Initalize

```csharp
public static void Initalize()
```

### ResolveAddress

```csharp
public static bool ResolveAddress(string serviceDiscoveryAddress, ref string serviceAddress)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)