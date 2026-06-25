---
title: "MissionCaravanOrVillagerTacticsHandler"
description: "Auto-generated class reference for MissionCaravanOrVillagerTacticsHandler."
---
# MissionCaravanOrVillagerTacticsHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionCaravanOrVillagerTacticsHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionCaravanOrVillagerTacticsHandler.cs`

## Overview

`MissionCaravanOrVillagerTacticsHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionCaravanOrVillagerTacticsHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionCaravanOrVillagerTacticsHandler from the subsystem API first
MissionCaravanOrVillagerTacticsHandler missionCaravanOrVillagerTacticsHandler = ...;
missionCaravanOrVillagerTacticsHandler.EarlyStart();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionCaravanOrVillagerTacticsHandler>();
```

## See Also

- [Area Index](../)