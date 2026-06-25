---
title: "ClanWorkshopTypeVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ClanWorkshopTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ClanWorkshopTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanWorkshopTypeVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan/ClanWorkshopTypeVisualBrushWidget.cs`

## Overview

`ClanWorkshopTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ClanWorkshopTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WorkshopType` | `public string WorkshopType { get; set; }` |

## Key Methods

### ClanWorkshopTypeVisualBrushWidget
`public class ClanWorkshopTypeVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `clan workshop type visual brush widget`.

## Usage Example

```csharp
var widget = new ClanWorkshopTypeVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)