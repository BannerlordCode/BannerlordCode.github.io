<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DimensionSyncWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DimensionSyncWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DimensionSyncWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs`

## Overview

`DimensionSyncWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToCopyHeightFrom` | `public Widget WidgetToCopyHeightFrom { get; set; }` |
| `PaddingAmount` | `public int PaddingAmount { get; set; }` |
| `DimensionToSync` | `public DimensionSyncWidget.Dimensions DimensionToSync { get; set; }` |

## Usage Example

```csharp
// Typical usage of DimensionSyncWidget (Widget)
// 声明/访问一个 DimensionSyncWidget
var widget = root.GetChild("dimensionSyncWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)