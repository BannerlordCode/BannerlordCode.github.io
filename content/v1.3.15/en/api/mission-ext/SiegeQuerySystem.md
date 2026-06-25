---
title: "SiegeQuerySystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeQuerySystem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`

## Overview

`SiegeQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftRegionMemberCount` | `public int LeftRegionMemberCount { get; }` |
| `LeftCloseAttackerCount` | `public int LeftCloseAttackerCount { get; }` |
| `MiddleRegionMemberCount` | `public int MiddleRegionMemberCount { get; }` |
| `MiddleCloseAttackerCount` | `public int MiddleCloseAttackerCount { get; }` |
| `RightRegionMemberCount` | `public int RightRegionMemberCount { get; }` |
| `RightCloseAttackerCount` | `public int RightCloseAttackerCount { get; }` |
| `InsideAttackerCount` | `public int InsideAttackerCount { get; }` |
| `LeftDefenderCount` | `public int LeftDefenderCount { get; }` |
| `MiddleDefenderCount` | `public int MiddleDefenderCount { get; }` |
| `RightDefenderCount` | `public int RightDefenderCount { get; }` |
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin { get; }` |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin { get; }` |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin { get; }` |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin { get; }` |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin { get; }` |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin { get; }` |
| `LeftToMidDir` | `public Vec2 LeftToMidDir { get; }` |
| `MidToLeftDir` | `public Vec2 MidToLeftDir { get; }` |
| `MidToRightDir` | `public Vec2 MidToRightDir { get; }` |
| `RightToMidDir` | `public Vec2 RightToMidDir { get; }` |

## Key Methods

### Expire
`public void Expire()`

**Purpose:** Handles logic related to `expire`.

### DeterminePositionAssociatedSide
`public int DeterminePositionAssociatedSide(Vec3 position)`

**Purpose:** Handles logic related to `determine position associated side`.

### AreSidesRelated
`public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)`

**Purpose:** Handles logic related to `are sides related`.

### SideDistance
`public static int SideDistance(int connectedSides, int side)`

**Purpose:** Handles logic related to `side distance`.

## Usage Example

```csharp
var value = new SiegeQuerySystem();
value.Expire();
```

## See Also

- [Complete Class Catalog](../catalog)