<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DescriptionItemVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DescriptionItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DescriptionItemVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement/DescriptionItemVisualBrushWidget.cs`

## Overview

`DescriptionItemVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DescriptionItemVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |

## Key Methods

### DescriptionItemVisualBrushWidget
`public class DescriptionItemVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `description item visual brush widget`.

## Usage Example

```csharp
var widget = new DescriptionItemVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)