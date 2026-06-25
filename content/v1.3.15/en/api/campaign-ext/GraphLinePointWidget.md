---
title: "GraphLinePointWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphLinePointWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GraphLinePointWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphLinePointWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/Graph/GraphLinePointWidget.cs`

## Overview

`GraphLinePointWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GraphLinePointWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalValue` | `public float HorizontalValue { get; set; }` |
| `VerticalValue` | `public float VerticalValue { get; set; }` |

## Usage Example

```csharp
var widget = new GraphLinePointWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)