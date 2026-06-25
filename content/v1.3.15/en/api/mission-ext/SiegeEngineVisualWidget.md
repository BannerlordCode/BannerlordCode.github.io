---
title: "SiegeEngineVisualWidget"
description: "Auto-generated class reference for SiegeEngineVisualWidget."
---
# SiegeEngineVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/SiegeEngineVisualWidget.cs`

## Overview

`SiegeEngineVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SiegeEngineVisualWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineID` | `public string EngineID { get; set; }` |
| `OutlineWidget` | `public Widget OutlineWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SiegeEngineVisualWidget widget = ...;
```

## See Also

- [Area Index](../)