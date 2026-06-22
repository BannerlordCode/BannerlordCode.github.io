<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemTypeVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTypeVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTypeVisualBrushWidget.cs`

## Overview

`ItemTypeVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemTypeAsString` | `public string ItemTypeAsString { get; set; }` |

## Usage Example

```csharp
// Typical usage of ItemTypeVisualBrushWidget (Widget)
// 声明/访问一个 ItemTypeVisualBrushWidget
var widget = root.GetChild("itemTypeVisualBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)