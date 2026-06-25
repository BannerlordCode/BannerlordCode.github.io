---
title: "MissionSingleplayerViewHandler"
description: "Auto-generated class reference for MissionSingleplayerViewHandler."
---
# MissionSingleplayerViewHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSingleplayerViewHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSingleplayerViewHandler.cs`

## Overview

`MissionSingleplayerViewHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionSingleplayerViewHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionSingleplayerViewHandler from the subsystem API first
MissionSingleplayerViewHandler missionSingleplayerViewHandler = ...;
missionSingleplayerViewHandler.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionSingleplayerViewHandler from the subsystem API first
MissionSingleplayerViewHandler missionSingleplayerViewHandler = ...;
missionSingleplayerViewHandler.OnMissionScreenTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionSingleplayerViewHandler>();
```

## See Also

- [Area Index](../)