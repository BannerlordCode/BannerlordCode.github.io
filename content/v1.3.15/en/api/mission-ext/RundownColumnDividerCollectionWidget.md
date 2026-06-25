---
title: "RundownColumnDividerCollectionWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RundownColumnDividerCollectionWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `refresh`.

## Usage Example

```csharp
var widget = new RundownColumnDividerCollectionWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)