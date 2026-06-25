---
title: "CivilianPortShipSpawnMissionLogic"
description: "Auto-generated class reference for CivilianPortShipSpawnMissionLogic."
---
# CivilianPortShipSpawnMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CivilianPortShipSpawnMissionLogic.cs`

## Overview

`CivilianPortShipSpawnMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `CivilianPortShipSpawnMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of CivilianPortShipSpawnMissionLogic from the subsystem API first
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CivilianPortShipSpawnMissionLogic from the subsystem API first
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of CivilianPortShipSpawnMissionLogic from the subsystem API first
CivilianPortShipSpawnMissionLogic civilianPortShipSpawnMissionLogic = ...;
civilianPortShipSpawnMissionLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<CivilianPortShipSpawnMissionLogic>();
```

## See Also

- [Area Index](../)