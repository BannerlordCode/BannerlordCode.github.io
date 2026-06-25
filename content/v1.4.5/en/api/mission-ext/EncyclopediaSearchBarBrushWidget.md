---
title: "EncyclopediaSearchBarBrushWidget"
description: "Auto-generated class reference for EncyclopediaSearchBarBrushWidget."
---
# EncyclopediaSearchBarBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`

## Overview

`EncyclopediaSearchBarBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EncyclopediaSearchBarBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ShowResults` | `public bool ShowResults { get; set; }` |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget { get; set; }` |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel { get; set; }` |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
EncyclopediaSearchBarBrushWidget widget = ...;
```

## See Also

- [Area Index](../)