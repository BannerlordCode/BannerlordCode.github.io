<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionEquipItemToolView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEquipItemToolView

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionEquipItemToolView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionEquipItemToolView.cs`

## Overview

`MissionEquipItemToolView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionEquipItemToolView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var view = new MissionEquipItemToolView();
```

## See Also

- [Complete Class Catalog](../catalog)