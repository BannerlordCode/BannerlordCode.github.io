---
title: "DimensionSyncWidget"
description: "Auto-generated class reference for DimensionSyncWidget."
---
# DimensionSyncWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DimensionSyncWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs`

## Overview

`DimensionSyncWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DimensionSyncWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToCopyHeightFrom` | `public Widget WidgetToCopyHeightFrom { get; set; }` |
| `PaddingAmount` | `public int PaddingAmount { get; set; }` |
| `DimensionToSync` | `public DimensionSyncWidget.Dimensions DimensionToSync { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
DimensionSyncWidget widget = ...;
```

## See Also

- [Area Index](../)