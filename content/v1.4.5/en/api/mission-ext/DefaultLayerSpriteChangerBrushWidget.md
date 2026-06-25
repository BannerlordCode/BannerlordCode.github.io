---
title: "DefaultLayerSpriteChangerBrushWidget"
description: "Auto-generated class reference for DefaultLayerSpriteChangerBrushWidget."
---
# DefaultLayerSpriteChangerBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DefaultLayerSpriteChangerBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/DefaultLayerSpriteChangerBrushWidget.cs`

## Overview

`DefaultLayerSpriteChangerBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DefaultLayerSpriteChangerBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `SpriteBrushLayerName` | `public string SpriteBrushLayerName { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DefaultLayerSpriteChangerBrushWidget widget = ...;
```

## See Also

- [Area Index](../)