---
title: "PerkSelectionBarWidget"
description: "Auto-generated class reference for PerkSelectionBarWidget."
---
# PerkSelectionBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterDeveloper
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PerkSelectionBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterDeveloper/PerkSelectionBarWidget.cs`

## Overview

`PerkSelectionBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `PerkSelectionBarWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ProgressClip` | `public Widget ProgressClip { get; set; }` |
| `PercentageIndicatorWidget` | `public Widget PercentageIndicatorWidget { get; set; }` |
| `FullLearningRateClip` | `public Widget FullLearningRateClip { get; set; }` |
| `SeperatorContainer` | `public Widget SeperatorContainer { get; set; }` |
| `FullLearningRateClipInnerContent` | `public Widget FullLearningRateClipInnerContent { get; set; }` |
| `PerksList` | `public Widget PerksList { get; set; }` |
| `PercentageIndicatorTextWidget` | `public TextWidget PercentageIndicatorTextWidget { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `FullLearningRateLevel` | `public int FullLearningRateLevel { get; set; }` |
| `Level` | `public int Level { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
PerkSelectionBarWidget widget = ...;
```

## See Also

- [Area Index](../)