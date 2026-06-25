---
title: "SiblingIndexVisibilityWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiblingIndexVisibilityWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiblingIndexVisibilityWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SiblingIndexVisibilityWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs`

## Overview

`SiblingIndexVisibilityWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SiblingIndexVisibilityWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WatchType` | `public SiblingIndexVisibilityWidget.WatchTypes WatchType { get; set; }` |
| `IndexToBeVisible` | `public int IndexToBeVisible { get; set; }` |
| `WidgetToWatch` | `public Widget WidgetToWatch { get; set; }` |

## Usage Example

```csharp
var widget = new SiblingIndexVisibilityWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)