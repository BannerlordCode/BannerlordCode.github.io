---
title: "MoraleArrowBrushWidget"
description: "Auto-generated class reference for MoraleArrowBrushWidget."
---
# MoraleArrowBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/MoraleArrowBrushWidget.cs`

## Overview

`MoraleArrowBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MoraleArrowBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## Key Methods

### SetFlowLevel
`public void SetFlowLevel(int flow)`

**Purpose:** Assigns a new value to `flow level` and updates the object's internal state.

```csharp
// Obtain an instance of MoraleArrowBrushWidget from the subsystem API first
MoraleArrowBrushWidget moraleArrowBrushWidget = ...;
moraleArrowBrushWidget.SetFlowLevel(0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MoraleArrowBrushWidget widget = ...;
```

## See Also

- [Area Index](../)