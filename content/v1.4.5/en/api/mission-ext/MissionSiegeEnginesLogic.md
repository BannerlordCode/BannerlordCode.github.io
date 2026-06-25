---
title: "MissionSiegeEnginesLogic"
description: "Auto-generated class reference for MissionSiegeEnginesLogic."
---
# MissionSiegeEnginesLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEnginesLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionSiegeEnginesLogic.cs`

## Overview

`MissionSiegeEnginesLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionSiegeEnginesLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeWeaponsController
`public IMissionSiegeWeaponsController GetSiegeWeaponsController(BattleSideEnum side)`

**Purpose:** **Purpose:** Reads and returns the siege weapons controller value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeEnginesLogic from the subsystem API first
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
var result = missionSiegeEnginesLogic.GetSiegeWeaponsController(side);
```

### GetMissionSiegeWeapons
`public void GetMissionSiegeWeapons(out IEnumerable<IMissionSiegeWeapon> defenderSiegeWeapons, out IEnumerable<IMissionSiegeWeapon> attackerSiegeWeapons)`

**Purpose:** **Purpose:** Reads and returns the mission siege weapons value held by the this instance.

```csharp
// Obtain an instance of MissionSiegeEnginesLogic from the subsystem API first
MissionSiegeEnginesLogic missionSiegeEnginesLogic = ...;
missionSiegeEnginesLogic.GetMissionSiegeWeapons(defenderSiegeWeapons, attackerSiegeWeapons);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSiegeEnginesLogic>();
```

## See Also

- [Area Index](../)