<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionCheatView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCheatView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionCheatView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionCheatView.cs`

## Overview

`MissionCheatView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionCheatView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetIsCheatsAvailable
`public abstract bool GetIsCheatsAvailable()`

**Purpose:** Gets the current value of `is cheats available`.

### InitializeScreen
`public abstract void InitializeScreen()`

**Purpose:** Initializes the state, resources, or bindings for `screen`.

### FinalizeScreen
`public abstract void FinalizeScreen()`

**Purpose:** Handles logic related to `finalize screen`.

## Usage Example

```csharp
var implementation = new CustomMissionCheatView();
```

## See Also

- [Complete Class Catalog](../catalog)