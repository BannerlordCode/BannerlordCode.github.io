---
title: "WorkshopMissionHandler"
description: "Auto-generated class reference for WorkshopMissionHandler."
---
# WorkshopMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/WorkshopMissionHandler.cs`

## Overview

`WorkshopMissionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `WorkshopMissionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of WorkshopMissionHandler from the subsystem API first
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WorkshopMissionHandler from the subsystem API first
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.EarlyStart();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of WorkshopMissionHandler from the subsystem API first
WorkshopMissionHandler workshopMissionHandler = ...;
workshopMissionHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<WorkshopMissionHandler>();
```

## See Also

- [Area Index](../)