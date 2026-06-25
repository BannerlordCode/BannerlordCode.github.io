---
title: "FaceGeneratorMissionView"
description: "Auto-generated class reference for FaceGeneratorMissionView."
---
# FaceGeneratorMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FaceGeneratorMissionView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FaceGeneratorMissionView.cs`

## Overview

`FaceGeneratorMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `FaceGeneratorMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of FaceGeneratorMissionView from the subsystem API first
FaceGeneratorMissionView faceGeneratorMissionView = ...;
faceGeneratorMissionView.OnMissionTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
FaceGeneratorMissionView view = ...;
```

## See Also

- [Area Index](../)