---
title: "RundownColumnDividerCollectionWidget"
description: "Auto-generated class reference for RundownColumnDividerCollectionWidget."
---
# RundownColumnDividerCollectionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Information.RundownTooltip
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RundownColumnDividerCollectionWidget : ListPanel`
**Base:** `ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Information/RundownTooltip/RundownColumnDividerCollectionWidget.cs`

## Overview

`RundownColumnDividerCollectionWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `RundownColumnDividerCollectionWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DividerWidth` | `public float DividerWidth { get; set; }` |
| `DividerSprite` | `public Sprite DividerSprite { get; set; }` |
| `DividerColor` | `public Color DividerColor { get; set; }` |

## Key Methods

### Refresh
`public void Refresh(IReadOnlyList<float> columnWidths)`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of RundownColumnDividerCollectionWidget from the subsystem API first
RundownColumnDividerCollectionWidget rundownColumnDividerCollectionWidget = ...;
rundownColumnDividerCollectionWidget.Refresh(columnWidths);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
RundownColumnDividerCollectionWidget widget = ...;
```

## See Also

- [Area Index](../)