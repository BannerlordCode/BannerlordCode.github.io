---
title: "TeamQuerySystem"
description: "Auto-generated class reference for TeamQuerySystem."
---
# TeamQuerySystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamQuerySystem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TeamQuerySystem.cs`

## Overview

`TeamQuerySystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MemberCount` | `public int MemberCount { get; }` |
| `MedianPosition` | `public WorldPosition MedianPosition { get; }` |
| `AveragePosition` | `public Vec2 AveragePosition { get; }` |
| `AverageEnemyPosition` | `public Vec2 AverageEnemyPosition { get; }` |
| `MedianTargetFormation` | `public FormationQuerySystem MedianTargetFormation { get; }` |
| `MedianTargetFormationPosition` | `public WorldPosition MedianTargetFormationPosition { get; }` |
| `LeftFlankEdgePosition` | `public WorldPosition LeftFlankEdgePosition { get; }` |
| `RightFlankEdgePosition` | `public WorldPosition RightFlankEdgePosition { get; }` |
| `InfantryRatio` | `public float InfantryRatio { get; }` |
| `RangedRatio` | `public float RangedRatio { get; }` |
| `CavalryRatio` | `public float CavalryRatio { get; }` |
| `RangedCavalryRatio` | `public float RangedCavalryRatio { get; }` |
| `AllyUnitCount` | `public int AllyUnitCount { get; }` |
| `EnemyUnitCount` | `public int EnemyUnitCount { get; }` |
| `AllyInfantryRatio` | `public float AllyInfantryRatio { get; }` |
| `AllyRangedRatio` | `public float AllyRangedRatio { get; }` |
| `AllyCavalryRatio` | `public float AllyCavalryRatio { get; }` |
| `AllyRangedCavalryRatio` | `public float AllyRangedCavalryRatio { get; }` |
| `EnemyInfantryRatio` | `public float EnemyInfantryRatio { get; }` |
| `EnemyRangedRatio` | `public float EnemyRangedRatio { get; }` |
| `EnemyCavalryRatio` | `public float EnemyCavalryRatio { get; }` |
| `EnemyRangedCavalryRatio` | `public float EnemyRangedCavalryRatio { get; }` |
| `RemainingPowerRatio` | `public float RemainingPowerRatio { get; }` |
| `TeamPower` | `public float TeamPower { get; }` |
| `TotalPowerRatio` | `public float TotalPowerRatio { get; }` |
| `InsideWallsRatio` | `public float InsideWallsRatio { get; }` |
| `BattlePowerLogic` | `public IBattlePowerCalculationLogic BattlePowerLogic { get; }` |
| `CasualtyHandler` | `public CasualtyHandler CasualtyHandler { get; }` |
| `MaxUnderRangedAttackRatio` | `public float MaxUnderRangedAttackRatio { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `DeathByRangedCount` | `public int DeathByRangedCount { get; }` |
| `AllyRangedUnitCount` | `public int AllyRangedUnitCount { get; }` |
| `AllCavalryUnitCount` | `public int AllCavalryUnitCount { get; }` |
| `EnemyRangedUnitCount` | `public int EnemyRangedUnitCount { get; }` |

## Key Methods

### Expire
`public void Expire()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.ExpireAfterUnitAddRemove();
```

### RegisterDeath
`public void RegisterDeath()`

**Purpose:** Registers `death` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeath();
```

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**Purpose:** Registers `death by ranged` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.RegisterDeathByRanged();
```

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**Purpose:** Reads and returns the `local ally power` value held by the current object.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalAllyPower(target);
```

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**Purpose:** Reads and returns the `local enemy power` value held by the current object.

```csharp
// Obtain an instance of TeamQuerySystem from the subsystem API first
TeamQuerySystem teamQuerySystem = ...;
var result = teamQuerySystem.GetLocalEnemyPower(target);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TeamQuerySystem teamQuerySystem = ...;
teamQuerySystem.Expire();
```

## See Also

- [Area Index](../)