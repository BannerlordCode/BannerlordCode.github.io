---
title: "SiegeQuerySystem"
description: "Auto-generated class reference for SiegeQuerySystem."
---
# SiegeQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeQuerySystem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`

## Overview

`SiegeQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
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

**Purpose:** **Purpose:** Executes the Expire logic.

```csharp
// Obtain an instance of SiegeQuerySystem from the subsystem API first
SiegeQuerySystem siegeQuerySystem = ...;
siegeQuerySystem.Expire();
```

### DeterminePositionAssociatedSide
`public int DeterminePositionAssociatedSide(Vec3 position)`

**Purpose:** **Purpose:** Determines the result of position associated side based on the current state.

```csharp
// Obtain an instance of SiegeQuerySystem from the subsystem API first
SiegeQuerySystem siegeQuerySystem = ...;
var result = siegeQuerySystem.DeterminePositionAssociatedSide(position);
```

### AreSidesRelated
`public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)`

**Purpose:** **Purpose:** Executes the AreSidesRelated logic.

```csharp
// Static call; no instance required
SiegeQuerySystem.AreSidesRelated(side, 0);
```

### SideDistance
`public static int SideDistance(int connectedSides, int side)`

**Purpose:** **Purpose:** Executes the SideDistance logic.

```csharp
// Static call; no instance required
SiegeQuerySystem.SideDistance(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeQuerySystem siegeQuerySystem = ...;
siegeQuerySystem.Expire();
```

## See Also

- [Area Index](../)