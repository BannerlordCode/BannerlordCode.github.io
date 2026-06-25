---
title: "ReplayMissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReplayMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ReplayMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReplayMissionView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/ReplayMissionView.cs`

## Overview

`ReplayMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ReplayMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

### OverrideInput
`public void OverrideInput(bool isOverridden)`

**Purpose:** Handles logic related to `override input`.

### ResetReplay
`public void ResetReplay()`

**Purpose:** Resets `replay` to its initial state.

### Rewind
`public void Rewind(float time)`

**Purpose:** Handles logic related to `rewind`.

### FastForward
`public void FastForward(float time)`

**Purpose:** Handles logic related to `fast forward`.

### Pause
`public void Pause()`

**Purpose:** Handles logic related to `pause`.

### Resume
`public void Resume()`

**Purpose:** Handles logic related to `resume`.

## Usage Example

```csharp
var view = new ReplayMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)