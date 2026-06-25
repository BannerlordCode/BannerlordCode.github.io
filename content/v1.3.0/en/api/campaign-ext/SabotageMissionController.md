---
title: "SabotageMissionController"
description: "Auto-generated class reference for SabotageMissionController."
---
# SabotageMissionController

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class SabotageMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/SabotageMissionController.cs`

## Overview

`SabotageMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SabotageMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SabotageMissionController from the subsystem API first
SabotageMissionController sabotageMissionController = ...;
sabotageMissionController.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of SabotageMissionController from the subsystem API first
SabotageMissionController sabotageMissionController = ...;
sabotageMissionController.OnMissionTick(0);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SabotageMissionController>();
```

## See Also

- [Area Index](../)