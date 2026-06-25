---
title: "RelationTextWidget"
description: "Auto-generated class reference for RelationTextWidget."
---
# RelationTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RelationTextWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/RelationTextWidget.cs`

## Overview

`RelationTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RelationTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Amount` | `public int Amount { get; set; }` |
| `ZeroColor` | `public Color ZeroColor { get; set; }` |
| `PositiveColor` | `public Color PositiveColor { get; set; }` |
| `NegativeColor` | `public Color NegativeColor { get; set; }` |

## Key Methods

### RelationTextWidget
`public class RelationTextWidget(UIContext context)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of RelationTextWidget from the subsystem API first
RelationTextWidget relationTextWidget = ...;
var result = relationTextWidget.RelationTextWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
RelationTextWidget widget = ...;
```

## See Also

- [Area Index](../)