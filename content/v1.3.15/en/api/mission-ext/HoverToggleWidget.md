---
title: "HoverToggleWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HoverToggleWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HoverToggleWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HoverToggleWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/HoverToggleWidget.cs`

## Overview

`HoverToggleWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `HoverToggleWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |

## Usage Example

```csharp
var widget = new HoverToggleWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)