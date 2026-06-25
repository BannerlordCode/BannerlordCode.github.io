---
title: "GauntletChatLogView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletChatLogView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetCanFocusWhileInMission
`public void SetCanFocusWhileInMission(bool canFocusInMission)`

**Purpose:** Sets the value or state of `can focus while in mission`.

### OnSupportedFeaturesReceived
`public void OnSupportedFeaturesReceived(SupportedFeatures supportedFeatures)`

**Purpose:** Called when the `supported features received` event is raised.

### SetEnabled
`public void SetEnabled(bool isEnabled)`

**Purpose:** Sets the value or state of `enabled`.

### LoadMovie
`public void LoadMovie(bool forMultiplayer)`

**Purpose:** Loads `movie` data.

## Usage Example

```csharp
var view = new GauntletChatLogView();
```

## See Also

- [Complete Class Catalog](../catalog)