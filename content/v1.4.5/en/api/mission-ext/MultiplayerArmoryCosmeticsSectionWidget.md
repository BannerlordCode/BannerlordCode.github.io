---
title: "MultiplayerArmoryCosmeticsSectionWidget"
description: "Auto-generated class reference for MultiplayerArmoryCosmeticsSectionWidget."
---
# MultiplayerArmoryCosmeticsSectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticsSectionWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory/MultiplayerArmoryCosmeticsSectionWidget.cs`

## Overview

`MultiplayerArmoryCosmeticsSectionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerArmoryCosmeticsSectionWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive { get; set; }` |
| `TauntAssignmentStateAnimationDuration` | `public float TauntAssignmentStateAnimationDuration { get; set; }` |
| `TauntAssignmentStateAlpha` | `public float TauntAssignmentStateAlpha { get; set; }` |
| `TopSectionParent` | `public Widget TopSectionParent { get; set; }` |
| `BottomSectionParent` | `public Widget BottomSectionParent { get; set; }` |
| `SortControlsParent` | `public Widget SortControlsParent { get; set; }` |
| `CategorySeparatorWidget` | `public Widget CategorySeparatorWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerArmoryCosmeticsSectionWidget widget = ...;
```

## See Also

- [Area Index](../)