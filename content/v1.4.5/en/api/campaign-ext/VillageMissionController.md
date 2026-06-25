---
title: "VillageMissionController"
description: "Auto-generated class reference for VillageMissionController."
---
# VillageMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class VillageMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/VillageMissionController.cs`

## Overview

`VillageMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `VillageMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the `created` event is raised.

```csharp
// Obtain an instance of VillageMissionController from the subsystem API first
VillageMissionController villageMissionController = ...;
villageMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of VillageMissionController from the subsystem API first
VillageMissionController villageMissionController = ...;
villageMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<VillageMissionController>();
```

## See Also

- [Area Index](../)