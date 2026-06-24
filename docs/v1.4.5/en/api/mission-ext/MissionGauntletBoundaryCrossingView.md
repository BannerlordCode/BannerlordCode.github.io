<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletBoundaryCrossingView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletBoundaryCrossingView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletBoundaryCrossingView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletBoundaryCrossingView.cs`

## Overview

`MissionGauntletBoundaryCrossingView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletBoundaryCrossingView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

## Usage Example

```csharp
var view = new MissionGauntletBoundaryCrossingView();
```

## See Also

- [Complete Class Catalog](../catalog)