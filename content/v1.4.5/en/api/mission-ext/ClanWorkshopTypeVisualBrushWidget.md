---
title: "ClanWorkshopTypeVisualBrushWidget"
description: "Auto-generated class reference for ClanWorkshopTypeVisualBrushWidget."
---
# ClanWorkshopTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanWorkshopTypeVisualBrushWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanWorkshopTypeVisualBrushWidget.cs`

## Overview

`ClanWorkshopTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanWorkshopTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WorkshopType` | `public string WorkshopType { get; set; }` |

## Key Methods

### ClanWorkshopTypeVisualBrushWidget
`public class ClanWorkshopTypeVisualBrushWidget(UIContext context)`

**Purpose:** Executes the ClanWorkshopTypeVisualBrushWidget logic.

```csharp
// Obtain an instance of ClanWorkshopTypeVisualBrushWidget from the subsystem API first
ClanWorkshopTypeVisualBrushWidget clanWorkshopTypeVisualBrushWidget = ...;
var result = clanWorkshopTypeVisualBrushWidget.ClanWorkshopTypeVisualBrushWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanWorkshopTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)