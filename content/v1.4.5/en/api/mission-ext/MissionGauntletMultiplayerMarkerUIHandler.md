---
title: "MissionGauntletMultiplayerMarkerUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletMultiplayerMarkerUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletMultiplayerMarkerUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerMarkerUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerMarkerUIHandler.cs`

## Overview

`MissionGauntletMultiplayerMarkerUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletMultiplayerMarkerUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletMultiplayerMarkerUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)