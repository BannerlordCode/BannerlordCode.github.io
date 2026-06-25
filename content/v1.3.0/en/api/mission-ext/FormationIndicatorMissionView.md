---
title: "FormationIndicatorMissionView"
description: "Auto-generated class reference for FormationIndicatorMissionView."
---
# FormationIndicatorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationIndicatorMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs`

## Overview

`FormationIndicatorMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `FormationIndicatorMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.AfterStart();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.OnMissionScreenTick(0);
```

### DetermineIndicatorState
`public void DetermineIndicatorState(float dt, Vec3 position)`

**Purpose:** Determines the result of `indicator state` based on the current state.

```csharp
// Obtain an instance of FormationIndicatorMissionView from the subsystem API first
FormationIndicatorMissionView formationIndicatorMissionView = ...;
formationIndicatorMissionView.DetermineIndicatorState(0, position);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
FormationIndicatorMissionView view = ...;
```

## See Also

- [Area Index](../)