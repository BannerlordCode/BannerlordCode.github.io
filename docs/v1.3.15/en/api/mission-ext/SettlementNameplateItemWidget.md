<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementNameplateItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementNameplateItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Nameplate/SettlementNameplateItemWidget.cs`

## Overview

`SettlementNameplateItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `IssueType` | `public int IssueType { get; set; }` |
| `InspectedIconWidget` | `public Widget InspectedIconWidget { get; set; }` |
| `PortIconWidget` | `public Widget PortIconWidget { get; set; }` |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget { get; set; }` |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget { get; set; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget { get; set; }` |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |

## Key Methods

### ParallelUpdate
```csharp
public void ParallelUpdate(float dt)
```

## Usage Example

```csharp
// Typical usage of SettlementNameplateItemWidget (Widget)
// 声明/访问一个 SettlementNameplateItemWidget
var widget = root.GetChild("settlementNameplateItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)