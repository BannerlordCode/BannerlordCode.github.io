---
title: "MultiSelectionElementsWidget"
description: "Auto-generated class reference for MultiSelectionElementsWidget."
---
# MultiSelectionElementsWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiSelectionElementsWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information/MultiSelectionElementsWidget.cs`

## Overview

`MultiSelectionElementsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MultiSelectionElementsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneButtonWidget` | `public ButtonWidget DoneButtonWidget { get; set; }` |

## Key Methods

### MultiSelectionElementsWidget
`public class MultiSelectionElementsWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the MultiSelectionElementsWidget logic.

```csharp
// Obtain an instance of MultiSelectionElementsWidget from the subsystem API first
MultiSelectionElementsWidget multiSelectionElementsWidget = ...;
var result = multiSelectionElementsWidget.MultiSelectionElementsWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
MultiSelectionElementsWidget widget = ...;
```

## See Also

- [Area Index](../)