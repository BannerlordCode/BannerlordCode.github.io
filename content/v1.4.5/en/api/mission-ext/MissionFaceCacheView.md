---
title: "MissionFaceCacheView"
description: "Auto-generated class reference for MissionFaceCacheView."
---
# MissionFaceCacheView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionFaceCacheView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionFaceCacheView.cs`

## Overview

`MissionFaceCacheView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionFaceCacheView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of MissionFaceCacheView from the subsystem API first
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnPreMissionTick(0);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionFaceCacheView from the subsystem API first
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionFaceCacheView from the subsystem API first
MissionFaceCacheView missionFaceCacheView = ...;
missionFaceCacheView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionFaceCacheView view = ...;
```

## See Also

- [Area Index](../)