<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SelectedStateBrushWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SelectedStateBrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class SelectedStateBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SelectedStateBrushWidget.cs`

## Overview

`SelectedStateBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `SelectedState` | `public string SelectedState { get { return this._selectedState; }` |

## Usage Example

```csharp
// Typical usage of SelectedStateBrushWidget (Widget)
// 声明/访问一个 SelectedStateBrushWidget
var widget = root.GetChild("selectedStateBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)