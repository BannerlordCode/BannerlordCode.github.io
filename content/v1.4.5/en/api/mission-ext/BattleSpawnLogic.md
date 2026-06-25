---
title: "BattleSpawnLogic"
description: "Auto-generated class reference for BattleSpawnLogic."
---
# BattleSpawnLogic

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/BattleSpawnLogic.cs`

## Overview

`BattleSpawnLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `BattleSpawnLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of BattleSpawnLogic from the subsystem API first
BattleSpawnLogic battleSpawnLogic = ...;
battleSpawnLogic.OnPreMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<BattleSpawnLogic>();
```

## See Also

- [Area Index](../)