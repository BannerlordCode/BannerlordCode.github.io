---
title: "ContextMenuBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ContextMenuBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ContextMenuBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ContextMenuBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/ContextMenuBrushWidget.cs`

## Overview

`ContextMenuBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ContextMenuBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HorizontalPadding` | `public float HorizontalPadding { get; set; }` |
| `VerticalPadding` | `public float VerticalPadding { get; set; }` |
| `IsActivated` | `public bool IsActivated { get; set; }` |
| `ActionListPanel` | `public ListPanel ActionListPanel { get; set; }` |
| `ScrollPanelToWatch` | `public ScrollablePanel ScrollPanelToWatch { get; set; }` |

## Usage Example

```csharp
var widget = new ContextMenuBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)