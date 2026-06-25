---
title: "MissionGauntletAgentLockVisualizerView"
description: "Auto-generated class reference for MissionGauntletAgentLockVisualizerView."
---
# MissionGauntletAgentLockVisualizerView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAgentLockVisualizerView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/Singleplayer/MissionGauntletAgentLockVisualizerView.cs`

## Overview

`MissionGauntletAgentLockVisualizerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletAgentLockVisualizerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentLockVisualizerView from the subsystem API first
MissionGauntletAgentLockVisualizerView missionGauntletAgentLockVisualizerView = ...;
missionGauntletAgentLockVisualizerView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletAgentLockVisualizerView view = ...;
```

## See Also

- [Area Index](../)