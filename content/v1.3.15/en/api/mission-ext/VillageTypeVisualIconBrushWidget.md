---
title: "VillageTypeVisualIconBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillageTypeVisualIconBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageTypeVisualIconBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VillageTypeVisualIconBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/Menu/TownManagement/VillageTypeVisualIconBrushWidget.cs`

## Overview

`VillageTypeVisualIconBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `VillageTypeVisualIconBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `VillageType` | `public int VillageType { get; set; }` |

## Usage Example

```csharp
var widget = new VillageTypeVisualIconBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)