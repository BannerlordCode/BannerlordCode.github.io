---
title: "MissionLeaveBarSliderWidget"
description: "Auto-generated class reference for MissionLeaveBarSliderWidget."
---
# MissionLeaveBarSliderWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLeaveBarSliderWidget : SliderWidget`
**Base:** `SliderWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/MissionLeaveBarSliderWidget.cs`

## Overview

`MissionLeaveBarSliderWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionLeaveBarSliderWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FadeInMultiplier` | `public float FadeInMultiplier { get; set; }` |
| `FadeOutMultiplier` | `public float FadeOutMultiplier { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MissionLeaveBarSliderWidget widget = ...;
```

## See Also

- [Area Index](../)