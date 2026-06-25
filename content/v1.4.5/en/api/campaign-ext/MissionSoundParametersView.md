---
title: "MissionSoundParametersView"
description: "Auto-generated class reference for MissionSoundParametersView."
---
# MissionSoundParametersView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSoundParametersView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Missions/MissionSoundParametersView.cs`

## Overview

`MissionSoundParametersView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionSoundParametersView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionSoundParametersView from the subsystem API first
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.EarlyStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionSoundParametersView from the subsystem API first
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.OnMissionScreenFinalize();
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionSoundParametersView from the subsystem API first
MissionSoundParametersView missionSoundParametersView = ...;
missionSoundParametersView.OnMissionModeChange(oldMissionMode, false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionSoundParametersView view = ...;
```

## See Also

- [Area Index](../)