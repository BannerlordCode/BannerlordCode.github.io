---
title: "GauntletCameraFadeView"
description: "Auto-generated class reference for GauntletCameraFadeView."
---
# GauntletCameraFadeView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`
**Base:** `GlobalLayer`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## Overview

`GauntletCameraFadeView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletCameraFadeView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletCameraFadeView.Initialize();
```

### BeginFadeOutAndIn
`public void BeginFadeOutAndIn(float fadeOutDuration = 0.5f, float blackOutDuration = 0.5f, float fadeInDuration = 0.5f)`

**Purpose:** **Purpose:** Executes the BeginFadeOutAndIn logic.

```csharp
// Obtain an instance of GauntletCameraFadeView from the subsystem API first
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeOutAndIn(0, 0, 0);
```

### BeginFadeOut
`public void BeginFadeOut(float fadeOutDuration = 0.5f)`

**Purpose:** **Purpose:** Executes the BeginFadeOut logic.

```csharp
// Obtain an instance of GauntletCameraFadeView from the subsystem API first
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeOut(0);
```

### BeginFadeIn
`public void BeginFadeIn(float fadeInDuration = 0.5f)`

**Purpose:** **Purpose:** Executes the BeginFadeIn logic.

```csharp
// Obtain an instance of GauntletCameraFadeView from the subsystem API first
GauntletCameraFadeView gauntletCameraFadeView = ...;
gauntletCameraFadeView.BeginFadeIn(0);
```

### GetScreenFadeState
`public ScreenFadeState GetScreenFadeState()`

**Purpose:** **Purpose:** Reads and returns the screen fade state value held by the this instance.

```csharp
// Obtain an instance of GauntletCameraFadeView from the subsystem API first
GauntletCameraFadeView gauntletCameraFadeView = ...;
var result = gauntletCameraFadeView.GetScreenFadeState();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletCameraFadeView view = ...;
```

## See Also

- [Area Index](../)