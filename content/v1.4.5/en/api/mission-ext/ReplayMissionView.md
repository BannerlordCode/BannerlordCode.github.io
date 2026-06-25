---
title: "ReplayMissionView"
description: "Auto-generated class reference for ReplayMissionView."
---
# ReplayMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/ReplayMissionView.cs`

## Overview

`ReplayMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ReplayMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.OnBehaviorInitialize();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Invoked when the `pre mission tick` event is raised.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.OnPreMissionTick(0);
```

### OverrideInput
`public void OverrideInput(bool isOverridden)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.OverrideInput(false);
```

### ResetReplay
`public void ResetReplay()`

**Purpose:** Returns `replay` to its default or initial condition.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.ResetReplay();
```

### Rewind
`public void Rewind(float time)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.Rewind(0);
```

### FastForward
`public void FastForward(float time)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.FastForward(0);
```

### Pause
`public void Pause()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.Pause();
```

### Resume
`public void Resume()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ReplayMissionView from the subsystem API first
ReplayMissionView replayMissionView = ...;
replayMissionView.Resume();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
ReplayMissionView view = ...;
```

## See Also

- [Area Index](../)