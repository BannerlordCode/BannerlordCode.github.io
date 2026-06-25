---
title: "MissionEntitySelectionUIHandler"
description: "Auto-generated class reference for MissionEntitySelectionUIHandler."
---
# MissionEntitySelectionUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEntitySelectionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionEntitySelectionUIHandler.cs`

## Overview

`MissionEntitySelectionUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionEntitySelectionUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionEntitySelectionUIHandler from the subsystem API first
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.OnMissionScreenTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionEntitySelectionUIHandler from the subsystem API first
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.OnRemoveBehavior();
```

### TickDebug
`public void TickDebug()`

**Purpose:** **Purpose:** Advances the debug state each frame or update cycle.

```csharp
// Obtain an instance of MissionEntitySelectionUIHandler from the subsystem API first
MissionEntitySelectionUIHandler missionEntitySelectionUIHandler = ...;
missionEntitySelectionUIHandler.TickDebug();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionEntitySelectionUIHandler>();
```

## See Also

- [Area Index](../)