---
title: "TeamQuerySystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamQuerySystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `expire`.

### ExpireAfterUnitAddRemove
`public void ExpireAfterUnitAddRemove()`

**Purpose:** Handles logic related to `expire after unit add remove`.

### RegisterDeath
`public void RegisterDeath()`

**Purpose:** Handles logic related to `register death`.

### RegisterDeathByRanged
`public void RegisterDeathByRanged()`

**Purpose:** Handles logic related to `register death by ranged`.

### GetLocalAllyPower
`public float GetLocalAllyPower(Vec2 target)`

**Purpose:** Gets the current value of `local ally power`.

### GetLocalEnemyPower
`public float GetLocalEnemyPower(Vec2 target)`

**Purpose:** Gets the current value of `local enemy power`.

## Usage Example

```csharp
var value = new TeamQuerySystem();
value.Expire();
```

## See Also

- [Complete Class Catalog](../catalog)