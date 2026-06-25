---
title: "EavesdroppingMissionLogic"
description: "Auto-generated class reference for EavesdroppingMissionLogic."
---
# EavesdroppingMissionLogic

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class EavesdroppingMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/EavesdroppingMissionLogic.cs`

## Overview

`EavesdroppingMissionLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `EavesdroppingMissionLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of EavesdroppingMissionLogic from the subsystem API first
EavesdroppingMissionLogic eavesdroppingMissionLogic = ...;
eavesdroppingMissionLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of EavesdroppingMissionLogic from the subsystem API first
EavesdroppingMissionLogic eavesdroppingMissionLogic = ...;
eavesdroppingMissionLogic.OnMissionTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<EavesdroppingMissionLogic>();
```

## See Also

- [Area Index](../)