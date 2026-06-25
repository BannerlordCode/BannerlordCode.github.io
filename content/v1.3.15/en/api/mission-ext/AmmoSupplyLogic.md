---
title: "AmmoSupplyLogic"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AmmoSupplyLogic`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AmmoSupplyLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions.Handlers.Logic
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AmmoSupplyLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/Handlers/Logic/AmmoSupplyLogic.cs`

## Overview

`AmmoSupplyLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `AmmoSupplyLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### IsAgentEligibleForAmmoSupply
`public bool IsAgentEligibleForAmmoSupply(Agent agent)`

**Purpose:** Handles logic related to `is agent eligible for ammo supply`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new AmmoSupplyLogic());
```

## See Also

- [Complete Class Catalog](../catalog)