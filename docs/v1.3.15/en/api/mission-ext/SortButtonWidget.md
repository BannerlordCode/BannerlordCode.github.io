<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SortButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SortButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SortButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs`

## Overview

`SortButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SortState` | `public int SortState { get; set; }` |
| `SortVisualWidget` | `public BrushWidget SortVisualWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of SortButtonWidget (Widget)
// 声明/访问一个 SortButtonWidget
var widget = root.GetChild("sortButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)