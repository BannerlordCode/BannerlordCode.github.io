<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProximityMapSearchStruct`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ProximityMapSearchStruct

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `ProximityMapSearchStruct` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `LastFoundAgent` | `public Agent LastFoundAgent { get; set; }` |


## Key Methods

### CanSearchRadius

```csharp
public static bool CanSearchRadius(float searchRadius)
```

### BeginSearch

```csharp
public static AgentProximityMap.ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)
```

### FindNext

```csharp
public static void FindNext(Mission mission, ref AgentProximityMap.ProximityMapSearchStruct searchStruct)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)