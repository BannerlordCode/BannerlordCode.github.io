<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateEventVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementNameplateEventVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateEventVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateEventVisualBrushWidget.cs`

## Overview

`SettlementNameplateEventVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `AdditionalParameters` | `public string AdditionalParameters { get; set; }` |

## Usage Example

```csharp
// Typical usage of SettlementNameplateEventVisualBrushWidget (Widget)
// 声明/访问一个 SettlementNameplateEventVisualBrushWidget
var widget = root.GetChild("settlementNameplateEventVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)