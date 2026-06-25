---
title: "SandBoxMissionSpawnHandler"
description: "Auto-generated class reference for SandBoxMissionSpawnHandler."
---
# SandBoxMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SandBoxMissionSpawnHandler.cs`

## Overview

`SandBoxMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of SandBoxMissionSpawnHandler from the subsystem API first
SandBoxMissionSpawnHandler sandBoxMissionSpawnHandler = ...;
sandBoxMissionSpawnHandler.OnBehaviorInitialize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxMissionSpawnHandler>();
```

## See Also

- [Area Index](../)