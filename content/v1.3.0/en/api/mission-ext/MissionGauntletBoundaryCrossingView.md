---
title: "MissionGauntletBoundaryCrossingView"
description: "Auto-generated class reference for MissionGauntletBoundaryCrossingView."
---
# MissionGauntletBoundaryCrossingView

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletBoundaryCrossingView : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/Mission/MissionGauntletBoundaryCrossingView.cs`

## Overview

`MissionGauntletBoundaryCrossingView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletBoundaryCrossingView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the `photo mode activated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoundaryCrossingView from the subsystem API first
MissionGauntletBoundaryCrossingView missionGauntletBoundaryCrossingView = ...;
missionGauntletBoundaryCrossingView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the `photo mode deactivated` event is raised.

```csharp
// Obtain an instance of MissionGauntletBoundaryCrossingView from the subsystem API first
MissionGauntletBoundaryCrossingView missionGauntletBoundaryCrossingView = ...;
missionGauntletBoundaryCrossingView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletBoundaryCrossingView view = ...;
```

## See Also

- [Area Index](../)