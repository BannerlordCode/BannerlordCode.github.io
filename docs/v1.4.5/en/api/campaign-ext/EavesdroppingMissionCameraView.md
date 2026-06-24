<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EavesdroppingMissionCameraView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EavesdroppingMissionCameraView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class EavesdroppingMissionCameraView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Missions/EavesdroppingMissionCameraView.cs`

## Overview

`EavesdroppingMissionCameraView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `EavesdroppingMissionCameraView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var view = new EavesdroppingMissionCameraView();
```

## See Also

- [Complete Class Catalog](../catalog)