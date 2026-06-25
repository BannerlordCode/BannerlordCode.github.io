---
title: "MoraleWidget"
description: "Auto-generated class reference for MoraleWidget."
---
# MoraleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD/MoraleWidget.cs`

## Overview

`MoraleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MoraleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentWidget` | `public Widget ParentWidget { get; }` |
| `MaskWidget` | `public Widget MaskWidget { get; }` |
| `ItemWidget` | `public BrushWidget ItemWidget { get; }` |
| `ItemGlowWidget` | `public BrushWidget ItemGlowWidget { get; }` |
| `ItemBackgroundWidget` | `public Widget ItemBackgroundWidget { get; }` |
| `IncreaseLevel` | `public int IncreaseLevel { get; set; }` |
| `MoralePercentage` | `public int MoralePercentage { get; set; }` |
| `Container` | `public Widget Container { get; set; }` |
| `ItemContainer` | `public Widget ItemContainer { get; set; }` |
| `ItemBrush` | `public Brush ItemBrush { get; set; }` |
| `ItemGlowBrush` | `public Brush ItemGlowBrush { get; set; }` |
| `ItemBackgroundBrush` | `public Brush ItemBackgroundBrush { get; set; }` |
| `TeamColorAsStr` | `public string TeamColorAsStr { get; set; }` |
| `TeamColorAsStrSecondary` | `public string TeamColorAsStrSecondary { get; set; }` |
| `FlowArrowWidget` | `public MoraleArrowBrushWidget FlowArrowWidget { get; set; }` |
| `ExtendToLeft` | `public bool ExtendToLeft { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## Key Methods

### SetFillAmount
`public void SetFillAmount(float fill, int fillMargin)`

**Purpose:** Assigns a new value to `fill amount` and updates the object's internal state.

```csharp
// Obtain an instance of MoraleWidget from the subsystem API first
MoraleWidget moraleWidget = ...;
moraleWidget.SetFillAmount(0, 0);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MoraleWidget widget = ...;
```

## See Also

- [Area Index](../)