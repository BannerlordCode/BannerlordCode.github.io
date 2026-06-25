---
title: "BattleReinforcementsSpawnController"
description: "Auto-generated class reference for BattleReinforcementsSpawnController."
---
# BattleReinforcementsSpawnController

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleReinforcementsSpawnController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleReinforcementsSpawnController.cs`

## Overview

`BattleReinforcementsSpawnController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `BattleReinforcementsSpawnController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of BattleReinforcementsSpawnController from the subsystem API first
BattleReinforcementsSpawnController battleReinforcementsSpawnController = ...;
battleReinforcementsSpawnController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<BattleReinforcementsSpawnController>();
```

## See Also

- [Area Index](../)