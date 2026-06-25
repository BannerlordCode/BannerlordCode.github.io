---
title: "IconBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IconBrushWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/IconBrushWidget.cs`

## Overview

`IconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IconBrush` | `public Brush IconBrush { get; set; }` |
| `IconID` | `public string IconID { get; set; }` |
| `UseStylesFromSourceIcon` | `public bool UseStylesFromSourceIcon { get; set; }` |
| `UseIconSize` | `public bool UseIconSize { get; set; }` |

## Usage Example

```csharp
var widget = new IconBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)