---
title: "HideoutPhasedMissionController"
description: "Auto-generated class reference for HideoutPhasedMissionController."
---
# HideoutPhasedMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HideoutPhasedMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Source.Missions/HideoutPhasedMissionController.cs`

## Overview

`HideoutPhasedMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HideoutPhasedMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnMissionTick(0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HideoutPhasedMissionController from the subsystem API first
HideoutPhasedMissionController hideoutPhasedMissionController = ...;
hideoutPhasedMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HideoutPhasedMissionController>();
```

## See Also

- [Area Index](../)