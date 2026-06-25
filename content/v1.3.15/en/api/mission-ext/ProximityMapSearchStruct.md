---
title: "ProximityMapSearchStruct"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ProximityMapSearchStruct`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ProximityMapSearchStruct

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ProximityMapSearchStruct`
**Area:** mission-ext

## Overview

`ProximityMapSearchStruct` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastFoundAgent` | `public Agent LastFoundAgent { get; set; }` |

## Key Methods

### CanSearchRadius
`public static bool CanSearchRadius(float searchRadius)`

**Purpose:** Checks whether the current object can `search radius`.

### BeginSearch
`public static AgentProximityMap.ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)`

**Purpose:** Handles logic related to `begin search`.

### FindNext
`public static void FindNext(Mission mission, ref AgentProximityMap.ProximityMapSearchStruct searchStruct)`

**Purpose:** Handles logic related to `find next`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ProximityMapSearchStruct.CanSearchRadius(0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
