---
title: "SingleQueryParentWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleQueryParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SingleQueryParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SingleQueryParentWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Popup/SingleQueryParentWidget.cs`

## Overview

`SingleQueryParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SingleQueryParentWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `DescriptionScrollablePanel` | `public ScrollablePanel DescriptionScrollablePanel { get; set; }` |
| `DescriptionScrollbar` | `public ScrollbarWidget DescriptionScrollbar { get; set; }` |

## Usage Example

```csharp
var widget = new SingleQueryParentWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)