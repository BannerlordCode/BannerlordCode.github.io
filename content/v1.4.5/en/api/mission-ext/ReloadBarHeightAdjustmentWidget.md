---
title: "ReloadBarHeightAdjustmentWidget"
description: "Auto-generated class reference for ReloadBarHeightAdjustmentWidget."
---
# ReloadBarHeightAdjustmentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReloadBarHeightAdjustmentWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/ReloadBarHeightAdjustmentWidget.cs`

## Overview

`ReloadBarHeightAdjustmentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ReloadBarHeightAdjustmentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration { get; set; }` |
| `FillWidget` | `public Widget FillWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ReloadBarHeightAdjustmentWidget widget = ...;
```

## See Also

- [Area Index](../)