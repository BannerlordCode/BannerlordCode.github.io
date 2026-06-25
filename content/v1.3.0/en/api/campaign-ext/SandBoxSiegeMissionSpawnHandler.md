---
title: "SandBoxSiegeMissionSpawnHandler"
description: "Auto-generated class reference for SandBoxSiegeMissionSpawnHandler."
---
# SandBoxSiegeMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSiegeMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `SandBox/Missions/MissionLogics/SandBoxSiegeMissionSpawnHandler.cs`

## Overview

`SandBoxSiegeMissionSpawnHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `SandBoxSiegeMissionSpawnHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SandBoxSiegeMissionSpawnHandler from the subsystem API first
SandBoxSiegeMissionSpawnHandler sandBoxSiegeMissionSpawnHandler = ...;
sandBoxSiegeMissionSpawnHandler.AfterStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<SandBoxSiegeMissionSpawnHandler>();
```

## See Also

- [Area Index](../)