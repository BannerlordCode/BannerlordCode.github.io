<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EquipmentTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EquipmentTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EquipmentTypeVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/EquipmentTypeVisualBrushWidget.cs`

## Overview

`EquipmentTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public string Type { get; set; }` |

## Usage Example

```csharp
// Typical usage of EquipmentTypeVisualBrushWidget (Widget)
// 声明/访问一个 EquipmentTypeVisualBrushWidget
var widget = root.GetChild("equipmentTypeVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)