---
title: "SimpleMountedPlayerMissionController"
description: "Auto-generated class reference for SimpleMountedPlayerMissionController."
---
# SimpleMountedPlayerMissionController

**Namespace:** TaleWorlds.MountAndBlade.Source.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SimpleMountedPlayerMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/Source/Missions/SimpleMountedPlayerMissionController.cs`

## Overview

`SimpleMountedPlayerMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SimpleMountedPlayerMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of SimpleMountedPlayerMissionController from the subsystem API first
SimpleMountedPlayerMissionController simpleMountedPlayerMissionController = ...;
simpleMountedPlayerMissionController.AfterStart();
```

### MissionEnded
`public override bool MissionEnded(ref MissionResult missionResult)`

**Purpose:** **Purpose:** Executes the MissionEnded logic.

```csharp
// Obtain an instance of SimpleMountedPlayerMissionController from the subsystem API first
SimpleMountedPlayerMissionController simpleMountedPlayerMissionController = ...;
var result = simpleMountedPlayerMissionController.MissionEnded(missionResult);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SimpleMountedPlayerMissionController>();
```

## See Also

- [Area Index](../)