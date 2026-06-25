---
title: "MainAgentControlModeParentWidget"
description: "Auto-generated class reference for MainAgentControlModeParentWidget."
---
# MainAgentControlModeParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.MainAgentControlMode
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MainAgentControlModeParentWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.MainAgentControlMode/MainAgentControlModeParentWidget.cs`

## Overview

`MainAgentControlModeParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MainAgentControlModeParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AnimationFirstStepDuration` | `public float AnimationFirstStepDuration { get; set; }` |
| `AnimationSecondStepDuration` | `public float AnimationSecondStepDuration { get; set; }` |
| `ChildItemId` | `public string ChildItemId { get; set; }` |
| `ControlModesList` | `public ListPanel ControlModesList { get; set; }` |
| `SelectionIndicatorWidget` | `public Widget SelectionIndicatorWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MainAgentControlModeParentWidget widget = ...;
```

## See Also

- [Area Index](../)