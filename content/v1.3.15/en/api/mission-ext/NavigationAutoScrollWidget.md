---
title: "NavigationAutoScrollWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NavigationAutoScrollWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NavigationAutoScrollWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NavigationAutoScrollWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/NavigationAutoScrollWidget.cs`

## Overview

`NavigationAutoScrollWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `NavigationAutoScrollWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentPanel` | `public ScrollablePanel ParentPanel { get; set; }` |
| `AutoScrollTopOffset` | `public int AutoScrollTopOffset { get; set; }` |
| `AutoScrollBottomOffset` | `public int AutoScrollBottomOffset { get; set; }` |
| `AutoScrollLeftOffset` | `public int AutoScrollLeftOffset { get; set; }` |
| `AutoScrollRightOffset` | `public int AutoScrollRightOffset { get; set; }` |
| `IncludeChildren` | `public bool IncludeChildren { get; set; }` |
| `TrackedWidget` | `public Widget TrackedWidget { get; set; }` |
| `ScrollTarget` | `public Widget ScrollTarget { get; set; }` |

## Usage Example

```csharp
var widget = new NavigationAutoScrollWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)