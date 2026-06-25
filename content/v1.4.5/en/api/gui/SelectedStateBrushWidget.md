---
title: "SelectedStateBrushWidget"
description: "Auto-generated class reference for SelectedStateBrushWidget."
---
# SelectedStateBrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SelectedStateBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI.BaseTypes/SelectedStateBrushWidget.cs`

## Overview

`SelectedStateBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SelectedStateBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedState` | `public string SelectedState { get; set; }` |

## Key Methods

### SelectedStateBrushWidget
`public class SelectedStateBrushWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SelectedStateBrushWidget from the subsystem API first
SelectedStateBrushWidget selectedStateBrushWidget = ...;
var result = selectedStateBrushWidget.SelectedStateBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
SelectedStateBrushWidget widget = ...;
```

## See Also

- [Area Index](../)