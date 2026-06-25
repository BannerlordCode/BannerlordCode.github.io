---
title: "MissionFormationTargetSelectionHandler"
description: "Auto-generated class reference for MissionFormationTargetSelectionHandler."
---
# MissionFormationTargetSelectionHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFormationTargetSelectionHandler.cs`

## Overview

`MissionFormationTargetSelectionHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionFormationTargetSelectionHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreDisplayMissionTick
`public override void OnPreDisplayMissionTick(float dt)`

**Purpose:** Invoked when the `pre display mission tick` event is raised.

```csharp
// Obtain an instance of MissionFormationTargetSelectionHandler from the subsystem API first
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.OnPreDisplayMissionTick(0);
```

### SetIsFormationTargetingDisabled
`public void SetIsFormationTargetingDisabled(bool isDisabled)`

**Purpose:** Assigns a new value to `is formation targeting disabled` and updates the object's internal state.

```csharp
// Obtain an instance of MissionFormationTargetSelectionHandler from the subsystem API first
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.SetIsFormationTargetingDisabled(false);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionFormationTargetSelectionHandler from the subsystem API first
MissionFormationTargetSelectionHandler missionFormationTargetSelectionHandler = ...;
missionFormationTargetSelectionHandler.OnRemoveBehavior();
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionFormationTargetSelectionHandler>();
```

## See Also

- [Area Index](../)