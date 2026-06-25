---
title: "BattlePowerCalculationLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattlePowerCalculationLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Gets the current value of `total team power`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new BattlePowerCalculationLogic());
```

## See Also

- [Complete Class Catalog](../catalog)