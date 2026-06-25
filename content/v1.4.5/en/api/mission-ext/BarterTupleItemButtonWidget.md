---
title: "BarterTupleItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterTupleItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterTupleItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterTupleItemButtonWidget.cs`

## Overview

`BarterTupleItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BarterTupleItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SliderParentList` | `public ListPanel SliderParentList { get; set; }` |
| `CountText` | `public TextWidget CountText { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## Usage Example

```csharp
var widget = new BarterTupleItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)