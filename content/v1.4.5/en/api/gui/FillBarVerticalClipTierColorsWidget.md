---
title: "FillBarVerticalClipTierColorsWidget"
description: "Auto-generated class reference for FillBarVerticalClipTierColorsWidget."
---
# FillBarVerticalClipTierColorsWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class FillBarVerticalClipTierColorsWidget`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## Overview

`FillBarVerticalClipTierColorsWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `FillBarVerticalClipTierColorsWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MaxedColor` | `public string MaxedColor { get; set; }` |
| `HighColor` | `public string HighColor { get; set; }` |
| `MediumColor` | `public string MediumColor { get; set; }` |
| `LowColor` | `public string LowColor { get; set; }` |

## Key Methods

### FillBarVerticalClipTierColorsWidget
`public class FillBarVerticalClipTierColorsWidget(UIContext context)`

**Purpose:** **Purpose:** Executes the FillBarVerticalClipTierColorsWidget logic.

```csharp
// Obtain an instance of FillBarVerticalClipTierColorsWidget from the subsystem API first
FillBarVerticalClipTierColorsWidget fillBarVerticalClipTierColorsWidget = ...;
var result = fillBarVerticalClipTierColorsWidget.FillBarVerticalClipTierColorsWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
FillBarVerticalClipTierColorsWidget widget = ...;
```

## See Also

- [Area Index](../)