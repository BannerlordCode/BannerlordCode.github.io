---
title: "IndoorMissionController"
description: "Auto-generated class reference for IndoorMissionController."
---
# IndoorMissionController

> ⚠ 本页为自动生成的类参考，示例未经源码核对，勿直接引用其中的 API。

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class IndoorMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/IndoorMissionController.cs`

## Overview

`IndoorMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `IndoorMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of IndoorMissionController from the subsystem API first
IndoorMissionController indoorMissionController = ...;
indoorMissionController.OnCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of IndoorMissionController from the subsystem API first
IndoorMissionController indoorMissionController = ...;
indoorMissionController.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of IndoorMissionController from the subsystem API first
IndoorMissionController indoorMissionController = ...;
indoorMissionController.AfterStart();
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<IndoorMissionController>();
```

## See Also

- [Area Index](../)