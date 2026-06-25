---
title: "HouseMissionController"
description: "Auto-generated class reference for HouseMissionController."
---
# HouseMissionController

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class HouseMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/HouseMissionController.cs`

## Overview

`HouseMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `HouseMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of HouseMissionController from the subsystem API first
HouseMissionController houseMissionController = ...;
houseMissionController.OnBehaviorInitialize();
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of HouseMissionController from the subsystem API first
HouseMissionController houseMissionController = ...;
houseMissionController.OnCreated();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of HouseMissionController from the subsystem API first
HouseMissionController houseMissionController = ...;
houseMissionController.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of HouseMissionController from the subsystem API first
HouseMissionController houseMissionController = ...;
houseMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<HouseMissionController>();
```

## See Also

- [Area Index](../)