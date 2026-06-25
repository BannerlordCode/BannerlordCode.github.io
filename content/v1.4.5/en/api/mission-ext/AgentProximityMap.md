---
title: "AgentProximityMap"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentProximityMap`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentProximityMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentProximityMap`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## Overview

`AgentProximityMap` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
`public static ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)`

**Purpose:** Handles logic related to `begin search`.

### FindNext
`public static void FindNext(Mission mission, ref ProximityMapSearchStruct searchStruct)`

**Purpose:** Handles logic related to `find next`.

## Usage Example

```csharp
AgentProximityMap.CanSearchRadius(0);
```

## See Also

- [Complete Class Catalog](../catalog)