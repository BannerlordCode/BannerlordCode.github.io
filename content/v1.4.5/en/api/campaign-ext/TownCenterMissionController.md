---
title: "TownCenterMissionController"
description: "Auto-generated class reference for TownCenterMissionController."
---
# TownCenterMissionController

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class TownCenterMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/TownCenterMissionController.cs`

## Overview

`TownCenterMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `TownCenterMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of TownCenterMissionController from the subsystem API first
TownCenterMissionController townCenterMissionController = ...;
townCenterMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TownCenterMissionController from the subsystem API first
TownCenterMissionController townCenterMissionController = ...;
townCenterMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<TownCenterMissionController>();
```

## See Also

- [Area Index](../)