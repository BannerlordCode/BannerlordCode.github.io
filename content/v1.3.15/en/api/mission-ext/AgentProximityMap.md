---
title: "AgentProximityMap"
description: "Auto-generated class reference for AgentProximityMap."
---
# AgentProximityMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentProximityMap`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/AgentProximityMap.cs`

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

**Purpose:** Checks whether the current object meets the preconditions for `search radius`.

```csharp
// Static call; no instance required
AgentProximityMap.CanSearchRadius(0);
```

### BeginSearch
`public static AgentProximityMap.ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
AgentProximityMap.BeginSearch(mission, searchPos, 0, false);
```

### FindNext
`public static void FindNext(Mission mission, ref AgentProximityMap.ProximityMapSearchStruct searchStruct)`

**Purpose:** Looks up the matching `next` in the current collection or scope.

```csharp
// Static call; no instance required
AgentProximityMap.FindNext(mission, searchStruct);
```

## Usage Example

```csharp
AgentProximityMap.CanSearchRadius(0);
```

## See Also

- [Area Index](../)