---
title: "GauntletChatLogView"
description: "Auto-generated class reference for GauntletChatLogView."
---
# GauntletChatLogView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletChatLogView : GlobalLayer`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletChatLogView.cs`

## Overview

`GauntletChatLogView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletChatLogView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static GauntletChatLogView Current { get; }` |

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
GauntletChatLogView.Initialize();
```

### SetCanFocusWhileInMission
`public void SetCanFocusWhileInMission(bool canFocusInMission)`

**Purpose:** Assigns a new value to can focus while in mission and updates the object's internal state.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetCanFocusWhileInMission(false);
```

### OnSupportedFeaturesReceived
`public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)`

**Purpose:** Invoked when the supported features received event is raised.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.OnSupportedFeaturesReceived(supportedFeatures);
```

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Assigns a new value to enabled and updates the object's internal state.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.SetEnabled(false);
```

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**Purpose:** Reads movie from persistent storage or a stream.

```csharp
// Obtain an instance of GauntletChatLogView from the subsystem API first
GauntletChatLogView gauntletChatLogView = ...;
gauntletChatLogView.LoadMovie(false);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
GauntletChatLogView view = ...;
```

## See Also

- [Area Index](../)