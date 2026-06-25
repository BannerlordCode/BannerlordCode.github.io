---
title: "CompassElementWidget"
description: "Auto-generated class reference for CompassElementWidget."
---
# CompassElementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassElementWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/CompassElementWidget.cs`

## Overview

`CompassElementWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CompassElementWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public float Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |

## Key Methods

### CompassElementWidget
`public class CompassElementWidget(UIContext context)`

**Purpose:** Executes the CompassElementWidget logic.

```csharp
// Obtain an instance of CompassElementWidget from the subsystem API first
CompassElementWidget compassElementWidget = ...;
var result = compassElementWidget.CompassElementWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CompassElementWidget widget = ...;
```

## See Also

- [Area Index](../)