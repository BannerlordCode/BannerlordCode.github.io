<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EquipmentTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTypeVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/EquipmentTypeVisualBrushWidget.cs`

## Overview

`EquipmentTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `EquipmentTypeVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |

## Key Methods

### EquipmentTypeVisualBrushWidget
`public class EquipmentTypeVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `equipment type visual brush widget`.

## Usage Example

```csharp
var widget = new EquipmentTypeVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)