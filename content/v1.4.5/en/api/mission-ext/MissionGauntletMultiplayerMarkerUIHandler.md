---
title: "MissionGauntletMultiplayerMarkerUIHandler"
description: "Auto-generated class reference for MissionGauntletMultiplayerMarkerUIHandler."
---
# MissionGauntletMultiplayerMarkerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerMarkerUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerMarkerUIHandler.cs`

## Overview

`MissionGauntletMultiplayerMarkerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletMultiplayerMarkerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerMarkerUIHandler from the subsystem API first
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerMarkerUIHandler from the subsystem API first
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenFinalize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletMultiplayerMarkerUIHandler from the subsystem API first
MissionGauntletMultiplayerMarkerUIHandler missionGauntletMultiplayerMarkerUIHandler = ...;
missionGauntletMultiplayerMarkerUIHandler.OnMissionScreenTick(0);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletMultiplayerMarkerUIHandler>();
```

## See Also

- [Area Index](../)