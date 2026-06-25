---
title: "CompassMarkerTextWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassMarkerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CompassMarkerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassMarkerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission/CompassMarkerTextWidget.cs`

## Overview

`CompassMarkerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CompassMarkerTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPrimary` | `public bool IsPrimary { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `PrimaryBrush` | `public Brush PrimaryBrush { get; set; }` |
| `SecondaryBrush` | `public Brush SecondaryBrush { get; set; }` |

## Usage Example

```csharp
var widget = new CompassMarkerTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)