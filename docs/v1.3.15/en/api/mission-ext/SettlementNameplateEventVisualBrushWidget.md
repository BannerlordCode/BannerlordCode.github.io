<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateEventVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `SettlementNameplateEventVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public int Type { get; set; }` |
| `AdditionalParameters` | `public string AdditionalParameters { get; set; }` |

## Usage Example

```csharp
var widget = new SettlementNameplateEventVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)