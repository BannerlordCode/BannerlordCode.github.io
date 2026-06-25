---
title: "MissionSiegeEngineMarkerWidget"
description: "Auto-generated class reference for MissionSiegeEngineMarkerWidget."
---
# MissionSiegeEngineMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs`

## Overview

`MissionSiegeEngineMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MissionSiegeEngineMarkerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Slider` | `public SliderWidget Slider { get; set; }` |
| `MachineIconParent` | `public BrushWidget MachineIconParent { get; set; }` |
| `EnemyBrush` | `public Brush EnemyBrush { get; set; }` |
| `AllyBrush` | `public Brush AllyBrush { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `EngineType` | `public string EngineType { get; set; }` |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MissionSiegeEngineMarkerWidget widget = ...;
```

## See Also

- [Area Index](../)