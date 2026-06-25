---
title: "CrosshairWidget"
description: "Auto-generated class reference for CrosshairWidget."
---
# CrosshairWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CrosshairWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/CrosshairWidget.cs`

## Overview

`CrosshairWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CrosshairWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TopArrowOpacity` | `public double TopArrowOpacity { get; set; }` |
| `BottomArrowOpacity` | `public double BottomArrowOpacity { get; set; }` |
| `RightArrowOpacity` | `public double RightArrowOpacity { get; set; }` |
| `LeftArrowOpacity` | `public double LeftArrowOpacity { get; set; }` |
| `IsTargetInvalid` | `public bool IsTargetInvalid { get; set; }` |
| `CrosshairAccuracy` | `public double CrosshairAccuracy { get; set; }` |
| `CrosshairScale` | `public double CrosshairScale { get; set; }` |
| `IsVictimDead` | `public bool IsVictimDead { get; set; }` |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot { get; set; }` |
| `ShowHitMarker` | `public bool ShowHitMarker { get; set; }` |
| `LeftArrow` | `public BrushWidget LeftArrow { get; set; }` |
| `RightArrow` | `public BrushWidget RightArrow { get; set; }` |
| `TopArrow` | `public BrushWidget TopArrow { get; set; }` |
| `BottomArrow` | `public BrushWidget BottomArrow { get; set; }` |
| `HitMarker` | `public BrushWidget HitMarker { get; set; }` |
| `HeadshotMarker` | `public BrushWidget HeadshotMarker { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CrosshairWidget widget = ...;
```

## See Also

- [Area Index](../)