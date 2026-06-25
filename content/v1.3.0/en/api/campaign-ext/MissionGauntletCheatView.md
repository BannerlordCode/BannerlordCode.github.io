---
title: "MissionGauntletCheatView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletCheatView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletCheatView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs`

## Overview

`MissionGauntletCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Gets the current value of `is cheats available`.

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Initializes the state, resources, or bindings for `screen`.

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Handles logic related to `finalize screen`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var view = new MissionGauntletCheatView();
```

## See Also

- [Complete Class Catalog](../catalog)