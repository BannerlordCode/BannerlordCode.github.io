---
title: "QuestProgressVisualWidget"
description: "Auto-generated class reference for QuestProgressVisualWidget."
---
# QuestProgressVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QuestProgressVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`

## Overview

`QuestProgressVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `QuestProgressVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BarWidget` | `public Widget BarWidget { get; set; }` |
| `SliderWidget` | `public Widget SliderWidget { get; set; }` |
| `CheckboxVisualWidget` | `public Widget CheckboxVisualWidget { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `ProgressStoneWidth` | `public float ProgressStoneWidth { get; set; }` |
| `ProgressStoneHeight` | `public float ProgressStoneHeight { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TargetProgress` | `public int TargetProgress { get; set; }` |
| `HorizontalSpacingBetweenStones` | `public int HorizontalSpacingBetweenStones { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
QuestProgressVisualWidget widget = ...;
```

## See Also

- [Area Index](../)