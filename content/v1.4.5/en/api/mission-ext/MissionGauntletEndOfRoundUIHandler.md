---
title: "MissionGauntletEndOfRoundUIHandler"
description: "Auto-generated class reference for MissionGauntletEndOfRoundUIHandler."
---
# MissionGauntletEndOfRoundUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletEndOfRoundUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletEndOfRoundUIHandler.cs`

## Overview

`MissionGauntletEndOfRoundUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletEndOfRoundUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletEndOfRoundUIHandler from the subsystem API first
MissionGauntletEndOfRoundUIHandler missionGauntletEndOfRoundUIHandler = ...;
missionGauntletEndOfRoundUIHandler.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletEndOfRoundUIHandler from the subsystem API first
MissionGauntletEndOfRoundUIHandler missionGauntletEndOfRoundUIHandler = ...;
missionGauntletEndOfRoundUIHandler.OnMissionScreenFinalize();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionGauntletEndOfRoundUIHandler>();
```

## See Also

- [Area Index](../)