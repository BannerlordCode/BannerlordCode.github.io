---
title: "ValueBasedVisibilityWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ValueBasedVisibilityWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ValueBasedVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class ValueBasedVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs`

## Overview

`ValueBasedVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ValueBasedVisibilityWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public ValueBasedVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `IndexToWatch` | `public int IndexToWatch { get; set; }` |
| `IndexToWatchFloat` | `public float IndexToWatchFloat { get; set; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get; set; }` |
| `IndexToBeVisibleFloat` | `public float IndexToBeVisibleFloat { get; set; }` |

## Usage Example

```csharp
var widget = new ValueBasedVisibilityWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)