<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletMultiplayerCheatView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletMultiplayerCheatView

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerCheatView : MissionCheatView`
**Base:** `MissionCheatView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerCheatView.cs`

## Overview

`MissionGauntletMultiplayerCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletMultiplayerCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIsCheatsAvailable
`public override bool GetIsCheatsAvailable()`

**Purpose:** Gets the current value of `is cheats available`.

### InitializeScreen
`public override void InitializeScreen()`

**Purpose:** Initializes the state, resources, or bindings for `screen`.

### FinalizeScreen
`public override void FinalizeScreen()`

**Purpose:** Handles logic related to `finalize screen`.

## Usage Example

```csharp
var view = new MissionGauntletMultiplayerCheatView();
```

## See Also

- [Complete Class Catalog](../catalog)