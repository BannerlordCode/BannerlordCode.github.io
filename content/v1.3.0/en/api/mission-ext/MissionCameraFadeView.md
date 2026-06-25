---
title: "MissionCameraFadeView"
description: "Auto-generated class reference for MissionCameraFadeView."
---
# MissionCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionCameraFadeView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionCameraFadeView.cs`

## Overview

`MissionCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeAlpha` | `public float FadeAlpha { get; }` |
| `FadeState` | `public MissionCameraFadeView.CameraFadeState FadeState { get; }` |
| `IsCameraFading` | `public bool IsCameraFading { get; }` |
| `HasCameraFadeOut` | `public bool HasCameraFadeOut { get; }` |
| `HasCameraFadeIn` | `public bool HasCameraFadeIn { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.OnMissionScreenTick(0);
```

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutTime, float blackTime, float fadeInTime)`

**Purpose:** Executes the BeginFadeOutAndIn logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public void BeginFadeOut(float fadeOutTime)`

**Purpose:** Executes the BeginFadeOut logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeOut(0);
```

### BeginFadeIn
`public void BeginFadeIn(float fadeInTime)`

**Purpose:** Executes the BeginFadeIn logic.

```csharp
// Obtain an instance of MissionCameraFadeView from the subsystem API first
MissionCameraFadeView missionCameraFadeView = ...;
missionCameraFadeView.BeginFadeIn(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionCameraFadeView view = ...;
```

## See Also

- [Area Index](../)