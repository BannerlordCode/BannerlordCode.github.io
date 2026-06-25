---
title: "SandBoxBattleMissionSpawnHandler"
description: "Auto-generated class reference for SandBoxBattleMissionSpawnHandler."
---
# SandBoxBattleMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxBattleMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxBattleMissionSpawnHandler.cs`

## Overview

`SandBoxBattleMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxBattleMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SandBoxBattleMissionSpawnHandler from the subsystem API first
SandBoxBattleMissionSpawnHandler sandBoxBattleMissionSpawnHandler = ...;
sandBoxBattleMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxBattleMissionSpawnHandler>();
```

## See Also

- [Area Index](../)