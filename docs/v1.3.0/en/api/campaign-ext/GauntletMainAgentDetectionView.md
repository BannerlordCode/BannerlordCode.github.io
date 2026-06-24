<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletMainAgentDetectionView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletMainAgentDetectionView

**Namespace:** Sandobx.GauntletUI.Missions
**Module:** Sandobx.GauntletUI
**Type:** `public class GauntletMainAgentDetectionView : MissionMainAgentDetectionView`
**Base:** `MissionMainAgentDetectionView`
**File:** `SandBox.GauntletUI/Sandobx/GauntletUI/Missions/GauntletMainAgentDetectionView.cs`

## Overview

`GauntletMainAgentDetectionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `GauntletMainAgentDetectionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

## Usage Example

```csharp
var view = new GauntletMainAgentDetectionView();
```

## See Also

- [Complete Class Catalog](../catalog)