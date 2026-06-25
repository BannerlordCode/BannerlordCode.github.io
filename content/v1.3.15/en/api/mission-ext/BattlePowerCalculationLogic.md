---
title: "BattlePowerCalculationLogic"
description: "Auto-generated class reference for BattlePowerCalculationLogic."
---
# BattlePowerCalculationLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattlePowerCalculationLogic : MissionLogic, IBattlePowerCalculationLogic, IMissionBehavior`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/BattlePowerCalculationLogic.cs`

## Overview

`BattlePowerCalculationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattlePowerCalculationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTeamPowersCalculated` | `public bool IsTeamPowersCalculated { get; }` |

## Key Methods

### GetTotalTeamPower
`public float GetTotalTeamPower(Team team)`

**Purpose:** **Purpose:** Reads and returns the total team power value held by the this instance.

```csharp
// Obtain an instance of BattlePowerCalculationLogic from the subsystem API first
BattlePowerCalculationLogic battlePowerCalculationLogic = ...;
var result = battlePowerCalculationLogic.GetTotalTeamPower(team);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattlePowerCalculationLogic>();
```

## See Also

- [Area Index](../)