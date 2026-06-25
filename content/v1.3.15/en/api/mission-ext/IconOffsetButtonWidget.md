---
title: "IconOffsetButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IconOffsetButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# IconOffsetButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IconOffsetButtonWidget : IconBrushWidget`
**Base:** `IconBrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/IconOffsetButtonWidget.cs`

## Overview

`IconOffsetButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `IconOffsetButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NormalXOffset` | `public int NormalXOffset { get; set; }` |
| `NormalYOffset` | `public int NormalYOffset { get; set; }` |
| `PressedXOffset` | `public int PressedXOffset { get; set; }` |
| `PressedYOffset` | `public int PressedYOffset { get; set; }` |
| `ButtonIcon` | `public Widget ButtonIcon { get; set; }` |

## Usage Example

```csharp
var widget = new IconOffsetButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)