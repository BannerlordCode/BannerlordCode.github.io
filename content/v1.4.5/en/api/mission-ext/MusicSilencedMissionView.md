---
title: "MusicSilencedMissionView"
description: "Auto-generated class reference for MusicSilencedMissionView."
---
# MusicSilencedMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicSilencedMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicSilencedMissionView.cs`

## Overview

`MusicSilencedMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicSilencedMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MusicSilencedMissionView from the subsystem API first
MusicSilencedMissionView musicSilencedMissionView = ...;
musicSilencedMissionView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MusicSilencedMissionView from the subsystem API first
MusicSilencedMissionView musicSilencedMissionView = ...;
musicSilencedMissionView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MusicSilencedMissionView view = ...;
```

## See Also

- [Area Index](../)