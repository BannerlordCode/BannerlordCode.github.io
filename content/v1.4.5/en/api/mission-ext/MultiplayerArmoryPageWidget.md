---
title: "MultiplayerArmoryPageWidget"
description: "Auto-generated class reference for MultiplayerArmoryPageWidget."
---
# MultiplayerArmoryPageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryPageWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerArmoryPageWidget.cs`

## Overview

`MultiplayerArmoryPageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerArmoryPageWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `IsTauntControlsOpen` | `public bool IsTauntControlsOpen { get; set; }` |
| `TauntEnabledRadialDistance` | `public int TauntEnabledRadialDistance { get; set; }` |
| `TauntDisabledRadialDistance` | `public int TauntDisabledRadialDistance { get; set; }` |
| `TauntStateAnimationDuration` | `public float TauntStateAnimationDuration { get; set; }` |
| `TauntAssignmentOverlayAlpha` | `public float TauntAssignmentOverlayAlpha { get; set; }` |
| `LeftSideParent` | `public Widget LeftSideParent { get; set; }` |
| `GameModesDropdownParent` | `public Widget GameModesDropdownParent { get; set; }` |
| `HeroPreviewParent` | `public Widget HeroPreviewParent { get; set; }` |
| `TauntAssignmentOverlay` | `public Widget TauntAssignmentOverlay { get; set; }` |
| `ManageTauntsButton` | `public Widget ManageTauntsButton { get; set; }` |
| `TauntSlotsContainer` | `public Widget TauntSlotsContainer { get; set; }` |
| `RightPanelTabControl` | `public TabControl RightPanelTabControl { get; set; }` |
| `TauntCircleActionSelector` | `public CircleActionSelectorWidget TauntCircleActionSelector { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerArmoryPageWidget widget = ...;
```

## See Also

- [Area Index](../)