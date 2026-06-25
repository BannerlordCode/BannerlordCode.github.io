---
title: "OrderOfBattleScreenWidget"
description: "Auto-generated class reference for OrderOfBattleScreenWidget."
---
# OrderOfBattleScreenWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleScreenWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle/OrderOfBattleScreenWidget.cs`

## Overview

`OrderOfBattleScreenWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleScreenWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `AreCameraControlsEnabled` | `public bool AreCameraControlsEnabled { get; set; }` |
| `CameraEnabledAlpha` | `public float CameraEnabledAlpha { get; set; }` |
| `LeftSideFormations` | `public ListPanel LeftSideFormations { get; set; }` |
| `RightSideFormations` | `public ListPanel RightSideFormations { get; set; }` |
| `CaptainPool` | `public ListPanel CaptainPool { get; set; }` |
| `Markers` | `public Widget Markers { get; set; }` |
| `CanToggleHeroSelection` | `public bool CanToggleHeroSelection { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleScreenWidget widget = ...;
```

## See Also

- [Area Index](../)