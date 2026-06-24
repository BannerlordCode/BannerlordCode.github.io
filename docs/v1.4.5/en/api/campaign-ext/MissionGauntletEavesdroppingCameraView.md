<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletEavesdroppingCameraView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletEavesdroppingCameraView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletEavesdroppingCameraView : EavesdroppingMissionCameraView`
**Base:** `EavesdroppingMissionCameraView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletEavesdroppingCameraView.cs`

## Overview

`MissionGauntletEavesdroppingCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletEavesdroppingCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HitTest
`public override bool HitTest()`

**Purpose:** Handles logic related to `hit test`.

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

## Usage Example

```csharp
var view = new MissionGauntletEavesdroppingCameraView();
```

## See Also

- [Complete Class Catalog](../catalog)