---
title: "CharacterCreationCultureVisualBrushWidget"
description: "Auto-generated class reference for CharacterCreationCultureVisualBrushWidget."
---
# CharacterCreationCultureVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationCultureVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture/CharacterCreationCultureVisualBrushWidget.cs`

## Overview

`CharacterCreationCultureVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CharacterCreationCultureVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVisuals` | `public bool UseSmallVisuals { get; set; }` |
| `Layer1Widget` | `public ParallaxItemBrushWidget Layer1Widget { get; set; }` |
| `Layer2Widget` | `public ParallaxItemBrushWidget Layer2Widget { get; set; }` |
| `Layer3Widget` | `public ParallaxItemBrushWidget Layer3Widget { get; set; }` |
| `Layer4Widget` | `public ParallaxItemBrushWidget Layer4Widget { get; set; }` |
| `CurrentCultureId` | `public string CurrentCultureId { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterCreationCultureVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)