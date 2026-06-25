---
title: "AmmoSupplyLogic"
description: "Auto-generated class reference for AmmoSupplyLogic."
---
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic/AmmoSupplyLogic.cs`

## Overview

`AmmoSupplyLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AmmoSupplyLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsAgentEligibleForAmmoSupply
`public bool IsAgentEligibleForAmmoSupply(Agent agent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the agent eligible for ammo supply state or condition.

```csharp
// Obtain an instance of AmmoSupplyLogic from the subsystem API first
AmmoSupplyLogic ammoSupplyLogic = ...;
var result = ammoSupplyLogic.IsAgentEligibleForAmmoSupply(agent);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of AmmoSupplyLogic from the subsystem API first
AmmoSupplyLogic ammoSupplyLogic = ...;
ammoSupplyLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<AmmoSupplyLogic>();
```

## See Also

- [Area Index](../)