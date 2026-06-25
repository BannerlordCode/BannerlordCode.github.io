---
title: "MultiplayerClassLoadoutTroopCardBrushWidget"
description: "Auto-generated class reference for MultiplayerClassLoadoutTroopCardBrushWidget."
---
# MultiplayerClassLoadoutTroopCardBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerClassLoadoutTroopCardBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopCardBrushWidget.cs`

## Overview

`MultiplayerClassLoadoutTroopCardBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiplayerClassLoadoutTroopCardBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CultureID` | `public string CultureID { get; set; }` |
| `Border` | `public BrushWidget Border { get; set; }` |
| `ClassBorder` | `public BrushWidget ClassBorder { get; set; }` |
| `ClassFrame` | `public BrushWidget ClassFrame { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiplayerClassLoadoutTroopCardBrushWidget widget = ...;
```

## See Also

- [Area Index](../)